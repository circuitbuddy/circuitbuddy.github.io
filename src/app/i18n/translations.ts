export type Lang = 'en' | 'si';

export const LANGS: readonly Lang[] = ['en', 'si'] as const;

/**
 * All user-visible copy for the site, keyed by a dot-namespaced string.
 *
 * - Plain values are used with `{{ 'key' | t }}`.
 * - Values containing markup (e.g. inline <span>/<b> emphasis) are meant to be
 *   rendered with `[innerHTML]="'key' | t"`. Angular's sanitizer keeps the
 *   `class` attribute and basic inline tags, so Tailwind emphasis survives.
 *
 * NOTE: The Sinhala (si) copy is a best-effort translation — please have a
 * native speaker review it before publishing.
 */
export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    // --- nav ---
    'nav.about': 'About',
    'nav.circuits': 'Circuits',
    'nav.contact': 'Contact',
    'nav.shop': 'Shop kits',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // --- hero ---
    'hero.tagline': 'Learn Electronics with Fun!',
    'hero.subtitle':
      'Beginner-friendly electronics kits you solder yourself. Every kit ships with a real PCB, all the parts, and a step-by-step guide — just add a soldering iron and curiosity.',
    'hero.browse': 'Browse circuits',
    'hero.how': 'How it works',
    'hero.badge.usbc': 'USB-C Compatible',
    'hero.badge.noExp': 'No experience needed',
    'hero.badge.beginners': 'Made for beginners',

    // --- about ---
    'about.title': 'What is Circuit Buddy ?',
    'about.p1':
      'Circuit Buddy is all about <span class="font-semibold text-teal-800">Having Fun</span> with <span class="font-semibold">Building Real Circuits</span> and making it more interesting to <span class="font-semibold">Learn Electronics</span> for beginners.',
    'about.p2':
      'You can start from simpler and <span class="font-semibold">Beginner friendly</span> ones and move towards <span class="font-semibold">Advanced</span> and more challenging circuits.',
    'about.p3':
      'Instructions, Schematics and Important details to learn, are available in <span class="font-semibold">circuitbuddy.github.io</span>.',
    'about.p4': 'Circuit Buddy is sparked in <span class="font-semibold">Sri Lanka</span>.',
    'about.usbTitle': 'Why Type-C USB ?',
    'about.usb1':
      'USB Type-C power adapters are <span class="font-semibold">safer to use</span>, a perfect option for experiments with <span class="font-semibold">extremely low risk</span> of getting hurt.',
    'about.usb2':
      '<span class="font-semibold">Easier to use</span>, and no need to <span class="font-semibold">meddling with wires</span>, which is messy and unreliable. Just plug it in and watch it come alive.',
    'about.usb3':
      'Type-C has become the global standard for power adapters. <span class="font-semibold">Wide availability</span> allows you to power up your circuit anywhere',
    'about.step1.title': 'Pick a Circuit',
    'about.step1.body': 'Choose a circuit below. Each one lists its parts and difficulty.',
    'about.step2.title': 'Solder the components',
    'about.step2.body':
      'Follow the illustrated guide — the silkscreen shows exactly where each part goes.',
    'about.step3.title': 'Connect to power',
    'about.step3.body':
      'Plug into any USB-C charger, watch it come alive, then learn how it works.',

    // --- products ---
    'products.title': 'Circuits List',
    'products.subtitle': 'Each kit includes the PCB, all components, and a printed quick-start card.',
    'products.pcbNo': 'PCB No:',
    'products.buy': 'Buy kit',
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'product.multivibrator.title': 'Multivibrator Circuit',
    'product.multivibrator.desc':
      'The classic two-transistor LED blinker. Learn how capacitors and transistors take turns switching — the "hello world" of electronics.',
    'product.touch.title': 'Touch Switch',
    'product.touch.desc':
      'Turn an LED on with a fingertip. A gentle introduction to transistor amplification and how tiny signals control bigger ones.',
    'product.nightlight.title': 'Dark-Activated Night Light',
    'product.nightlight.desc':
      'An LDR senses the dark and switches the LED on automatically. Your first sensor circuit.',
    'product.chaser.title': '555 LED Chaser',
    'product.chaser.desc':
      'Ten LEDs racing in a loop, driven by the legendary 555 timer and a 4017 counter. Adjustable speed knob included.',
    'product.siren.title': 'Mini Siren',
    'product.siren.desc':
      'A rising-and-falling police siren built from two oscillators and a small speaker. Loud enough to annoy a sibling.',
    'product.fmradio.title': 'FM Radio Receiver',
    'product.fmradio.desc':
      'Tune into real broadcasts with a single-chip FM receiver, headphone jack, and a hand-wound antenna coil you make yourself.',

    // --- contact ---
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Reach to us if you are interested in buying our circuits.',
    'contact.resellers': 'For Resellers',
    'contact.bulk': 'Bulk Orders',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',

    // --- footer ---
    'footer.tagline': '— DIY circuit boards',
    'footer.copyright': '© 2026 · open hardware · solder responsibly',

    // --- circuit pages ---
    'circuit.back': 'Back',
    'circuit.multivibrator.p1':
      'An <b class="text-buddy-yellow">astable multivibrator</b> with two LEDs — the classic two-transistor circuit that never settles down. It has no stable state, so it flips back and forth on its own, switching the two LEDs on and off in a steady, alternating blink.',
    'circuit.multivibrator.p2':
      'The rhythm comes from two capacitors charging and discharging in turn: each one holds a transistor off just long enough for its partner to light up, then they swap. It\'s the friendliest way to see timing, feedback, and transistor switching in action — the "hello world" of hands-on electronics.',
  },

  si: {
    // --- nav ---
    'nav.about': 'අප ගැන',
    'nav.circuits': 'පරිපථ',
    'nav.contact': 'සම්බන්ධ වන්න',
    'nav.shop': 'කට්ටල මිලට ගන්න',
    'nav.openMenu': 'මෙනුව විවෘත කරන්න',
    'nav.closeMenu': 'මෙනුව වසන්න',

    // --- hero ---
    'hero.tagline': 'විනෝදයෙන් ඉලෙක්ට්‍රොනික්ස් ඉගෙන ගන්න!',
    'hero.subtitle':
      'ඔබම පෑස්සිය හැකි, ආරම්භකයන්ට හිතකර ඉලෙක්ට්‍රොනික් කට්ටල. සෑම කට්ටලයක්ම සැබෑ PCB එකක්, සියලුම කොටස්, සහ පියවරෙන් පියවර මාර්ගෝපදේශයක් සමඟ ලැබේ — ඔබට අවශ්‍ය වන්නේ පෑස්සුම් උපකරණයක් සහ කුතුහලයක් පමණි.',
    'hero.browse': 'පරිපථ බලන්න',
    'hero.how': 'මෙය ක්‍රියා කරන ආකාරය',
    'hero.badge.usbc': 'USB-C ගැළපේ',
    'hero.badge.noExp': 'පළපුරුද්දක් අවශ්‍ය නැත',
    'hero.badge.beginners': 'ආරම්භකයන් සඳහා',

    // --- about ---
    'about.title': 'Circuit Buddy යනු කුමක්ද?',
    'about.p1':
      'Circuit Buddy යනු ආරම්භකයන් සඳහා <span class="font-semibold text-teal-800">විනෝදය</span> සමඟ <span class="font-semibold">සැබෑ පරිපථ තැනීම</span> සහ <span class="font-semibold">ඉලෙක්ට්‍රොනික්ස් ඉගෙනීම</span> වඩාත් සිත්ගන්නාසුලු කිරීම ගැනයි.',
    'about.p2':
      'ඔබට සරල සහ <span class="font-semibold">ආරම්භකයන්ට හිතකර</span> ඒවායින් පටන් ගෙන <span class="font-semibold">උසස්</span> සහ වඩාත් අභියෝගාත්මක පරිපථ දක්වා ගමන් කළ හැකිය.',
    'about.p3':
      'උපදෙස්, පරිපථ රූප සටහන් සහ ඉගෙනීමට වැදගත් විස්තර <span class="font-semibold">circuitbuddy.github.io</span> හි ඇත.',
    'about.p4': 'Circuit Buddy <span class="font-semibold">ශ්‍රී ලංකාවේ</span> ඇරඹුණු ව්‍යාපෘතියකි.',
    'about.usbTitle': 'Type-C USB ඇයි?',
    'about.usb1':
      'USB Type-C බලය සපයන උපාංග <span class="font-semibold">භාවිතයට වඩාත් ආරක්ෂිතයි</span>, තුවාල වීමේ <span class="font-semibold">අවදානම ඉතා අඩු</span> අත්හදා බැලීම් සඳහා කදිම විකල්පයකි.',
    'about.usb2':
      '<span class="font-semibold">භාවිතයට පහසුයි</span>, අවුල් සහගත හා විශ්වාස කළ නොහැකි <span class="font-semibold">වයර් සමඟ පොර බැදීමට</span> අවශ්‍ය නැත. සම්බන්ධ කර එය ක්‍රියාත්මක වනු බලන්න.',
    'about.usb3':
      'Type-C බලය සපයන උපාංග සඳහා ගෝලීය ප්‍රමිතිය බවට පත්ව ඇත. <span class="font-semibold">පුළුල්ව පවතින බැවින්</span> ඔබට ඕනෑම තැනක ඔබේ පරිපථයට බලය ලබා දිය හැකිය',
    'about.step1.title': 'පරිපථයක් තෝරන්න',
    'about.step1.body': 'පහතින් පරිපථයක් තෝරන්න. සෑම එකක්ම එහි කොටස් සහ දුෂ්කරතාවය දක්වයි.',
    'about.step2.title': 'සංරචක පෑස්සන්න',
    'about.step2.body':
      'රූපමය මාර්ගෝපදේශය අනුගමනය කරන්න — සිල්ක්ස්ක්‍රීන් මඟින් සෑම කොටසක්ම යා යුතු ස්ථානය නිවැරදිව පෙන්වයි.',
    'about.step3.title': 'බලයට සම්බන්ධ කරන්න',
    'about.step3.body':
      'ඕනෑම USB-C චාජරයකට සම්බන්ධ කර, එය ක්‍රියාත්මක වනු බලා, පසුව එය ක්‍රියා කරන ආකාරය ඉගෙන ගන්න.',

    // --- products ---
    'products.title': 'පරිපථ ලැයිස්තුව',
    'products.subtitle': 'සෑම කට්ටලයකම PCB එක, සියලුම සංරචක, සහ මුද්‍රිත ඉක්මන් ආරම්භක කාඩ්පතක් ඇතුළත් වේ.',
    'products.pcbNo': 'PCB අංකය:',
    'products.buy': 'කට්ටලය මිලට ගන්න',
    'level.beginner': 'ආරම්භක',
    'level.intermediate': 'මධ්‍යම',
    'product.multivibrator.title': 'මල්ටිවයිබ්‍රේටර් පරිපථය',
    'product.multivibrator.desc':
      'සම්භාව්‍ය ට්‍රාන්සිස්ටර දෙකේ LED දැල්වෙන පරිපථය. කැපෑසිටර සහ ට්‍රාන්සිස්ටර වාරානුක්‍රමයෙන් මාරු වන ආකාරය ඉගෙන ගන්න — ඉලෙක්ට්‍රොනික්ස් හි "hello world" එක.',
    'product.touch.title': 'ස්පර්ශ ස්විචය',
    'product.touch.desc':
      'ඇඟිලි තුඩකින් LED එකක් දල්වන්න. ට්‍රාන්සිස්ටර විස්තාරණය සහ කුඩා සංඥා විශාල ඒවා පාලනය කරන ආකාරය පිළිබඳ මෘදු හැඳින්වීමක්.',
    'product.nightlight.title': 'අඳුරේ දැල්වෙන රාත්‍රී ලාම්පුව',
    'product.nightlight.desc':
      'LDR එකක් අඳුර හඳුනාගෙන LED එක ස්වයංක්‍රීයව දල්වයි. ඔබේ පළමු සංවේදක පරිපථය.',
    'product.chaser.title': '555 LED චේසර්',
    'product.chaser.desc':
      'ප්‍රසිද්ධ 555 ටයිමරය සහ 4017 කවුන්ටරය මගින් ධාවනය වන, ලූපයක දිවෙන LED දහයක්. ගැලපිය හැකි වේග නොබ් එකක් ඇතුළත් වේ.',
    'product.siren.title': 'කුඩා සයිරනය',
    'product.siren.desc':
      'ඔස්සිලේටර දෙකකින් සහ කුඩා ස්පීකරයකින් තැනූ ඉහළට හා පහළට යන පොලිස් සයිරනයක්. සහෝදරයෙකු කරදර කිරීමට තරම් ශබ්දයි.',
    'product.fmradio.title': 'FM රේඩියෝ ග්‍රාහකය',
    'product.fmradio.desc':
      'තනි-චිප් FM ග්‍රාහකයක්, හෙඩ්ෆෝන් ජැක් එකක්, සහ ඔබම තනා ගන්නා අතින් ඔතන ලද ඇන්ටෙනා දඟරයක් සමඟ සැබෑ විකාශන වෙත සුසර වන්න.',

    // --- contact ---
    'contact.title': 'අප හා සම්බන්ධ වන්න',
    'contact.subtitle': 'අපගේ පරිපථ මිලට ගැනීමට කැමති නම් අප හා සම්බන්ධ වන්න.',
    'contact.resellers': 'නැවත විකුණන්නන් සඳහා',
    'contact.bulk': 'තොග ඇණවුම්',
    'contact.email': 'විද්‍යුත් තැපෑල',
    'contact.whatsapp': 'WhatsApp',

    // --- footer ---
    'footer.tagline': '— DIY පරිපථ පුවරු',
    'footer.copyright': '© 2026 · විවෘත දෘඩාංග · පරිස්සමින් පෑස්සන්න',

    // --- circuit pages ---
    'circuit.back': 'ආපසු',
    'circuit.multivibrator.p1':
      'LED දෙකක් සහිත <b class="text-buddy-yellow">අස්ථායී මල්ටිවයිබ්‍රේටරයක්</b> — කිසිදා නිශ්චල නොවන සම්භාව්‍ය ට්‍රාන්සිස්ටර දෙකේ පරිපථය. එයට ස්ථායී තත්ත්වයක් නොමැති නිසා, එය තනිවම ඉදිරියට හා පසුපසට මාරු වෙමින්, LED දෙක ස්ථාවර, විකල්ප ලෙස දැල්වෙමින් හා නිවෙමින් පවතී.',
    'circuit.multivibrator.p2':
      'රිද්මය පැමිණෙන්නේ කැපෑසිටර දෙකක් වාරානුක්‍රමයෙන් ආරෝපණය හා විසර්ජනය වීමෙනි: එක් එක් කැපෑසිටරය එහි සහකරු දැල්වීමට තරම් වේලාවක් ට්‍රාන්සිස්ටරයක් නිවා තබා ගනී, පසුව ඒවා මාරු වේ. කාලනියමය, ප්‍රතිපෝෂණය, සහ ට්‍රාන්සිස්ටර මාරුවීම ක්‍රියාවෙන් දැකීමට ඇති හොඳම ක්‍රමය එයයි — ප්‍රායෝගික ඉලෙක්ට්‍රොනික්ස් හි "hello world" එක.',
  },
};
