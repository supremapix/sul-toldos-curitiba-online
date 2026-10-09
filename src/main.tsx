import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import App from './App.tsx'
import './index.css'

// Loading fallback — evita tela branca
const LoadingFallback = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'hsl(0 0% 5%)',
    flexDirection: 'column',
    gap: '16px'
  }}>
    <div style={{
      width: '60px',
      height: '60px',
      border: '4px solid hsl(0 84% 60% / 0.3)',
      borderTopColor: 'hsl(0 84% 60%)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <p style={{ color: 'hsl(0 84% 60%)', fontFamily: 'sans-serif', fontSize: '1rem' }}>
      Carregando Toldos Comerciais Curitiba...
    </p>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// Error handling global
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
  event.preventDefault();
});

window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>
);
