import { useState, useEffect } from 'react';
import { useI18n } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'features', label: t('nav.features') },
    { id: 'preview', label: t('nav.preview') },
    { id: 'why', label: t('nav.why') },
    { id: 'download', label: t('nav.download') },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Savora home">
          <img src="/logo.png" alt="" className="brand-logo" />
          <span className="brand-name">Savora</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <span className="nav-soon">{t('nav.comingSoon')}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
