import {
  createContext, useContext, useState, useCallback, useEffect,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'az' | 'ru' | 'tr';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'az', label: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

type Dict = Record<string, string>;

const en: Dict = {
  'nav.features': 'Features',
  'nav.preview': 'Preview',
  'nav.why': 'Why Savora',
  'nav.download': 'Download',
  'nav.comingSoon': 'Coming Soon',

  'hero.badge': 'Coming Soon',
  'hero.title1': 'Your AI-powered',
  'hero.title2': 'cooking companion',
  'hero.subtitle':
    'Discover recipes, scan the ingredients you already have, and cook smarter every day — guided by AI that learns your taste.',
  'hero.storeSoon': 'Available soon',
  'hero.scroll': 'Scroll to explore',

  'features.tag': 'Features',
  'features.title': 'Everything you need to cook smarter',
  'features.subtitle':
    'A complete kitchen assistant in your pocket, powered by AI from the first tap.',
  'features.ai.title': 'AI Recipe Generator',
  'features.ai.desc':
    'Describe a craving or a dish and get a complete, authentic recipe with steps, tips and nutrition in seconds.',
  'features.scan.title': 'Ingredient Scanner',
  'features.scan.desc':
    'Point your camera at what you have — Savora recognizes the ingredients and finds recipes you can make right now.',
  'features.pantry.title': 'Smart Pantry',
  'features.pantry.desc':
    'Keep track of what is in your kitchen and turn leftovers into meals instead of waste.',
  'features.reco.title': 'Personalized Recommendations',
  'features.reco.desc':
    'Recipes tailored to your diet, allergies, favorite cuisines and goals — every suggestion fits you.',
  'features.nutrition.title': 'Nutrition Insights',
  'features.nutrition.desc':
    'See calories, protein and macros for every recipe and stay on top of your daily goals effortlessly.',
  'features.assistant.title': 'Cooking Assistant',
  'features.assistant.desc':
    'Ask anything while you cook — substitutions, techniques and tips from a chef that never leaves your side.',

  'preview.tag': 'App Preview',
  'preview.title': 'Beautiful, and built for the kitchen',
  'preview.subtitle':
    'A calm, focused interface that gets out of your way so you can cook.',
  'preview.card1.title': "Today's pick",
  'preview.card1.sub': 'Chosen for your taste',
  'preview.recipe1': 'Azerbaijani Plov',
  'preview.recipe2': 'Creamy Garlic Pasta',
  'preview.recipe3': 'Grilled Lamb Kebab',
  'preview.scanTitle': 'Scanning ingredients',
  'preview.scanSub': '7 ingredients detected',
  'preview.min': 'min',

  'why.tag': 'Why Savora',
  'why.title': 'Cooking, reimagined around you',
  'why.subtitle':
    'Not just another recipe app — a companion designed for real, everyday home cooks.',
  'why.aiFirst.title': 'AI-first experience',
  'why.aiFirst.desc':
    'Intelligence is not an add-on in Savora — it is the foundation. Every screen is powered by AI that understands food, your taste and your goals from the very first tap.',
  'why.aiFirst.p1': 'Full, authentic recipes generated in seconds',
  'why.aiFirst.p2': 'Understands your taste, diet and allergies',
  'why.aiFirst.p3': 'Gets smarter every time you cook',
  'why.fast.title': 'Fast recipe generation',
  'why.fast.desc':
    'From a craving or a single ingredient to a complete recipe with steps, tips and nutrition — in seconds, with no endless scrolling.',
  'why.beautiful.title': 'Beautiful & intuitive',
  'why.beautiful.desc':
    'A calm, premium interface that feels effortless from the first tap and stays out of your way while you cook.',
  'why.personal.title': 'Personalized for you',
  'why.personal.desc':
    'Savora learns your taste, diet, allergies and goals, then adapts every recommendation, recipe and meal plan to fit you.',
  'why.everyday.title': 'For everyday cooks',
  'why.everyday.desc':
    'Designed for real kitchens and real people — quick weeknight dinners, not just restaurant-grade showpieces.',

  'cta.tag': 'Launching soon',
  'cta.title': 'Be the first to cook with Savora',
  'cta.subtitle':
    'Savora is arriving on the App Store and Google Play. Get ready to cook smarter.',
  'cta.appstore': 'App Store',
  'cta.googleplay': 'Google Play',
  'cta.soon': 'Coming soon',

  'footer.tagline': 'Your AI-powered cooking companion.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.rights': 'All rights reserved.',
  'footer.madeWith': 'Crafted for home cooks everywhere.',
};

const az: Dict = {
  'nav.features': 'İmkanlar',
  'nav.preview': 'Ön baxış',
  'nav.why': 'Niyə Savora',
  'nav.download': 'Yüklə',
  'nav.comingSoon': 'Tezliklə',

  'hero.badge': 'Tezliklə',
  'hero.title1': 'AI dəstəkli',
  'hero.title2': 'kulinariya yoldaşınız',
  'hero.subtitle':
    'Reseptlər kəşf edin, əlinizdəki inqredientləri skan edin və hər gün daha ağıllı bişirin — zövqünüzü öyrənən AI ilə.',
  'hero.storeSoon': 'Tezliklə əlçatan',
  'hero.scroll': 'Kəşf etmək üçün aşağı sürüşdürün',

  'features.tag': 'İmkanlar',
  'features.title': 'Daha ağıllı bişirmək üçün hər şey',
  'features.subtitle':
    'Cibinizdə tam kulinariya köməkçisi — ilk toxunuşdan AI ilə gücləndirilib.',
  'features.ai.title': 'AI Resept Yaradıcısı',
  'features.ai.desc':
    'Yemək və ya arzunuzu təsvir edin — saniyələr içində addımlar, məsləhətlər və qidalılıq dəyəri ilə tam resept alın.',
  'features.scan.title': 'İnqredient Skaneri',
  'features.scan.desc':
    'Kameranı əlinizdəkinə tutun — Savora inqredientləri tanıyıb indi hazırlaya biləcəyiniz reseptləri tapır.',
  'features.pantry.title': 'Ağıllı Kaman',
  'features.pantry.desc':
    'Mətbəxinizdə nə olduğunu izləyin və qalıqları tullantıya deyil, yeməyə çevirin.',
  'features.reco.title': 'Fərdi Tövsiyələr',
  'features.reco.desc':
    'Pəhrizinizə, allergiyalarınıza, sevimli mətbəxlərinizə uyğun reseptlər — hər təklif sizə görədir.',
  'features.nutrition.title': 'Qidalılıq Məlumatı',
  'features.nutrition.desc':
    'Hər resept üçün kalori, protein və makroları görün, gündəlik hədəflərinizə asanlıqla nəzarət edin.',
  'features.assistant.title': 'Bişirmə Köməkçisi',
  'features.assistant.desc':
    'Bişirərkən istənilən şeyi soruşun — əvəzləmələr, texnikalar və məsləhətlər həmişə yanınızdadır.',

  'preview.tag': 'Tətbiq ön baxışı',
  'preview.title': 'Gözəl və mətbəx üçün yaradılıb',
  'preview.subtitle':
    'Sizə mane olmayan sakit, fokuslanmış interfeys — sadəcə bişirin.',
  'preview.card1.title': 'Bu günün seçimi',
  'preview.card1.sub': 'Zövqünüzə görə seçilib',
  'preview.recipe1': 'Azərbaycan Plovu',
  'preview.recipe2': 'Sarımsaqlı Kremli Makaron',
  'preview.recipe3': 'Manqalda Quzu Kababı',
  'preview.scanTitle': 'İnqredientlər skan olunur',
  'preview.scanSub': '7 inqredient aşkarlandı',
  'preview.min': 'dəq',

  'why.tag': 'Niyə Savora',
  'why.title': 'Kulinariya sizin ətrafınızda yenidən düşünülüb',
  'why.subtitle':
    'Sadəcə növbəti resept tətbiqi deyil — gündəlik ev aşpazları üçün yaradılmış yoldaş.',
  'why.aiFirst.title': 'AI-öncül təcrübə',
  'why.aiFirst.desc':
    'Savora-da zəka əlavə deyil — təməldir. Hər ekran ilk toxunuşdan yeməyi, zövqünüzü və hədəflərinizi anlayan AI ilə işləyir.',
  'why.aiFirst.p1': 'Saniyələr içində tam, əsl reseptlər',
  'why.aiFirst.p2': 'Zövqünüzü, pəhrizinizi və allergiyalarınızı anlayır',
  'why.aiFirst.p3': 'Hər bişirdikcə daha ağıllı olur',
  'why.fast.title': 'Sürətli resept yaradılışı',
  'why.fast.desc':
    'Bir arzudan və ya tək inqredientdən addımlar, məsləhətlər və qidalılıqla tam reseptə — saniyələr içində, sonsuz sürüşdürmə yoxdur.',
  'why.beautiful.title': 'Gözəl və intuitiv',
  'why.beautiful.desc':
    'İlk toxunuşdan rahat hiss olunan, bişirərkən sizə mane olmayan sakit və premium interfeys.',
  'why.personal.title': 'Sizə görə fərdiləşdirilib',
  'why.personal.desc':
    'Savora zövqünüzü, pəhrizinizi, allergiyalarınızı və hədəflərinizi öyrənir, sonra hər tövsiyəni, resepti və yemək planını sizə uyğunlaşdırır.',
  'why.everyday.title': 'Gündəlik aşpazlar üçün',
  'why.everyday.desc':
    'Real mətbəxlər və real insanlar üçün yaradılıb — yalnız restoran səviyyəli nümayişlər deyil, sürətli gündəlik yeməklər.',

  'cta.tag': 'Tezliklə işə düşür',
  'cta.title': 'Savora ilə bişirən ilk siz olun',
  'cta.subtitle':
    'Savora App Store və Google Play-ə gəlir. Daha ağıllı bişirməyə hazır olun.',
  'cta.appstore': 'App Store',
  'cta.googleplay': 'Google Play',
  'cta.soon': 'Tezliklə',

  'footer.tagline': 'AI dəstəkli kulinariya yoldaşınız.',
  'footer.privacy': 'Məxfilik Siyasəti',
  'footer.terms': 'İstifadə Şərtləri',
  'footer.rights': 'Bütün hüquqlar qorunur.',
  'footer.madeWith': 'Hər yerdə ev aşpazları üçün hazırlanıb.',
};

const ru: Dict = {
  'nav.features': 'Возможности',
  'nav.preview': 'Превью',
  'nav.why': 'Почему Savora',
  'nav.download': 'Скачать',
  'nav.comingSoon': 'Скоро',

  'hero.badge': 'Скоро',
  'hero.title1': 'Ваш кулинарный',
  'hero.title2': 'помощник с ИИ',
  'hero.subtitle':
    'Открывайте рецепты, сканируйте продукты, которые у вас есть, и готовьте умнее каждый день — с ИИ, который учит ваш вкус.',
  'hero.storeSoon': 'Скоро доступно',
  'hero.scroll': 'Прокрутите, чтобы узнать больше',

  'features.tag': 'Возможности',
  'features.title': 'Всё, чтобы готовить умнее',
  'features.subtitle':
    'Полноценный кухонный помощник в кармане, с ИИ с первого касания.',
  'features.ai.title': 'Генератор рецептов с ИИ',
  'features.ai.desc':
    'Опишите блюдо или желание — за секунды получите полный рецепт с шагами, советами и питательностью.',
  'features.scan.title': 'Сканер ингредиентов',
  'features.scan.desc':
    'Наведите камеру на продукты — Savora распознаёт ингредиенты и находит рецепты, которые можно приготовить сейчас.',
  'features.pantry.title': 'Умная кладовая',
  'features.pantry.desc':
    'Следите за тем, что есть на кухне, и превращайте остатки в блюда, а не в отходы.',
  'features.reco.title': 'Персональные рекомендации',
  'features.reco.desc':
    'Рецепты под вашу диету, аллергии, любимые кухни и цели — каждое предложение подходит вам.',
  'features.nutrition.title': 'Питательная ценность',
  'features.nutrition.desc':
    'Смотрите калории, белки и макросы каждого рецепта и легко держите цели под контролем.',
  'features.assistant.title': 'Кулинарный ассистент',
  'features.assistant.desc':
    'Спрашивайте что угодно во время готовки — замены, техники и советы всегда рядом.',

  'preview.tag': 'Превью приложения',
  'preview.title': 'Красиво и создано для кухни',
  'preview.subtitle':
    'Спокойный, сфокусированный интерфейс, который не мешает готовить.',
  'preview.card1.title': 'Выбор дня',
  'preview.card1.sub': 'Подобрано под ваш вкус',
  'preview.recipe1': 'Азербайджанский плов',
  'preview.recipe2': 'Паста со сливочно-чесночным соусом',
  'preview.recipe3': 'Люля-кебаб из баранины',
  'preview.scanTitle': 'Сканирование продуктов',
  'preview.scanSub': 'Обнаружено 7 ингредиентов',
  'preview.min': 'мин',

  'why.tag': 'Почему Savora',
  'why.title': 'Готовка, переосмысленная вокруг вас',
  'why.subtitle':
    'Не просто ещё одно приложение с рецептами — помощник для настоящих домашних поваров.',
  'why.aiFirst.title': 'ИИ в основе',
  'why.aiFirst.desc':
    'В Savora интеллект — не дополнение, а фундамент. Каждый экран с первого касания работает на ИИ, который понимает еду, ваш вкус и ваши цели.',
  'why.aiFirst.p1': 'Полные, настоящие рецепты за секунды',
  'why.aiFirst.p2': 'Учитывает ваш вкус, диету и аллергии',
  'why.aiFirst.p3': 'Становится умнее с каждой готовкой',
  'why.fast.title': 'Быстрая генерация рецептов',
  'why.fast.desc':
    'От желания или одного ингредиента до полного рецепта с шагами, советами и питательностью — за секунды, без бесконечной прокрутки.',
  'why.beautiful.title': 'Красиво и интуитивно',
  'why.beautiful.desc':
    'Спокойный премиальный интерфейс, лёгкий с первого касания и не мешающий вам готовить.',
  'why.personal.title': 'Персонально для вас',
  'why.personal.desc':
    'Savora учит ваш вкус, диету, аллергии и цели, а затем адаптирует под вас каждую рекомендацию, рецепт и план питания.',
  'why.everyday.title': 'Для домашних поваров',
  'why.everyday.desc':
    'Создано для настоящих кухонь и реальных людей — быстрые ужины по будням, а не только ресторанные шедевры.',

  'cta.tag': 'Скоро запуск',
  'cta.title': 'Готовьте с Savora первыми',
  'cta.subtitle':
    'Savora появится в App Store и Google Play. Готовьтесь готовить умнее.',
  'cta.appstore': 'App Store',
  'cta.googleplay': 'Google Play',
  'cta.soon': 'Скоро',

  'footer.tagline': 'Ваш кулинарный помощник с ИИ.',
  'footer.privacy': 'Политика конфиденциальности',
  'footer.terms': 'Условия использования',
  'footer.rights': 'Все права защищены.',
  'footer.madeWith': 'Создано для домашних поваров по всему миру.',
};

const tr: Dict = {
  'nav.features': 'Özellikler',
  'nav.preview': 'Önizleme',
  'nav.why': 'Neden Savora',
  'nav.download': 'İndir',
  'nav.comingSoon': 'Yakında',

  'hero.badge': 'Yakında',
  'hero.title1': 'Yapay zekâ destekli',
  'hero.title2': 'yemek yardımcınız',
  'hero.subtitle':
    'Tarifler keşfedin, elinizdeki malzemeleri tarayın ve her gün daha akıllı pişirin — damak zevkinizi öğrenen yapay zekâ ile.',
  'hero.storeSoon': 'Yakında hazır',
  'hero.scroll': 'Keşfetmek için kaydırın',

  'features.tag': 'Özellikler',
  'features.title': 'Daha akıllı pişirmek için her şey',
  'features.subtitle':
    'Cebinizde tam bir mutfak yardımcısı — ilk dokunuştan itibaren yapay zekâ ile.',
  'features.ai.title': 'AI Tarif Oluşturucu',
  'features.ai.desc':
    'Bir yemek veya isteğinizi anlatın — saniyeler içinde adımlar, ipuçları ve besin değeriyle tam tarif alın.',
  'features.scan.title': 'Malzeme Tarayıcı',
  'features.scan.desc':
    'Kamerayı elinizdekine tutun — Savora malzemeleri tanır ve hemen yapabileceğiniz tarifleri bulur.',
  'features.pantry.title': 'Akıllı Kiler',
  'features.pantry.desc':
    'Mutfağınızda ne olduğunu takip edin ve artıkları israfa değil yemeğe dönüştürün.',
  'features.reco.title': 'Kişisel Öneriler',
  'features.reco.desc':
    'Diyetinize, alerjilerinize, favori mutfaklarınıza uygun tarifler — her öneri size göre.',
  'features.nutrition.title': 'Besin Bilgileri',
  'features.nutrition.desc':
    'Her tarif için kalori, protein ve makroları görün, günlük hedeflerinizi kolayca takip edin.',
  'features.assistant.title': 'Pişirme Asistanı',
  'features.assistant.desc':
    'Pişirirken her şeyi sorun — ikameler, teknikler ve ipuçları hep yanınızda.',

  'preview.tag': 'Uygulama önizlemesi',
  'preview.title': 'Güzel ve mutfak için tasarlandı',
  'preview.subtitle':
    'Yolunuzdan çekilen sakin, odaklı bir arayüz — sadece pişirin.',
  'preview.card1.title': 'Günün seçimi',
  'preview.card1.sub': 'Damak zevkinize göre seçildi',
  'preview.recipe1': 'Azerbaycan Pilavı',
  'preview.recipe2': 'Kremalı Sarımsaklı Makarna',
  'preview.recipe3': 'Mangalda Kuzu Kebabı',
  'preview.scanTitle': 'Malzemeler taranıyor',
  'preview.scanSub': '7 malzeme algılandı',
  'preview.min': 'dk',

  'why.tag': 'Neden Savora',
  'why.title': 'Yemek pişirme, sizin etrafınızda yeniden tasarlandı',
  'why.subtitle':
    'Sadece bir tarif uygulaması değil — gerçek ev aşçıları için tasarlanmış bir yardımcı.',
  'why.aiFirst.title': 'Yapay zekâ öncelikli',
  'why.aiFirst.desc':
    'Savora’da zekâ bir eklenti değil, temeldir. Her ekran; ilk dokunuştan itibaren yemeği, damak zevkinizi ve hedeflerinizi anlayan yapay zekâ ile çalışır.',
  'why.aiFirst.p1': 'Saniyeler içinde tam, özgün tarifler',
  'why.aiFirst.p2': 'Damak zevkinizi, diyetinizi ve alerjilerinizi anlar',
  'why.aiFirst.p3': 'Her pişirdiğinizde daha akıllı olur',
  'why.fast.title': 'Hızlı tarif oluşturma',
  'why.fast.desc':
    'Bir istekten ya da tek bir malzemeden adımlar, ipuçları ve besin değeriyle tam tarife — saniyeler içinde, sonsuz kaydırma yok.',
  'why.beautiful.title': 'Güzel ve sezgisel',
  'why.beautiful.desc':
    'İlk dokunuştan itibaren zahmetsiz, pişirirken yolunuzdan çekilen sakin ve premium bir arayüz.',
  'why.personal.title': 'Size özel',
  'why.personal.desc':
    'Savora damak zevkinizi, diyetinizi, alerjilerinizi ve hedeflerinizi öğrenir, sonra her öneriyi, tarifi ve yemek planını size göre uyarlar.',
  'why.everyday.title': 'Ev aşçıları için',
  'why.everyday.desc':
    'Gerçek mutfaklar ve gerçek insanlar için tasarlandı — sadece restoran düzeyinde gösterişli tarifler değil, hızlı hafta içi yemekleri.',

  'cta.tag': 'Yakında çıkıyor',
  'cta.title': 'Savora ile ilk pişiren siz olun',
  'cta.subtitle':
    'Savora App Store ve Google Play’de. Daha akıllı pişirmeye hazır olun.',
  'cta.appstore': 'App Store',
  'cta.googleplay': 'Google Play',
  'cta.soon': 'Yakında',

  'footer.tagline': 'Yapay zekâ destekli yemek yardımcınız.',
  'footer.privacy': 'Gizlilik Politikası',
  'footer.terms': 'Kullanım Şartları',
  'footer.rights': 'Tüm hakları saklıdır.',
  'footer.madeWith': 'Dünyanın her yerindeki ev aşçıları için üretildi.',
};

const DICTS: Record<Lang, Dict> = { en, az, ru, tr };
const STORAGE_KEY = 'savora_web_lang';

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved && DICTS[saved]) return saved;
    const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
    return (['en', 'az', 'ru', 'tr'].includes(nav) ? nav : 'en') as Lang;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  const t = useCallback((key: string) => DICTS[lang][key] ?? en[key] ?? key, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
