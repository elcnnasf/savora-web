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
  'nav.premium': 'Premium',
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
  'features.newBadge': 'New',
  'features.calories.title': 'Calorie Counter',
  'features.calories.desc':
    'Snap a photo of any meal — or just type its name — and get calories, protein, carbs and fat in seconds.',
  'features.collections.title': 'Recipe Collections',
  'features.collections.desc':
    'Organize saved recipes into beautiful collections and share them with friends in one tap.',
  'features.planner.title': 'AI Meal Planner',
  'features.planner.desc':
    'A full week of meals planned around your budget, goals and taste — with a shopping list to match.',

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

  'premium.tag': 'Premium',
  'premium.title': 'Go further with Premium',
  'premium.subtitle':
    'Unlock the most powerful AI features — built for people who take their food seriously.',
  'premium.newChip': 'New · Premium feature',
  'premium.calorie.title': 'Calorie Counter — know exactly what you eat',
  'premium.calorie.desc':
    'Point your camera at any plate and Savora breaks it down: calories, protein, carbs, fat and a full component breakdown — verified with nutrition-science math, in your language.',
  'premium.point.photo': 'Photo analysis — from camera or gallery',
  'premium.point.text': 'Or just type the dish and portion size',
  'premium.point.collections': 'Recipe collections with sharing',
  'premium.point.reminders': 'Smart meal reminders and daily ideas',
  'premium.demo.dish': 'Chicken plov',
  'premium.demo.portion': '1 plate (~400 g)',
  'premium.demo.protein': 'Protein',
  'premium.demo.carbs': 'Carbs',
  'premium.demo.fat': 'Fat',
  'premium.plan.popular': 'Most popular',
  'premium.plan.best': 'Best value',
  'premium.plan.perMonth': '/month',
  'premium.plan.free.name': 'Free',
  'premium.plan.free.f1': '3 AI recipes & 3 scans a day',
  'premium.plan.free.f2': '10 AI chat messages a day',
  'premium.plan.free.f3': '1 meal plan a day',
  'premium.plan.free.f4': 'Collections & saved recipes',
  'premium.plan.premium.name': 'Premium',
  'premium.plan.premium.f1': 'Calorie Counter — 15 analyses a day',
  'premium.plan.premium.f2': '10 AI recipes & 10 scans a day',
  'premium.plan.premium.f3': '50 AI chat messages a day',
  'premium.plan.premium.f4': 'Priority AI responses',
  'premium.plan.pro.name': 'Pro',
  'premium.plan.pro.f1': 'Calorie Counter — 40 analyses a day',
  'premium.plan.pro.f2': '25 AI recipes & 20 scans a day',
  'premium.plan.pro.f3': '100 AI chat messages a day',
  'premium.plan.pro.f4': 'Fastest AI + early access to new features',
  'premium.note': 'Plans are managed in the app. Prices in AZN; regional pricing on Google Play.',

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
  'nav.premium': 'Premium',
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
  'features.newBadge': 'Yeni',
  'features.calories.title': 'Kalori Sayğacı',
  'features.calories.desc':
    'İstənilən yeməyin şəklini çəkin — və ya sadəcə adını yazın — saniyələr içində kalori, protein, karbohidrat və yağı öyrənin.',
  'features.collections.title': 'Resept Kolleksiyaları',
  'features.collections.desc':
    'Saxlanmış reseptləri gözəl kolleksiyalara yığın və bir toxunuşla dostlarınızla paylaşın.',
  'features.planner.title': 'AI Yemək Planlayıcısı',
  'features.planner.desc':
    'Büdcənizə, hədəflərinizə və zövqünüzə uyğun bir həftəlik yemək planı — üstəlik alış-veriş siyahısı ilə.',

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

  'premium.tag': 'Premium',
  'premium.title': 'Premium ilə daha irəli gedin',
  'premium.subtitle':
    'Ən güclü AI funksiyalarının kilidini açın — yeməyinə ciddi yanaşanlar üçün yaradılıb.',
  'premium.newChip': 'Yeni · Premium funksiya',
  'premium.calorie.title': 'Kalori Sayğacı — nə yediyinizi dəqiq bilin',
  'premium.calorie.desc':
    'Kameranı istənilən boşqaba tutun — Savora onu təhlil edir: kalori, protein, karbohidrat, yağ və tam tərkib bölgüsü — qida elmi riyaziyyatı ilə yoxlanılmış, sizin dilinizdə.',
  'premium.point.photo': 'Şəkil analizi — kamera və ya qalereyadan',
  'premium.point.text': 'Və ya sadəcə yeməyin adını və porsiyasını yazın',
  'premium.point.collections': 'Paylaşıla bilən resept kolleksiyaları',
  'premium.point.reminders': 'Ağıllı yemək xatırlatmaları və gündəlik ideyalar',
  'premium.demo.dish': 'Toyuq plovu',
  'premium.demo.portion': '1 boşqab (~400 q)',
  'premium.demo.protein': 'Protein',
  'premium.demo.carbs': 'Karb.',
  'premium.demo.fat': 'Yağ',
  'premium.plan.popular': 'Ən populyar',
  'premium.plan.best': 'Ən sərfəli',
  'premium.plan.perMonth': '/ay',
  'premium.plan.free.name': 'Pulsuz',
  'premium.plan.free.f1': 'Gündə 3 AI resept və 3 skan',
  'premium.plan.free.f2': 'Gündə 10 AI chat mesajı',
  'premium.plan.free.f3': 'Gündə 1 yemək planı',
  'premium.plan.free.f4': 'Kolleksiyalar və saxlanmış reseptlər',
  'premium.plan.premium.name': 'Premium',
  'premium.plan.premium.f1': 'Kalori Sayğacı — gündə 15 analiz',
  'premium.plan.premium.f2': 'Gündə 10 AI resept və 10 skan',
  'premium.plan.premium.f3': 'Gündə 50 AI chat mesajı',
  'premium.plan.premium.f4': 'Prioritet AI cavabları',
  'premium.plan.pro.name': 'Pro',
  'premium.plan.pro.f1': 'Kalori Sayğacı — gündə 40 analiz',
  'premium.plan.pro.f2': 'Gündə 25 AI resept və 20 skan',
  'premium.plan.pro.f3': 'Gündə 100 AI chat mesajı',
  'premium.plan.pro.f4': 'Ən sürətli AI + yeniliklərə erkən çıxış',
  'premium.note': 'Planlar tətbiq daxilində idarə olunur. Qiymətlər AZN ilə; Google Play-də regional qiymətlər.',

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
  'nav.premium': 'Премиум',
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
  'features.newBadge': 'Новое',
  'features.calories.title': 'Счётчик калорий',
  'features.calories.desc':
    'Сфотографируйте любое блюдо — или просто введите его название — и за секунды узнайте калории, белки, углеводы и жиры.',
  'features.collections.title': 'Коллекции рецептов',
  'features.collections.desc':
    'Собирайте сохранённые рецепты в красивые коллекции и делитесь ими с друзьями в одно касание.',
  'features.planner.title': 'AI план питания',
  'features.planner.desc':
    'Неделя блюд, спланированная под ваш бюджет, цели и вкус — вместе со списком покупок.',

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

  'premium.tag': 'Премиум',
  'premium.title': 'Больше возможностей с Премиум',
  'premium.subtitle':
    'Откройте самые мощные AI-функции — для тех, кто серьёзно относится к своей еде.',
  'premium.newChip': 'Новое · Премиум-функция',
  'premium.calorie.title': 'Счётчик калорий — знайте точно, что вы едите',
  'premium.calorie.desc':
    'Наведите камеру на любую тарелку — Savora разберёт её: калории, белки, углеводы, жиры и полный состав — проверено формулами нутрициологии, на вашем языке.',
  'premium.point.photo': 'Анализ по фото — с камеры или из галереи',
  'premium.point.text': 'Или просто введите блюдо и размер порции',
  'premium.point.collections': 'Коллекции рецептов с возможностью делиться',
  'premium.point.reminders': 'Умные напоминания о еде и идеи дня',
  'premium.demo.dish': 'Плов с курицей',
  'premium.demo.portion': '1 тарелка (~400 г)',
  'premium.demo.protein': 'Белки',
  'premium.demo.carbs': 'Углев.',
  'premium.demo.fat': 'Жиры',
  'premium.plan.popular': 'Самый популярный',
  'premium.plan.best': 'Выгоднее всего',
  'premium.plan.perMonth': '/мес',
  'premium.plan.free.name': 'Бесплатно',
  'premium.plan.free.f1': '3 AI-рецепта и 3 скана в день',
  'premium.plan.free.f2': '10 сообщений AI-чата в день',
  'premium.plan.free.f3': '1 план питания в день',
  'premium.plan.free.f4': 'Коллекции и сохранённые рецепты',
  'premium.plan.premium.name': 'Премиум',
  'premium.plan.premium.f1': 'Счётчик калорий — 15 анализов в день',
  'premium.plan.premium.f2': '10 AI-рецептов и 10 сканов в день',
  'premium.plan.premium.f3': '50 сообщений AI-чата в день',
  'premium.plan.premium.f4': 'Приоритетные ответы AI',
  'premium.plan.pro.name': 'Pro',
  'premium.plan.pro.f1': 'Счётчик калорий — 40 анализов в день',
  'premium.plan.pro.f2': '25 AI-рецептов и 20 сканов в день',
  'premium.plan.pro.f3': '100 сообщений AI-чата в день',
  'premium.plan.pro.f4': 'Самый быстрый AI + ранний доступ к новинкам',
  'premium.note': 'Планы управляются в приложении. Цены в AZN; региональные цены в Google Play.',

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
  'nav.premium': 'Premium',
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
  'features.newBadge': 'Yeni',
  'features.calories.title': 'Kalori Sayacı',
  'features.calories.desc':
    'Herhangi bir yemeğin fotoğrafını çekin — veya sadece adını yazın — saniyeler içinde kalori, protein, karbonhidrat ve yağı öğrenin.',
  'features.collections.title': 'Tarif Koleksiyonları',
  'features.collections.desc':
    'Kaydettiğiniz tarifleri güzel koleksiyonlarda toplayın ve tek dokunuşla arkadaşlarınızla paylaşın.',
  'features.planner.title': 'AI Yemek Planlayıcı',
  'features.planner.desc':
    'Bütçenize, hedeflerinize ve damak zevkinize göre planlanmış bir haftalık yemek — alışveriş listesiyle birlikte.',

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

  'premium.tag': 'Premium',
  'premium.title': "Premium ile daha ileri gidin",
  'premium.subtitle':
    'En güçlü yapay zekâ özelliklerinin kilidini açın — yemeğini ciddiye alanlar için tasarlandı.',
  'premium.newChip': 'Yeni · Premium özellik',
  'premium.calorie.title': 'Kalori Sayacı — ne yediğinizi tam olarak bilin',
  'premium.calorie.desc':
    'Kamerayı herhangi bir tabağa tutun — Savora analiz etsin: kalori, protein, karbonhidrat, yağ ve tam içerik dökümü — beslenme bilimi formülleriyle doğrulanmış, sizin dilinizde.',
  'premium.point.photo': 'Fotoğraf analizi — kameradan veya galeriden',
  'premium.point.text': 'Veya sadece yemeğin adını ve porsiyonunu yazın',
  'premium.point.collections': 'Paylaşılabilir tarif koleksiyonları',
  'premium.point.reminders': 'Akıllı yemek hatırlatıcıları ve günlük fikirler',
  'premium.demo.dish': 'Tavuklu pilav',
  'premium.demo.portion': '1 tabak (~400 g)',
  'premium.demo.protein': 'Protein',
  'premium.demo.carbs': 'Karb.',
  'premium.demo.fat': 'Yağ',
  'premium.plan.popular': 'En popüler',
  'premium.plan.best': 'En avantajlı',
  'premium.plan.perMonth': '/ay',
  'premium.plan.free.name': 'Ücretsiz',
  'premium.plan.free.f1': 'Günde 3 AI tarif ve 3 tarama',
  'premium.plan.free.f2': 'Günde 10 AI sohbet mesajı',
  'premium.plan.free.f3': 'Günde 1 yemek planı',
  'premium.plan.free.f4': 'Koleksiyonlar ve kayıtlı tarifler',
  'premium.plan.premium.name': 'Premium',
  'premium.plan.premium.f1': 'Kalori Sayacı — günde 15 analiz',
  'premium.plan.premium.f2': 'Günde 10 AI tarif ve 10 tarama',
  'premium.plan.premium.f3': 'Günde 50 AI sohbet mesajı',
  'premium.plan.premium.f4': 'Öncelikli AI yanıtları',
  'premium.plan.pro.name': 'Pro',
  'premium.plan.pro.f1': 'Kalori Sayacı — günde 40 analiz',
  'premium.plan.pro.f2': 'Günde 25 AI tarif ve 20 tarama',
  'premium.plan.pro.f3': 'Günde 100 AI sohbet mesajı',
  'premium.plan.pro.f4': 'En hızlı AI + yeniliklere erken erişim',
  'premium.note': "Planlar uygulama içinde yönetilir. Fiyatlar AZN cinsindendir; Google Play'de bölgesel fiyatlandırma.",

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
