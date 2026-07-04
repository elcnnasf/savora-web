import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useI18n } from '../i18n';
import { getLegal, type LegalDoc } from '../legal';

interface Props {
  doc: LegalDoc | null;
  onClose: () => void;
}

/** Lightweight "page" that opens over the site for Privacy / Terms. */
export default function LegalModal({ doc, onClose }: Props) {
  const { lang } = useI18n();

  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [doc, onClose]);

  if (!doc) return null;
  const content = getLegal(lang, doc);

  return (
    <div className="legal-overlay" onClick={onClose}>
      <div className="legal-page" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={content.title}>
        <div className="legal-bar">
          <a className="brand legal-brand" href="#top" onClick={onClose}>
            <img src="/logo.png" alt="" className="brand-logo" />
            <span className="brand-name">Savora</span>
          </a>
          <button className="legal-close" onClick={onClose} aria-label="Close">
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>

        <div className="legal-scroll">
          <div className="legal-doc">
            <h1 className="legal-title">{content.title}</h1>
            <p className="legal-updated">{content.updated}</p>
            <p className="legal-intro">{content.intro}</p>

            {content.sections.map((s, i) => (
              <section className="legal-section" key={i}>
                <h2 className="legal-h">{s.h}</h2>
                <p className="legal-p">{s.p}</p>
              </section>
            ))}

            <p className="legal-foot">© {new Date().getFullYear()} Savora · Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
