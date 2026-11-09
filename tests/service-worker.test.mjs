import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const worker = await readFile(new URL('../public/sw.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

function setup({ failingNavigation = false } = {}) {
  const listeners = {};
  const calls = [];
  const cached = new Set(['sultoldos-v1', 'sultoldos-v2', 'another-app-cache']);
  vm.runInNewContext(worker, {
    caches: {
      keys: async () => [...cached],
      delete: async (name) => { calls.push(`delete:${name}`); return cached.delete(name); },
    },
    self: {
      addEventListener: (name, handler) => { listeners[name] = handler; },
      skipWaiting: async () => { calls.push('skipWaiting'); },
      registration: {
        scope: 'https://www.sultoldos.app.br/',
        unregister: async () => { calls.push('unregister'); return true; },
      },
      clients: {
        claim: async () => { calls.push('claim'); },
        matchAll: async (options) => {
          assert.equal(options.type, 'window');
          return ['https://www.sultoldos.app.br/', 'https://www.sultoldos.app.br/faq', 'https://other.example/'].map((url) => ({
            url,
            navigate: async (target) => {
              calls.push(`navigate:${target}`);
              if (failingNavigation) throw new Error('Tab was closed');
            },
          }));
        },
      },
    },
  });
  return {
    calls, cached, listeners,
    dispatch: async (name) => {
      let completion;
      listeners[name]({ waitUntil: (promise) => { completion = promise; } });
      await completion;
    },
  };
}

test('replacement activates immediately instead of waiting behind stale tabs', async () => {
  const app = setup();
  await app.dispatch('install');
  assert.deepEqual(app.calls, ['skipWaiting']);
});

test('retires only Sul Toldos caches before reloading controlled pages once', async () => {
  const app = setup();
  await app.dispatch('activate');
  assert.deepEqual([...app.cached], ['another-app-cache']);
  assert.deepEqual(app.calls, [
    'delete:sultoldos-v1', 'delete:sultoldos-v2', 'claim', 'unregister',
    'navigate:https://www.sultoldos.app.br/', 'navigate:https://www.sultoldos.app.br/faq',
  ]);
});

test('does not intercept future network requests or re-register a worker', () => {
  assert.equal(setup().listeners.fetch, undefined);
  assert.doesNotMatch(html, /serviceWorker\.register\s*\(/);
});

test('a closed tab does not reject the cache migration', async () => {
  await setup({ failingNavigation: true }).dispatch('activate');
});

test('HTML supplies useful content and contact links before JavaScript loads', () => {
  assert.match(html, /<div id="root">\s*<main class="startup-fallback">/);
  assert.match(html, /Toldos e coberturas para sua empresa/);
  assert.match(html, /href="https:\/\/wa.me\/5541998000366"/);
  assert.match(html, /href="tel:\+5541998000366"/);
});
