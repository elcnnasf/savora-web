import { useI18n } from '../i18n';

function AppleLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.78c-.02-2.06 1.68-3.05 1.76-3.1-0.96-1.4-2.46-1.6-2.99-1.62-1.27-.13-2.48.75-3.12.75-.65 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.67 2.67-.67 1.24 0 1.6.67 2.69.65 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.0 6.5c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.87 2.52.91.07 1.85-.46 2.42-1.15z" />
    </svg>
  );
}

function PlayLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3c-.3.24-.5.62-.5 1.1v17.2c0 .48.2.86.5 1.1l.1.06L13 12.06v-.12L3.7 2.24l-.1.06z" fill="#5BC9F4" />
      <path d="M16.3 15.3 13 12.06v-.12L16.3 8.7l.08.05 3.9 2.22c1.12.63 1.12 1.67 0 2.31l-3.9 2.22-.08-.2z" fill="#F9A21B" />
      <path d="M16.38 15.25 13 11.94 3.6 21.7c.37.4.98.44 1.68.06l11.1-6.51z" fill="#EA4335" />
      <path d="M16.38 8.75 5.28 2.24C4.58 1.86 3.97 1.9 3.6 2.3L13 11.94l3.38-3.19z" fill="#34A853" />
    </svg>
  );
}

/** Non-clickable App Store / Google Play badges with a "coming soon" note. */
export default function StoreBadges({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();

  return (
    <div className={`store-badges ${compact ? 'store-badges-compact' : ''}`}>
      <div className="store-col">
        <div className="store-badge" aria-disabled="true" role="img" aria-label="Download on the App Store — coming soon">
          <AppleLogo />
          <span className="store-text">
            <span className="store-top">{t('cta.soon')}</span>
            <span className="store-bottom">{t('cta.appstore')}</span>
          </span>
        </div>
      </div>

      <div className="store-col">
        <div className="store-badge" aria-disabled="true" role="img" aria-label="Get it on Google Play — coming soon">
          <PlayLogo />
          <span className="store-text">
            <span className="store-top">{t('cta.soon')}</span>
            <span className="store-bottom">{t('cta.googleplay')}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
