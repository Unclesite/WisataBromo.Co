import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  Send, 
  RefreshCw, 
  Mail, 
  User, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Search, 
  X,
  FileCode,
  ShieldCheck,
  Paperclip
} from 'lucide-react';
import { InboxEmailItem, SentEmailItem } from '../../types/admin';

export const AdminEmailTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'INBOX' | 'SENT'>('INBOX');
  const [inboxEmails, setInboxEmails] = useState<InboxEmailItem[]>([]);
  const [sentEmails, setSentEmails] = useState<SentEmailItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Selected email reader modal
  const [selectedInbox, setSelectedInbox] = useState<InboxEmailItem | null>(null);
  const [selectedSent, setSelectedSent] = useState<SentEmailItem | null>(null);

  const fetchEmails = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      if (activeSubTab === 'INBOX') {
        const res = await fetch('/api/admin/emails/inbox');
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setInboxEmails(json.data);
        } else {
          setErrorMsg(json.error || 'Gagal memuat inbox email.');
        }
      } else {
        const res = await fetch('/api/admin/emails/sent');
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setSentEmails(json.data);
        } else {
          setErrorMsg(json.error || 'Gagal memuat riwayat email terkirim.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Koneksi ke backend gagal.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [activeSubTab]);

  const filteredInbox = inboxEmails.filter(
    (e) =>
      !searchTerm ||
      e.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.fromName && e.fromName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredSent = sentEmails.filter(
    (e) =>
      !searchTerm ||
      e.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.bookingCode && e.bookingCode.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (e.customerName && e.customerName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner & Tab Selector */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl shrink-0">
          <button
            onClick={() => setActiveSubTab('INBOX')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeSubTab === 'INBOX'
                ? 'bg-white text-blue-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Inbox className="w-4 h-4 text-blue-600" />
            <span>INBOX (Hostinger Mail)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('SENT')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeSubTab === 'SENT'
                ? 'bg-white text-blue-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Send className="w-4 h-4 text-emerald-600" />
            <span>SENT (Notifikasi Sistem)</span>
          </button>
        </div>

        <div className="flex items-center gap-2 flex-1 sm:max-w-md justify-end">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari subjek, email, kode booking..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <button
            onClick={fetchEmails}
            disabled={isLoading}
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl border border-slate-200 transition cursor-pointer disabled:opacity-50"
            title="Muat Ulang"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center justify-between">
          <span>{errorMsg}</span>
          <button onClick={fetchEmails} className="underline font-semibold cursor-pointer">
            Coba lagi
          </button>
        </div>
      )}

      {/* INBOX VIEW */}
      {activeSubTab === 'INBOX' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Pesan Masuk (cs@wisatabromo.co)
              </h2>
              <p className="text-xs text-slate-500">Membaca inquiry dan email masuk pelanggan dari mail server</p>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {filteredInbox.length} pesan
            </span>
          </div>

          {filteredInbox.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              {isLoading ? 'Memuat pesan masuk...' : 'Tidak ada pesan email di inbox.'}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredInbox.map((mail) => (
                <div
                  key={mail.id}
                  onClick={() => setSelectedInbox(mail)}
                  className="p-4 sm:p-5 hover:bg-blue-50/40 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {mail.fromName ? mail.fromName.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                          {mail.fromName || mail.from}
                        </span>
                        {mail.hasAttachments && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            <Paperclip className="w-2.5 h-2.5" /> Lampiran
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-0.5 truncate">
                        {mail.subject}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {mail.preview}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-slate-400">
                      {new Date(mail.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SENT VIEW */}
      {activeSubTab === 'SENT' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Email Terkirim Sistem WisataBromo.co
              </h2>
              <p className="text-xs text-slate-500">
                Riwayat notifikasi booking otomatis ke Admin & Invoice Customer via SMTP Hostinger
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {filteredSent.length} tercatat
            </span>
          </div>

          {filteredSent.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              {isLoading ? 'Memuat riwayat sent...' : 'Belum ada notifikasi email yang dikirim pada sesi ini.'}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredSent.map((mail) => (
                <div
                  key={mail.id}
                  onClick={() => setSelectedSent(mail)}
                  className="p-4 sm:p-5 hover:bg-emerald-50/40 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                      mail.recipientType === 'admin'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {mail.recipientType === 'admin' ? 'ADM' : 'CST'}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          Ke: {mail.recipient}
                        </span>
                        {mail.bookingCode && (
                          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {mail.bookingCode}
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          mail.status === 'SENT'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {mail.status}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-800 mt-1 truncate">
                        {mail.subject}
                      </div>

                      {mail.messageId && (
                        <div className="text-[11px] text-slate-400 font-mono truncate mt-0.5">
                          ID: {mail.messageId}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-slate-400">
                      {new Date(mail.sentAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Detail Inbox */}
      {selectedInbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh]">
            <div className="bg-[#102a56] text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-blue-200" />
                <h3 className="text-sm sm:text-base font-bold line-clamp-1">
                  {selectedInbox.subject}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInbox(null)}
                className="p-1.5 text-white/70 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-xs">
                <div><span className="text-slate-400">Dari:</span> <strong className="text-slate-800">{selectedInbox.fromName}</strong> ({selectedInbox.from})</div>
                <div><span className="text-slate-400">Kepada:</span> {selectedInbox.to}</div>
                <div><span className="text-slate-400">Waktu:</span> {new Date(selectedInbox.date).toLocaleString('id-ID')}</div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Isi Pesan:</div>
                <div className="text-slate-800 leading-relaxed whitespace-pre-wrap bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-sm">
                  {selectedInbox.bodyText || selectedInbox.preview}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedInbox(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail Sent Email HTML Preview */}
      {selectedSent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-emerald-950 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Send className="w-5 h-5 text-emerald-300" />
                <div>
                  <div className="text-xs text-emerald-300 font-medium">Preview Email Terkirim</div>
                  <h3 className="text-sm sm:text-base font-bold line-clamp-1">{selectedSent.subject}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedSent(null)}
                className="p-1.5 text-white/70 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 border-b border-slate-100 text-xs flex flex-wrap gap-4 text-slate-600">
              <div>Penerima: <strong>{selectedSent.recipient}</strong></div>
              {selectedSent.bookingCode && <div>Kode: <strong className="font-mono">{selectedSent.bookingCode}</strong></div>}
              <div>Status: <strong className="text-emerald-700">{selectedSent.status}</strong></div>
              <div>Waktu: {new Date(selectedSent.sentAt).toLocaleString('id-ID')}</div>
            </div>

            <div className="p-4 overflow-y-auto flex-1 bg-slate-100 min-h-[350px]">
              {selectedSent.previewHtml ? (
                <div className="bg-white rounded-xl shadow-xs p-2 overflow-x-auto">
                  <iframe
                    title="Email Preview"
                    srcDoc={selectedSent.previewHtml}
                    className="w-full min-h-[450px] border-0 rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center text-slate-400 py-12 text-sm">
                  Tidak ada preview HTML tersedia.
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedSent(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
