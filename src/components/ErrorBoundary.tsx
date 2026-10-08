import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React Component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-[#111318]">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#0996f5] rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-black text-slate-900">WisataBromo.co</h1>
            <p className="text-sm text-slate-600">
              Terjadi penyesuaian sistem sementara. Silakan segarkan halaman untuk memuat konten terbaru.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="w-full py-3 px-4 bg-[#0996f5] hover:bg-[#0782d6] text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Segarkan Halaman
              </button>
              <a
                href="https://wa.me/6281222290318"
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors block"
              >
                Bantuan WhatsApp: +62 812 2229 0318
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
