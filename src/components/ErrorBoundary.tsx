import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  isSection?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  copied: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    copied: false
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🔥 [WisataBromo React Runtime Error Caught by ErrorBoundary]:', error);
    console.error('Component Stack Trace:', errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  private handleCopyError = () => {
    const errorDetails = [
      `WisataBromo.co Runtime Error:`,
      `Name: ${this.state.error?.name || 'Unknown'}`,
      `Message: ${this.state.error?.message || 'No error message'}`,
      `Stack: ${this.state.error?.stack || 'No stack'}`,
      `Component Stack: ${this.state.errorInfo?.componentStack || 'No component stack'}`
    ].join('\n\n');

    navigator.clipboard?.writeText(errorDetails).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 3000);
    }).catch(() => {
      this.setState({ copied: true });
    });
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  private handleBackToHome = () => {
    window.location.hash = '';
    window.location.pathname = '/';
  };

  public render() {
    if (this.state.hasError) {
      // In-place fallback for small section boundaries
      if (this.props.isSection) {
        return (
          <div className="w-full my-4 p-5 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950 font-sans shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                !
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-rose-900">
                  {this.props.fallbackTitle || 'Komponen Sedang Bermasalah'}
                </h4>
                <p className="text-xs text-rose-700 mt-1 font-mono break-all bg-white/70 p-2 rounded border border-rose-200">
                  {this.state.error?.message || 'Terjadi kesalahan internal pada komponen ini.'}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={this.handleReset}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Coba Lagi
                  </button>
                  <button
                    onClick={this.handleCopyError}
                    className="px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {this.state.copied ? 'Tersalin ✓' : 'Salin Detail Error'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Full Page Error Boundary Screen
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 font-sans text-slate-100">
          <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-500/30 text-left space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
              <div className="w-12 h-12 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black text-white">
                  WisataBromo.co - React Runtime Error
                </h1>
                <p className="text-xs text-rose-300 font-medium">
                  Komponen React mengalami crash saat rendering. Rincian error ditampilkan di bawah:
                </p>
              </div>
            </div>

            {/* Error Message Box */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Pesan Kesalahan (Error Message):
              </span>
              <div className="bg-slate-950/90 border border-rose-500/40 rounded-xl p-3 text-rose-200 font-mono text-xs sm:text-sm break-all select-all">
                {this.state.error?.name || 'Error'}: {this.state.error?.message || 'Unknown runtime error'}
              </div>
            </div>

            {/* Stack Trace Collapsible Box */}
            {this.state.error?.stack && (
              <details className="group bg-slate-950/60 border border-slate-700/70 rounded-xl p-3 text-xs">
                <summary className="font-semibold text-slate-300 cursor-pointer hover:text-white select-none flex items-center justify-between">
                  <span>Lihat Stack Trace &amp; Komponen</span>
                  <span className="text-slate-500 text-[10px] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 space-y-2">
                  <div className="text-[11px] text-slate-400 font-mono overflow-x-auto p-2 bg-slate-900 rounded max-h-48 whitespace-pre font-mono">
                    {this.state.error.stack}
                  </div>
                  {this.state.errorInfo?.componentStack && (
                    <div className="text-[11px] text-amber-300/80 font-mono overflow-x-auto p-2 bg-slate-900/90 rounded max-h-40 whitespace-pre font-mono">
                      {this.state.errorInfo.componentStack}
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-3 px-4 bg-[#0996f5] hover:bg-[#0782d6] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer text-center"
              >
                Segarkan Halaman (Reload)
              </button>
              <button
                onClick={this.handleBackToHome}
                className="py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer text-center"
              >
                Kembali ke Beranda
              </button>
              <button
                onClick={this.handleCopyError}
                className="py-3 px-4 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
              >
                {this.state.copied ? '✓ Detail Disalin' : 'Salin Detail Error'}
              </button>
            </div>

            <div className="text-center pt-1 border-t border-slate-700/50">
              <a
                href="https://wa.me/6281222290318"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Pusat Bantuan WhatsApp: +62 812 2229 0318
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
