import {
  Flame, Check, Crown, Diamond, Camera, PenLine, FolderHeart, BellRing,
} from 'lucide-react';
import { useI18n } from '../i18n';
import Reveal from './Reveal';

export default function Premium() {
  const { t } = useI18n();

  const highlights = [
    { icon: Camera, key: 'photo' },
    { icon: PenLine, key: 'text' },
    { icon: FolderHeart, key: 'collections' },
    { icon: BellRing, key: 'reminders' },
  ];

  const plans = [
    {
      key: 'free',
      accent: 'plan-free',
      icon: null,
      price: '0',
      features: ['f1', 'f2', 'f3', 'f4'],
    },
    {
      key: 'premium',
      accent: 'plan-premium',
      icon: Crown,
      price: '3.99',
      badge: t('premium.plan.popular'),
      features: ['f1', 'f2', 'f3', 'f4'],
    },
    {
      key: 'pro',
      accent: 'plan-pro',
      icon: Diamond,
      price: '12.99',
      badge: t('premium.plan.best'),
      features: ['f1', 'f2', 'f3', 'f4'],
    },
  ];

  return (
    <section className="section premium" id="premium">
      <div className="container">
        <Reveal className="section-head">
          <span className="tag tag-gold">{t('premium.tag')}</span>
          <h2 className="section-title">{t('premium.title')}</h2>
          <p className="section-sub">{t('premium.subtitle')}</p>
        </Reveal>

        {/* Calorie Counter showcase */}
        <div className="premium-showcase">
          <Reveal className="premium-copy">
            <span className="premium-new-chip">{t('premium.newChip')}</span>
            <h3 className="premium-feature-title">{t('premium.calorie.title')}</h3>
            <p className="premium-feature-desc">{t('premium.calorie.desc')}</p>
            <ul className="premium-points">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <li key={h.key}>
                    <span className="premium-point-icon"><Icon size={15} strokeWidth={2.2} /></span>
                    {t(`premium.point.${h.key}`)}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className="calorie-demo" delay={120}>
            <div className="calorie-demo-card">
              <div className="calorie-demo-photo" aria-hidden="true">🍛</div>
              <div className="calorie-demo-head">
                <span className="calorie-demo-dish">{t('premium.demo.dish')}</span>
                <span className="calorie-demo-portion">{t('premium.demo.portion')}</span>
              </div>
              <div className="calorie-demo-kcal">
                <Flame size={26} strokeWidth={2.2} />
                <span className="calorie-demo-value">630</span>
                <span className="calorie-demo-unit">kcal</span>
              </div>
              <div className="calorie-demo-macros">
                <div className="macro-chip"><span>{t('premium.demo.protein')}</span><b>25 g</b></div>
                <div className="macro-chip"><span>{t('premium.demo.carbs')}</span><b>60 g</b></div>
                <div className="macro-chip"><span>{t('premium.demo.fat')}</span><b>30 g</b></div>
              </div>
              <div className="calorie-demo-scan" aria-hidden="true" />
            </div>
          </Reveal>
        </div>

        {/* Plans */}
        <div className="plan-grid">
          {plans.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal className={`plan-card ${p.accent}`} delay={idx * 90} key={p.key}>
                {p.badge && <span className="plan-badge">{p.badge}</span>}
                <div className="plan-name">
                  {Icon && <Icon size={17} strokeWidth={2.2} />}
                  {t(`premium.plan.${p.key}.name`)}
                </div>
                <div className="plan-price">
                  <span className="plan-price-value">{p.price}</span>
                  <span className="plan-price-unit">AZN{t('premium.plan.perMonth')}</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="plan-check"><Check size={12} strokeWidth={3} /></span>
                      {t(`premium.plan.${p.key}.${f}`)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="plan-note">{t('premium.note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
