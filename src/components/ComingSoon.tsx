import { Sparkles } from 'lucide-react';
import { useI18n } from '../i18n';
import Reveal from './Reveal';
import StoreBadges from './StoreBadges';

export default function ComingSoon() {
  const { t } = useI18n();

  return (
    <section className="section cta" id="download">
      <div className="container">
        <Reveal className="cta-card">
          <div className="cta-glow" aria-hidden="true" />

          <div className="cta-badge">
            <span className="dot" />
            {t('cta.tag')}
          </div>

          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-sub">{t('cta.subtitle')}</p>

          <StoreBadges compact />

          <div className="cta-pulse" aria-hidden="true">
            <span className="pulse-ring" />
            <span className="pulse-core"><Sparkles size={20} strokeWidth={2} /></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
