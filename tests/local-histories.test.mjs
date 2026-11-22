import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const sitemap = read('../public/sitemap.xml');
const content = JSON.parse(read('../src/data/sulLocalHistories.json'));

for (const scope of ['bairro', 'cidade']) {
  test(`Histórias, aplicações e fontes para as páginas de ${scope}`, () => {
    const expected = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => decodeURI(new URL(match[1]).pathname))
      .filter((path) => path.startsWith(`/${scope}/`))
      .map((path) => path.split('/')[2]);
    const rows = content[`${scope}s`];
    assert.equal(rows.length, expected.length);
    assert.deepEqual(rows.map((row) => row.slug).sort(), expected.sort());
    assert.equal(new Set(rows.map((row) => row.benefit)).size, rows.length);
    for (const row of rows) {
      assert.ok(row.name && row.history.length > 80 && row.benefit.length > 60, row.slug);
      assert.equal(new URL(row.sourceUrl).protocol, 'https:');
      assert.ok(row.sourceLabel, row.slug);
    }
  });
}
