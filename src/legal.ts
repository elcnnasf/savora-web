import type { Lang } from './i18n';

export type LegalDoc = 'privacy' | 'terms';

interface Section { h: string; p: string; }
interface Doc { title: string; updated: string; intro: string; sections: Section[]; }
type LegalContent = Record<LegalDoc, Doc>;

const UPDATED = 'July 2026';

const en: LegalContent = {
  privacy: {
    title: 'Privacy Policy',
    updated: `Last updated: ${UPDATED}`,
    intro:
      'Savora ("we", "our") respects your privacy. This page explains, in plain language, what we collect and how we use it. Savora is an informational preview — the app has not launched yet.',
    sections: [
      { h: 'Information we collect', p: 'On this website we collect no personal data beyond anonymous, aggregated visit statistics. When the Savora app launches, it will only collect the information needed to run features you use — such as your account email, taste preferences and saved recipes.' },
      { h: 'How we use information', p: 'Any data is used solely to provide and improve the product: to personalize recommendations, generate recipes and keep your account working across devices. We never sell your personal data.' },
      { h: 'AI processing', p: 'Recipe generation and ingredient scanning are powered by AI providers. Content you submit (a photo or a description) is sent to these providers only to produce your result and is not used to identify you.' },
      { h: 'Your choices', p: 'You will be able to review, export or delete your data from within the app at any time. You can also contact us to request deletion.' },
      { h: 'Contact', p: 'Questions about privacy? Email us at savorachef@gmail.com.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: `Last updated: ${UPDATED}`,
    intro:
      'These terms cover your use of the Savora website. By browsing this page you agree to them. The Savora app will have its own terms at launch.',
    sections: [
      { h: 'Use of the site', p: 'This site is provided for informational purposes only, to introduce Savora before its launch. You agree to use it lawfully and not to disrupt or misuse it.' },
      { h: 'No account or purchase', p: 'This website does not offer sign-up, payment or app functionality. Any "download" badges are placeholders while the app is in development.' },
      { h: 'Intellectual property', p: 'The Savora name, logo, text and design are owned by Savora. You may not copy or reuse them without permission.' },
      { h: 'Disclaimer', p: 'The site is provided "as is", without warranties. Features, availability and launch timing may change without notice.' },
      { h: 'Contact', p: 'Questions about these terms? Email us at savorachef@gmail.com.' },
    ],
  },
};

const az: LegalContent = {
  privacy: {
    title: 'Məxfilik Siyasəti',
    updated: `Son yenilənmə: İyul 2026`,
    intro:
      'Savora ("biz") məxfiliyinizə hörmət edir. Bu səhifə sadə dillə nə topladığımızı və necə istifadə etdiyimizi izah edir. Savora hələ təqdimat mərhələsindədir — tətbiq hələ işə düşməyib.',
    sections: [
      { h: 'Topladığımız məlumat', p: 'Bu saytda anonim, ümumiləşdirilmiş ziyarət statistikasından başqa heç bir şəxsi məlumat toplamırıq. Savora tətbiqi işə düşəndə yalnız istifadə etdiyiniz funksiyalar üçün lazım olan məlumatı — hesab e-poçtu, dad tərcihləri və saxlanmış reseptlər kimi — toplayacaq.' },
      { h: 'Məlumatı necə istifadə edirik', p: 'Hər hansı məlumat yalnız məhsulu təqdim etmək və yaxşılaşdırmaq üçündür: tövsiyələri fərdiləşdirmək, reseptlər yaratmaq və hesabınızı cihazlar arasında işlək saxlamaq. Şəxsi məlumatınızı heç vaxt satmırıq.' },
      { h: 'AI emalı', p: 'Resept yaradılışı və inqredient skanı AI provayderləri ilə işləyir. Göndərdiyiniz məzmun (şəkil və ya təsvir) yalnız nəticənizi hazırlamaq üçün bu provayderlərə ötürülür və sizi tanımaq üçün istifadə edilmir.' },
      { h: 'Seçimləriniz', p: 'Məlumatlarınızı istənilən vaxt tətbiq daxilində baxa, ixrac edə və ya silə biləcəksiniz. Silinmə üçün bizimlə də əlaqə saxlaya bilərsiniz.' },
      { h: 'Əlaqə', p: 'Məxfiliklə bağlı sualınız var? Bizə savorachef@gmail.com ünvanına yazın.' },
    ],
  },
  terms: {
    title: 'İstifadə Şərtləri',
    updated: `Son yenilənmə: İyul 2026`,
    intro:
      'Bu şərtlər Savora vebsaytından istifadənizi əhatə edir. Bu səhifəyə baxmaqla onları qəbul edirsiniz. Savora tətbiqinin işə düşərkən öz şərtləri olacaq.',
    sections: [
      { h: 'Saytdan istifadə', p: 'Bu sayt yalnız məlumat məqsədi ilə, Savora-nı işə düşməzdən əvvəl təqdim etmək üçündür. Ondan qanuni istifadə etməyə və pozmamağa razısınız.' },
      { h: 'Hesab və ya alış yoxdur', p: 'Bu vebsayt qeydiyyat, ödəniş və ya tətbiq funksionallığı təklif etmir. "Yüklə" nişanları tətbiq hazırlanarkən müvəqqəti yer tutucudur.' },
      { h: 'Əqli mülkiyyət', p: 'Savora adı, loqosu, mətni və dizaynı Savora-ya məxsusdur. İcazəsiz onları kopyalaya və ya təkrar istifadə edə bilməzsiniz.' },
      { h: 'Məsuliyyətdən imtina', p: 'Sayt "olduğu kimi", zəmanətsiz təqdim olunur. Funksiyalar, əlçatanlıq və işə düşmə vaxtı xəbərdarlıq olmadan dəyişə bilər.' },
      { h: 'Əlaqə', p: 'Bu şərtlərlə bağlı sualınız var? Bizə savorachef@gmail.com ünvanına yazın.' },
    ],
  },
};

const ru: LegalContent = {
  privacy: {
    title: 'Политика конфиденциальности',
    updated: `Обновлено: июль 2026`,
    intro:
      'Savora («мы») уважает вашу конфиденциальность. Эта страница простым языком объясняет, что мы собираем и как это используем. Savora — это предварительный анонс, приложение ещё не запущено.',
    sections: [
      { h: 'Какие данные мы собираем', p: 'На этом сайте мы не собираем персональные данные, кроме анонимной обобщённой статистики посещений. После запуска приложение Savora будет собирать только информацию, необходимую для работы используемых функций — например, email аккаунта, вкусовые предпочтения и сохранённые рецепты.' },
      { h: 'Как мы используем данные', p: 'Любые данные используются исключительно для работы и улучшения продукта: персонализации рекомендаций, генерации рецептов и синхронизации аккаунта между устройствами. Мы никогда не продаём ваши персональные данные.' },
      { h: 'Обработка ИИ', p: 'Генерация рецептов и сканирование ингредиентов работают через провайдеров ИИ. Отправленный вами контент (фото или описание) передаётся им только для получения результата и не используется для вашей идентификации.' },
      { h: 'Ваш выбор', p: 'Вы сможете просматривать, экспортировать или удалять свои данные прямо в приложении в любое время. Также можно связаться с нами для удаления.' },
      { h: 'Контакты', p: 'Вопросы о конфиденциальности? Напишите нам: savorachef@gmail.com.' },
    ],
  },
  terms: {
    title: 'Условия использования',
    updated: `Обновлено: июль 2026`,
    intro:
      'Эти условия распространяются на использование сайта Savora. Просматривая страницу, вы соглашаетесь с ними. У приложения Savora будут собственные условия на момент запуска.',
    sections: [
      { h: 'Использование сайта', p: 'Сайт предоставляется только в информационных целях — представить Savora до запуска. Вы обязуетесь использовать его законно и не нарушать его работу.' },
      { h: 'Нет аккаунта и покупок', p: 'Этот сайт не предлагает регистрацию, оплату или функции приложения. Значки «скачать» — заглушки на время разработки.' },
      { h: 'Интеллектуальная собственность', p: 'Название Savora, логотип, текст и дизайн принадлежат Savora. Их нельзя копировать или использовать без разрешения.' },
      { h: 'Отказ от ответственности', p: 'Сайт предоставляется «как есть», без гарантий. Функции, доступность и сроки запуска могут меняться без уведомления.' },
      { h: 'Контакты', p: 'Вопросы об условиях? Напишите нам: savorachef@gmail.com.' },
    ],
  },
};

const tr: LegalContent = {
  privacy: {
    title: 'Gizlilik Politikası',
    updated: `Son güncelleme: Temmuz 2026`,
    intro:
      'Savora ("biz") gizliliğinize saygı duyar. Bu sayfa, neyi topladığımızı ve nasıl kullandığımızı sade bir dille açıklar. Savora bir ön tanıtımdır — uygulama henüz yayınlanmadı.',
    sections: [
      { h: 'Topladığımız bilgiler', p: 'Bu web sitesinde anonim, toplu ziyaret istatistikleri dışında kişisel veri toplamıyoruz. Savora uygulaması yayınlandığında yalnızca kullandığınız özellikler için gereken bilgileri — hesap e-postası, tat tercihleri ve kayıtlı tarifler gibi — toplayacaktır.' },
      { h: 'Bilgileri nasıl kullanırız', p: 'Veriler yalnızca ürünü sunmak ve geliştirmek için kullanılır: önerileri kişiselleştirmek, tarif oluşturmak ve hesabınızı cihazlar arasında çalışır tutmak. Kişisel verilerinizi asla satmayız.' },
      { h: 'Yapay zekâ işleme', p: 'Tarif oluşturma ve malzeme tarama, yapay zekâ sağlayıcıları ile çalışır. Gönderdiğiniz içerik (fotoğraf veya açıklama) yalnızca sonucunuzu üretmek için bu sağlayıcılara iletilir ve sizi tanımlamak için kullanılmaz.' },
      { h: 'Tercihleriniz', p: 'Verilerinizi istediğiniz zaman uygulama içinden görüntüleyebilir, dışa aktarabilir veya silebilirsiniz. Silme için bizimle de iletişime geçebilirsiniz.' },
      { h: 'İletişim', p: 'Gizlilikle ilgili sorunuz mu var? Bize savorachef@gmail.com adresinden yazın.' },
    ],
  },
  terms: {
    title: 'Kullanım Şartları',
    updated: `Son güncelleme: Temmuz 2026`,
    intro:
      'Bu şartlar Savora web sitesini kullanımınızı kapsar. Bu sayfaya göz atarak bunları kabul edersiniz. Savora uygulamasının yayınlandığında kendi şartları olacaktır.',
    sections: [
      { h: 'Sitenin kullanımı', p: 'Bu site yalnızca bilgilendirme amaçlıdır — Savora’yı yayınlanmadan önce tanıtmak için. Onu yasal şekilde kullanmayı ve aksatmamayı kabul edersiniz.' },
      { h: 'Hesap veya satın alma yok', p: 'Bu web sitesi kayıt, ödeme veya uygulama işlevi sunmaz. "İndir" rozetleri, uygulama geliştirme aşamasındayken yer tutuculardır.' },
      { h: 'Fikri mülkiyet', p: 'Savora adı, logosu, metni ve tasarımı Savora’ya aittir. İzinsiz kopyalayamaz veya yeniden kullanamazsınız.' },
      { h: 'Sorumluluk reddi', p: 'Site "olduğu gibi", garantisiz sunulur. Özellikler, erişilebilirlik ve yayın zamanı önceden bildirmeksizin değişebilir.' },
      { h: 'İletişim', p: 'Bu şartlarla ilgili sorunuz mu var? Bize savorachef@gmail.com adresinden yazın.' },
    ],
  },
};

const ALL: Record<Lang, LegalContent> = { en, az, ru, tr };

export function getLegal(lang: Lang, doc: LegalDoc): Doc {
  return ALL[lang][doc];
}
