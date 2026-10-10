import { TranslationFragment } from '../../../../i18n/types';

export const productsTranslations = {
  'products.title': { en: 'Circuits List', si: 'පරිපථ ලැයිස්තුව' },
  'products.subtitle': {
    en: 'Each kit includes the PCB, all components, and a printed quick-start card.',
    si: 'හොඳම තත්ත්වයෙන් නිෂ්පාදිත සර්කිට් බෝඩ් එකක් සමඟ, ඒකට අවශ්‍ය උපාංග සියල්ලම ඔබට මිලදී ගන්න පුළුවන්. සෑම උපාංගයකම ක්‍රියාකාරීත්වය අපි තහවුරු කරලයි ඔයාලට එවන්නෙ.',
  },
  'products.pcbNo': { en: 'PCB No:', si: 'PCB No:' },
  'products.buy': { en: 'Buy kit', si: 'වැඩිදුර කියවන්න' },
  'products.comingSoon': { en: 'Coming soon..', si: 'ළඟදීම..' },

  'level.beginner': { en: 'Beginner', si: 'ලේසියි' },
  'level.intermediate': { en: 'Intermediate', si: 'ටිකක් අසීරුයි' },

  'product.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'product.multivibrator.desc': {
    en: 'The classic two-transistor LED blinker. Learn how capacitors and transistors take turns switching — the "hello world" of electronics.',
    si: 'ඔයා ඉලෙක්ට්‍රොනික් වලට අලුත් කෙනෙක් නම්, මේ තමයි ඔයා මුලින්ම try කරලා බලන්න ඕනෙ සර්කිට් එක...',
  },
  'product.knightRider.title': { en: 'Knight Rider Circuit', si: 'නයිට්‍-රයිඩර් පරිපථය' },
  'product.knightRider.desc': {
    en: 'Turn an LED on with a fingertip. A gentle introduction to transistor amplification and how tiny signals control bigger ones.',
    si: 'මේක නම් නම කිව්ව ගමන් ඕන කෙනෙක් දන්නවා, මේක එකලස් කරන එකත් ලේසියි කියන්න පුළුවන්, උපාංග කිහිපයකින් ලස්සන LED රටාවක් නිර්මාණය කරගන්න පුළුවන්..',
  },
  'product.shortCircuitDetector.title': {
    en: 'Short Circuit Detector',
    si: 'Short Circuit හඳුනාගැනීමේ පරිපථය',
  },
  'product.shortCircuitDetector.desc': {
    en: 'An LDR senses the dark and switches the LED on automatically. Your first sensor circuit.',
    si: 'සර්කිට් එකක් එකලස් කරනකොට short වෙච්ච තැන් තියෙනවද කියලා මේකෙන් චෙක් කරගන්න පුළුවන්.. ',
  },
} satisfies TranslationFragment;
