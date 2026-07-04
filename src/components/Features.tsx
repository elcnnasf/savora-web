import {
  Sparkles, ScanLine, Refrigerator, Heart, Activity, MessageCircle,
} from 'lucide-react';
import { useI18n } from '../i18n';
import Reveal from './Reveal';

export default function Features() {
  const { t } = useI18n();

  const items = [
    { icon: Sparkles, key: 'ai' },
    { icon: ScanLine, key: 'scan' },
    { icon: Refrigerator, key: 'pantry' },
    { icon: Heart, key: 'reco' },
    { icon: Activity, key: 'nutrition' },
    { icon: MessageCircle, key: 'assistant' },
  ];

  return (
    <section className="section features" id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="tag">{t('features.tag')}</span>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-sub">{t('features.subtitle')}</p>
        </Reveal>

        <div className="feature-grid">
          {items.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Reveal className="feature-card" delay={idx * 70} key={f.key}>
                <div className="feature-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="feature-title">{t(`features.${f.key}.title`)}</h3>
                <p className="feature-desc">{t(`features.${f.key}.desc`)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
