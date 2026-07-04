import { Instagram, Mail } from 'lucide-react';
import { useI18n } from '../i18n';
import type { LegalDoc } from '../legal';

function TikTokLogo({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8a4.7 4.7 0 0 1-2.9-2.6A4.6 4.6 0 0 1 13.4 2h-3.1v13.1a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.4-2.5V9.3a5.7 5.7 0 0 0-.8-.06 5.7 5.7 0 0 0-5.7 5.7A5.7 5.7 0 0 0 7.7 20.6a5.7 5.7 0 0 0 5.7-5.7V8.3a7.7 7.7 0 0 0 4.5 1.45V6.6a4.7 4.7 0 0 1-1.3-.8z" />
    </svg>
  );
}

export default function Footer({ onOpenLegal }: { onOpenLegal: (doc: LegalDoc) => void }) {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { label: 'Instagram · @savora.cook', Icon: Instagram, href: 'https://instagram.com/savora.cook' },
    { label: 'TikTok · @savora.cook', Icon: TikTokLogo, href: 'https://www.tiktok.com/@savora.cook' },
    { label: 'Email · savorachef@gmail.com', Icon: Mail, href: 'mailto:savorachef@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Savora home">
            <img src="/logo.png" alt="" className="brand-logo" />
            <span className="brand-name">Savora</span>
          </a>
          <p className="footer-tag">{t('footer.tagline')}</p>
          <span className="footer-soon">
            <span className="dot" />
            {t('nav.comingSoon')}
          </span>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                className="social"
                aria-label={label}
                title={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <nav className="footer-links">
            <button className="footer-link-btn" onClick={() => onOpenLegal('privacy')}>{t('footer.privacy')}</button>
            <span className="footer-dot">·</span>
            <button className="footer-link-btn" onClick={() => onOpenLegal('terms')}>{t('footer.terms')}</button>
          </nav>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Savora. {t('footer.rights')}</p>
        <p className="footer-made">{t('footer.madeWith')}</p>
      </div>
    </footer>
  );
}
