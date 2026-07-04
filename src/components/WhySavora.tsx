import { Brain, Zap, Sparkles, UserCheck, Home, Check } from 'lucide-react';
import { useI18n } from '../i18n';
import Reveal from './Reveal';

export default function WhySavora() {
  const { t } = useI18n();

  const small = [
    { icon: Zap, key: 'fast' },
    { icon: Sparkles, key: 'beautiful' },
    { icon: UserCheck, key: 'personal' },
    { icon: Home, key: 'everyday' },
  ];

  return (
    <section className="section why" id="why">
      <div className="container">
        <Reveal className="section-head">
          <span className="tag">{t('why.tag')}</span>
          <h2 className="section-title">{t('why.title')}</h2>
          <p className="section-sub">{t('why.subtitle')}</p>
        </Reveal>

        <div className="why-grid">
          <Reveal className="why-card why-card-big">
            <div className="why-icon why-icon-big">
              <Brain size={26} strokeWidth={2} />
            </div>
            <h3 className="why-title">{t('why.aiFirst.title')}</h3>
            <p className="why-desc">{t('why.aiFirst.desc')}</p>
            <ul className="why-points">
              {['p1', 'p2', 'p3'].map((p) => (
                <li key={p}>
                  <span className="why-check"><Check size={13} strokeWidth={3} /></span>
                  {t(`why.aiFirst.${p}`)}
                </li>
              ))}
            </ul>
          </Reveal>

          {small.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal className="why-card" delay={idx * 60} key={p.key}>
                <div className="why-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="why-title">{t(`why.${p.key}.title`)}</h3>
                <p className="why-desc">{t(`why.${p.key}.desc`)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
