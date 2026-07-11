import { TranslationFragment } from '../../i18n/types';

export const productsTranslations = {
  'products.title': { en: 'Circuits List', si: 'පරිපථ ලැයිස්තුව' },
  'products.subtitle': {
    en: 'Each kit includes the PCB, all components, and a printed quick-start card.',
    si: 'හොඳම තත්ත්වයෙන් නිෂ්පාදිත සරිකිට් බෝඩ් එකක් එක්ක ඒකට අවශ්‍ය උපාංග සියල්ලම ඔබට ලැබෙනවා. සෑම උපාංගයකම ක්‍රියාකාරීත්වය අපි තහවුරු කරලයි එවන්නෙ.',
  },
  'products.pcbNo': { en: 'PCB No:', si: 'PCB No:' },
  'products.buy': { en: 'Buy kit', si: 'වැඩිදුර කියවන්න' },

  'level.beginner': { en: 'Beginner', si: 'ලේසියි' },
  'level.intermediate': { en: 'Intermediate', si: 'ටිකක් අසීරුයි' },

  'product.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'product.multivibrator.desc': {
    en: 'The classic two-transistor LED blinker. Learn how capacitors and transistors take turns switching — the "hello world" of electronics.',
    si: 'සම්භාව්‍ය ට්‍රාන්සිස්ටර දෙකේ LED දැල්වෙන පරිපථය. කැපෑසිටර සහ ට්‍රාන්සිස්ටර වාරානුක්‍රමයෙන් මාරු වන ආකාරය ඉගෙන ගන්න — ඉලෙක්ට්‍රොනික්ස් හි "hello world" එක.',
  },
  'product.touch.title': { en: 'Touch Switch', si: 'ස්පර්ශ ස්විචය' },
  'product.touch.desc': {
    en: 'Turn an LED on with a fingertip. A gentle introduction to transistor amplification and how tiny signals control bigger ones.',
    si: 'ඇඟිලි තුඩකින් LED එකක් දල්වන්න. ට්‍රාන්සිස්ටර විස්තාරණය සහ කුඩා සංඥා විශාල ඒවා පාලනය කරන ආකාරය පිළිබඳ මෘදු හැඳින්වීමක්.',
  },
  'product.nightlight.title': {
    en: 'Dark-Activated Night Light',
    si: 'අඳුරේ දැල්වෙන රාත්‍රී ලාම්පුව',
  },
  'product.nightlight.desc': {
    en: 'An LDR senses the dark and switches the LED on automatically. Your first sensor circuit.',
    si: 'LDR එකක් අඳුර හඳුනාගෙන LED එක ස්වයංක්‍රීයව දල්වයි. ඔබේ පළමු සංවේදක පරිපථය.',
  },
  'product.chaser.title': { en: '555 LED Chaser', si: '555 LED චේසර්' },
  'product.chaser.desc': {
    en: 'Ten LEDs racing in a loop, driven by the legendary 555 timer and a 4017 counter. Adjustable speed knob included.',
    si: 'ප්‍රසිද්ධ 555 ටයිමරය සහ 4017 කවුන්ටරය මගින් ධාවනය වන, ලූපයක දිවෙන LED දහයක්. ගැලපිය හැකි වේග නොබ් එකක් ඇතුළත් වේ.',
  },
  'product.siren.title': { en: 'Mini Siren', si: 'කුඩා සයිරනය' },
  'product.siren.desc': {
    en: 'A rising-and-falling police siren built from two oscillators and a small speaker. Loud enough to annoy a sibling.',
    si: 'ඔස්සිලේටර දෙකකින් සහ කුඩා ස්පීකරයකින් තැනූ ඉහළට හා පහළට යන පොලිස් සයිරනයක්. සහෝදරයෙකු කරදර කිරීමට තරම් ශබ්දයි.',
  },
  'product.fmradio.title': { en: 'FM Radio Receiver', si: 'FM රේඩියෝ ග්‍රාහකය' },
  'product.fmradio.desc': {
    en: 'Tune into real broadcasts with a single-chip FM receiver, headphone jack, and a hand-wound antenna coil you make yourself.',
    si: 'තනි-චිප් FM ග්‍රාහකයක්, හෙඩ්ෆෝන් ජැක් එකක්, සහ ඔබම තනා ගන්නා අතින් ඔතන ලද ඇන්ටෙනා දඟරයක් සමඟ සැබෑ විකාශන වෙත සුසර වන්න.',
  },
} satisfies TranslationFragment;
