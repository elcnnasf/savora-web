import { useState, useRef, useEffect } from 'react';
import { Check, Globe, ChevronDown } from 'lucide-react';
import { useI18n, LANGS, type Lang } from '../i18n';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  function pick(code: Lang) {
    setLang(code);
    setOpen(false);
  }

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe size={16} strokeWidth={2} />
        <span className="lang-code">{current.code.toUpperCase()}</span>
        <ChevronDown size={14} strokeWidth={2.5} className={`lang-caret ${open ? 'up' : ''}`} />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                className={`lang-item ${l.code === lang ? 'active' : ''}`}
                onClick={() => pick(l.code)}
                role="option"
                aria-selected={l.code === lang}
              >
                <span className="lang-flag">{l.flag}</span>
                <span className="lang-label">{l.label}</span>
                {l.code === lang && <Check size={15} strokeWidth={2.5} className="lang-check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
