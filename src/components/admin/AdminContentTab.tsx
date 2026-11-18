import React, { useState, useEffect } from 'react';
import { 
  Save, 
  RefreshCw, 
  Check, 
  AlertCircle, 
  Sparkles, 
  HelpCircle, 
  Phone, 
  Package, 
  Plus, 
  Trash2, 
  Megaphone 
} from 'lucide-react';
import { WebsiteContentConfig } from '../../types/admin';
import { getWebsiteContent, saveWebsiteContent } from '../../services/cmsContentService';

interface AdminContentTabProps {
  adminEmail: string;
}

export const AdminContentTab: React.FC<AdminContentTabProps> = ({ adminEmail }) => {
  const [content, setContent] = useState<WebsiteContentConfig | null>(null);
  const [activeSection, setActiveSection] = useState<'hero' | 'packages' | 'contact' | 'faqs' | 'notice'>('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const loadContent = async () => {
    setIsLoading(true);
    setStatusFeedback(null);
    try {
      const data = await getWebsiteContent();
      setContent(data);
    } catch (err: any) {
      setStatusFeedback({ type: 'error', message: err.message || 'Gagal memuat konten.' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    setStatusFeedback(null);
    try {
      const res = await saveWebsiteContent(content, adminEmail);
      if (res.success) {
        setStatusFeedback({ type: 'success', message: 'Konten website berhasil disimpan ke Firestore!' });
        setTimeout(() => setStatusFeedback(null), 4000);
      } else {
        setStatusFeedback({ type: 'error', message: res.error || 'Gagal menyimpan perubahan.' });
      }
    } catch (err: any) {
      setStatusFeedback({ type: 'error', message: err.message || 'Kesalahan koneksi.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || !content) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400 text-sm">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-600 mb-3" />
        Memuat data konten website dari Firestore...
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Bar Action */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">CMS Editor Website</h2>
          <p className="text-xs text-slate-500">
            Perbarui teks homepage, paket tur, kontak, & FAQ secara dinamis tanpa edit source code
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadContent}
            disabled={isSaving}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition cursor-pointer"
            title="Reload dari Database"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102a56] hover:bg-[#163873] text-white font-semibold text-xs rounded-xl shadow-md transition active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
          </button>
        </div>
      </div>

      {statusFeedback && (
        <div
          className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-semibold ${
            statusFeedback.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          {statusFeedback.type === 'success' ? (
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{statusFeedback.message}</span>
        </div>
      )}

      {/* Section Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveSection('hero')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeSection === 'hero'
              ? 'bg-[#102a56] text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Hero & Judul
        </button>

        <button
          onClick={() => setActiveSection('packages')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeSection === 'packages'
              ? 'bg-[#102a56] text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          Paket & Harga ({content.customPackages?.length || 0})
        </button>

        <button
          onClick={() => setActiveSection('contact')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeSection === 'contact'
              ? 'bg-[#102a56] text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          Kontak & Rekening BCA
        </button>

        <button
          onClick={() => setActiveSection('faqs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeSection === 'faqs'
              ? 'bg-[#102a56] text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          FAQ Pertanyaan
        </button>

        <button
          onClick={() => setActiveSection('notice')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeSection === 'notice'
              ? 'bg-[#102a56] text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Megaphone className="w-3.5 h-3.5" />
          Banner Informasi
        </button>
      </div>

      {/* SECTION 1: HERO */}
      {activeSection === 'hero' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            Header Homepage & Hero Copy
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Highlight</label>
            <input
              type="text"
              value={content.hero.badge}
              onChange={(e) =>
                setContent({ ...content, hero: { ...content.hero, badge: e.target.value } })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Judul Utama (Headline)</label>
              <textarea
                rows={2}
                value={content.hero.headline}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, headline: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Highlight (Gradient Text)</label>
              <input
                type="text"
                value={content.hero.highlightWord}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, highlightWord: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Kata ini akan diwarnai gradien oranye/biru tebal pada judul.
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subjudul / Deskripsi Hero</label>
            <textarea
              rows={3}
              value={content.hero.subheadline}
              onChange={(e) =>
                setContent({ ...content, hero: { ...content.hero, subheadline: e.target.value } })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Counter Tamu Terpercaya</label>
              <input
                type="text"
                value={content.hero.trustedCounter}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, trustedCounter: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Pengumuman Header (Ticker)</label>
              <input
                type="text"
                value={content.hero.announcementText || ''}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, announcementText: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: PACKAGES */}
      {activeSection === 'packages' && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-xs text-blue-900 leading-relaxed">
            💡 <strong>Info Paket Wisata:</strong> Mengedit harga dan deskripsi di sini akan otomatis memperbarui tampilan card paket dan kalkulator harga di website.
          </div>

          {content.customPackages?.map((pkg, idx) => (
            <div key={pkg.id || idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{pkg.title}</div>
                <span className="font-mono text-xs text-slate-400">ID: {pkg.id}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Judul Paket</label>
                  <input
                    type="text"
                    value={pkg.title}
                    onChange={(e) => {
                      const updated = [...(content.customPackages || [])];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, customPackages: updated });
                    }}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Harga Dasar (Rp)</label>
                  <input
                    type="number"
                    value={pkg.price}
                    onChange={(e) => {
                      const updated = [...(content.customPackages || [])];
                      updated[idx].price = Number(e.target.value);
                      setContent({ ...content, customPackages: updated });
                    }}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Badge Promo/Label</label>
                  <input
                    type="text"
                    value={pkg.badge || ''}
                    onChange={(e) => {
                      const updated = [...(content.customPackages || [])];
                      updated[idx].badge = e.target.value;
                      setContent({ ...content, customPackages: updated });
                    }}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Subjudul / Deskripsi Singkat</label>
                <textarea
                  rows={2}
                  value={pkg.subtitle}
                  onChange={(e) => {
                    const updated = [...(content.customPackages || [])];
                    updated[idx].subtitle = e.target.value;
                    setContent({ ...content, customPackages: updated });
                  }}
                  className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: CONTACT & BCA */}
      {activeSection === 'contact' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            Informasi Kontak Resmi & Rekening Pembayaran
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Hotline WhatsApp</label>
              <input
                type="text"
                value={content.contact.whatsappHotline}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, whatsappHotline: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Customer Service</label>
              <input
                type="email"
                value={content.contact.csEmail}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, csEmail: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor Rekening BCA</label>
              <input
                type="text"
                value={content.contact.bcaAccountNumber}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, bcaAccountNumber: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-blue-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Atas Nama Rekening</label>
              <input
                type="text"
                value={content.contact.bcaAccountHolder}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, bcaAccountHolder: e.target.value } })
                }
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Kantor Operasional Malang</label>
            <input
              type="text"
              value={content.contact.officeAddressMalang}
              onChange={(e) =>
                setContent({ ...content, contact: { ...content.contact, officeAddressMalang: e.target.value } })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Basecamp Sukapura Bromo</label>
            <input
              type="text"
              value={content.contact.officeAddressSukapura}
              onChange={(e) =>
                setContent({ ...content, contact: { ...content.contact, officeAddressSukapura: e.target.value } })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
        </div>
      )}

      {/* SECTION 4: FAQS */}
      {activeSection === 'faqs' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">FAQ / Tanya Jawab Seputar Wisata Bromo</h3>
            <button
              type="button"
              onClick={() => {
                const newFaqs = [...(content.faqs || []), { question: 'Pertanyaan baru?', answer: 'Jawaban...' }];
                setContent({ ...content, faqs: newFaqs });
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Tambah FAQ
            </button>
          </div>

          <div className="space-y-3">
            {content.faqs?.map((faq, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative group">
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...(content.faqs || [])];
                    updated.splice(idx, 1);
                    setContent({ ...content, faqs: updated });
                  }}
                  className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition"
                  title="Hapus Pertanyaan Ini"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Pertanyaan #{idx + 1}
                  </label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = [...(content.faqs || [])];
                      updated[idx].question = e.target.value;
                      setContent({ ...content, faqs: updated });
                    }}
                    className="w-full p-2 text-xs bg-white border border-slate-200 rounded-lg font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Jawaban
                  </label>
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => {
                      const updated = [...(content.faqs || [])];
                      updated[idx].answer = e.target.value;
                      setContent({ ...content, faqs: updated });
                    }}
                    className="w-full p-2 text-xs bg-white border border-slate-200 rounded-lg leading-relaxed text-slate-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: NOTICE BANNER */}
      {activeSection === 'notice' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Banner Pemberitahuan Khusus / Darurat</h3>
              <p className="text-xs text-slate-500">Muncul di atas header jika diaktifkan (misal status erupsi/buka tutup TNBTS)</p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={content.importantNotice?.active || false}
                onChange={(e) =>
                  setContent({
                    ...content,
                    importantNotice: {
                      title: content.importantNotice?.title || 'Pengumuman Penting',
                      content: content.importantNotice?.content || '',
                      level: content.importantNotice?.level || 'info',
                      active: e.target.checked
                    }
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Judul Pengumuman</label>
            <input
              type="text"
              value={content.importantNotice?.title || ''}
              onChange={(e) =>
                setContent({
                  ...content,
                  importantNotice: {
                    ...content.importantNotice!,
                    title: e.target.value
                  }
                })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Teks Lengkap Pengumuman</label>
            <textarea
              rows={3}
              value={content.importantNotice?.content || ''}
              onChange={(e) =>
                setContent({
                  ...content,
                  importantNotice: {
                    ...content.importantNotice!,
                    content: e.target.value
                  }
                })
              }
              className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
            />
          </div>
        </div>
      )}
    </div>
  );
};
