import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Root Error Boundary yang menangkap setiap crash di React Component Tree
 * dan menampilkan kotak merah informatif di layar (bukan layar putih polos).
 */
class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🔥 [CRASH DETECTED IN REACT TREE]:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#071A2B',
          color: '#ffffff',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '680px',
            width: '100%',
            backgroundColor: '#1f1315',
            border: '2px solid #ef4444',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid #7f1d1d', paddingBottom: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#ef4444',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: '22px'
              }}>!</div>
              <div>
                <h2 style={{ margin: 0, fontSize: '18px', color: '#f87171', fontWeight: 800 }}>
                  React Runtime Error Terdeteksi
                </h2>
                <p style={{ margin: '3px 0 0', fontSize: '12px', color: '#fca5a5' }}>
                  Komponen gagal me-render dengan pesan berikut:
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: '#0d0507',
              border: '1px solid #991b1b',
              borderRadius: '10px',
              padding: '14px',
              marginBottom: '16px',
              overflowX: 'auto'
            }}>
              <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '14px', color: '#fca5a5', fontWeight: 700, wordBreak: 'break-word' }}>
                {this.state.error?.name || 'Error'}: {this.state.error?.message || 'Unknown runtime error'}
              </p>
              {this.state.error?.stack && (
                <pre style={{
                  margin: '10px 0 0',
                  fontSize: '11px',
                  color: '#fda4af',
                  overflowX: 'auto',
                  whiteSpace: 'pre-wrap',
                  maxHeight: '220px',
                  backgroundColor: '#18080b',
                  padding: '10px',
                  borderRadius: '6px'
                }}>
                  {this.state.error.stack}
                </pre>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Segarkan Halaman (Reload)
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Global window error listener untuk menangkap error sebelum mount
window.addEventListener('error', (event) => {
  console.error('🔥 [Global Window Error]:', event.error || event.message);
  const mount = document.getElementById('root');
  if (mount && (!mount.innerHTML || mount.innerHTML.trim() === '')) {
    mount.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #071A2B; color: #fff; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 600px; width: 100%; background: #1f1315; border: 2px solid #ef4444; border-radius: 16px; padding: 24px;">
          <h2 style="color: #ef4444; margin: 0 0 10px;">⚠️ Script Error</h2>
          <pre style="background: #0d0507; color: #fca5a5; padding: 12px; border-radius: 8px; font-size: 13px; overflow: auto;">${event.message || 'JavaScript Error'}</pre>
          <button onclick="location.reload()" style="margin-top: 14px; background: #ef4444; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">Muat Ulang</button>
        </div>
      </div>
    `;
  }
});

const mount = document.getElementById('root');
if (mount) {
  const root = createRoot(mount);
  root.render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}
