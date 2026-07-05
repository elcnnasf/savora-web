import { useI18n } from '../i18n';
import Reveal from './Reveal';
import PhoneMockup from './PhoneMockup';
import { ScreenImage, ScanScreenMock } from './ScreenMockups';

export default function AppPreview() {
  const { t } = useI18n();

  return (
    <section className="section preview" id="preview">
      <div className="preview-bg" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head">
          <span className="tag">{t('preview.tag')}</span>
          <h2 className="section-title">{t('preview.title')}</h2>
          <p className="section-sub">{t('preview.subtitle')}</p>
        </Reveal>

        <div className="preview-stage">
          <Reveal className="preview-phone back-left" delay={120}>
            <PhoneMockup>
              <ScanScreenMock />
            </PhoneMockup>
          </Reveal>

          <Reveal className="preview-phone front" delay={0}>
            <PhoneMockup bare>
              <ScreenImage src="/img/screen-discover.jpg" alt="Savora Discover screen" />
            </PhoneMockup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
