import { Sparkles, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n';
import StoreBadges from './StoreBadges';
import PhoneMockup from './PhoneMockup';
import { ScreenImage } from './ScreenMockups';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="dot" />
            <Sparkles size={13} strokeWidth={2.5} />
            {t('hero.badge')}
          </div>

          <h1 className="hero-title">
            {t('hero.title1')}<br />
            <span className="grad">{t('hero.title2')}</span>
          </h1>

          <p className="hero-sub">{t('hero.subtitle')}</p>

          <div className="hero-store">
            <StoreBadges />
            <p className="hero-store-note">{t('hero.storeSoon')}</p>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneMockup className="hero-phone" bare>
            <ScreenImage src="/img/screen-home.jpg" alt="Savora Home screen" />
          </PhoneMockup>
        </div>
      </div>

      <a href="#features" className="hero-scroll" aria-label={t('hero.scroll')}>
        <span>{t('hero.scroll')}</span>
        <ChevronDown size={18} strokeWidth={2.5} />
      </a>
    </section>
  );
}
