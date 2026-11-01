import { TranslationFragment } from '../../../../i18n/types';

/**
 * Text for the part write-ups shown under the multivibrator PCB preview.
 *
 * These are plain sentences, not markup — the layout around them lives in
 * `part-details/part-details.component.html`, where each part gets a `@case`
 * block it can structure however it likes. Keys are grouped by the part's
 * `detailId`, so parts that are identical in this circuit (the two LEDs, the
 * two 22k resistors, …) share one set.
 */
export const multivibratorPartTranslations = {
  // --- LEDs ---
  'circuit.multivibrator.part.led.summary': {
    en: 'A light-emitting diode glows when current flows through it — but only in one direction.',
    si: 'LED එක ගැන නම් අමුතුවෙන් කියන්න ඕනෙ නෑනෙ!',
  },
  'circuit.multivibrator.part.led.description1': {
    en: 'A light-emitting diode glows when current flows through it — but only in one direction.',
    si: 'මෙයාගේ (+) අග්‍රය R2 රෙසිස්ටර් එක හරහා කෙලින්ම පරිපථයේ (+) විදුලි සැපයුමත් එක්ක සම්බන්ධ කරලා තියෙන්නෙ.',
  },
  'circuit.multivibrator.part.led.description2': {
    en: 'A light-emitting diode glows when current flows through it — but only in one direction.',
    si: 'හැබැයි (-) අග්‍රය පරිපථයේ (-) විදුලි සැපයුමත් එක්ක කෙලින්ම සම්බන්ධ වෙන්නේ නෑ.  ඒක සම්බන්ධ වෙන්නේ LED එක පැත්තේ තියන ට්‍රාන්සිස්ටර් එකට.',
  },
  'circuit.multivibrator.part.led.description3': {
    en: 'A light-emitting diode glows when current flows through it — but only in one direction.',
    si: 'ඒ ට්‍රාන්සිස්ටර් එක තමයි තීරණය කරන්නෙ, කොයි වෙලාවටද විදුලි සැපයුම සම්පූර්ණ කරලා LED එක පත්තු කරන්නේ කියලා.',
  },
  // Shown in the warning box on the LED write-up — see part-details.component.html.
  'circuit.multivibrator.part.led.warning': {
    en: 'Fit it the right way round: the shorter leg goes to the flat side marked on the board. A backwards LED simply stays dark — and once it is soldered in, turning it around is fiddly.',
    si: 'මෙම උපාංගය පැත්ත මාරුකර සවිකිරීමෙන් පරිපථය ක්‍රියාත්මක නොවීමට හා උපාංගයට හානි වීමට ඉඩ ඇත.',
  },
  'circuit.multivibrator.part.led.placement': {
    en: 'The short leg goes into the − hole and the long leg into the + hole.',
    si: 'LED එකේ දිග අග්‍රය තමයි (+) සහ දිගින් අඩු එක තමයි (-) අග්‍රය වෙන්නෙ. මේ රූපසටහනේ තියෙන විදිහට තමයි එයාව සර්කිට් බෝඩ් එකට නිවැරදිව සවි කරගන්නේ',
  },

  // --- 22k resistors (timing) ---
  'circuit.multivibrator.part.r22k.summary': {
    en: 'These resistors feed a small current into the base of each transistor.',
    si: 'මේ රෙසිස්ටර් දෙක එක් එක් ට්‍රාන්සිස්ටරයේ base එකට කුඩා ධාරාවක් සපයනවා.',
  },
  'circuit.multivibrator.part.r22k.timing': {
    en: 'Together with the capacitors they decide how long each side stays off — that is what sets the blinking speed.',
    si: 'කැපෑසිටර් එක්ක එකතු වෙලා එක් එක් පැත්ත නිවී තියෙන කාලය තීරණය කරන්නේ මේවා — ඒකෙන් තමයි ලයිට් වෙන වේගය හැදෙන්නේ.',
  },
  'circuit.multivibrator.part.r22k.experiment': {
    en: 'Fit a larger value and the blinking slows down; a smaller one speeds it up.',
    si: 'වැඩි අගයක් දැම්මොත් වේගය අඩු වෙනවා, අඩු අගයක් දැම්මොත් වේගය වැඩි වෙනවා.',
  },

  // --- 330 ohm resistors (LED current limiting) ---
  'circuit.multivibrator.part.r330.summary': {
    en: 'These sit in series with the LEDs and limit how much current reaches them.',
    si: 'මේ රෙසිස්ටර් එකෙන් තමයි එයාට උඩින් තියන LED එකට දැල්වෙන්න අවශ්‍ය ප්‍රමාණයට ධාරාව සීමා කරලා දෙන්නේ. එහෙම කලේ නැතිනම් 5v සැපයුමක් කෙලින්ම LED එකට ලැබුනම, ඒක පිච්චිලා යනවා.',
  },
  'circuit.multivibrator.part.r330.summary2': {
    en: 'These sit in series with the LEDs and limit how much current reaches them.',
    si: 'ඔයා මෙතනට පාවිච්චි කරන්න ඕනෙ රෙසිස්ටර් එකේ අගය එයාට උඩින් තියන LED එකේ පාට අනුව වෙනස් වෙනවා. ඒකට පහල තියෙන රූපසටහන බලන්න.',
  },
  'circuit.multivibrator.part.r330.summary3': {
    en: 'These sit in series with the LEDs and limit how much current reaches them.',
    si: 'සාමාන්න්‍යයෙන් 200ohms වගේ රෙසිස්ටර් එකක් ඕනේම LED එකකට ගැලපෙනවා. හැබැයි පාට දෙකක LED පාවිච්චි කරනකොට එක LED එකක් අනිත් එකට වඩා ගොඩාක් වැඩි එළියකින් පත්තු වෙන්න පුළුවන්. එතකොට සර්කිට් එකේ රටාව ටිකක් සමබර නෑ වගේ පේනවා.',
  },
  'circuit.multivibrator.part.r330.why': {
    en: 'Without them the LEDs would pull far too much current and burn out.',
    si: 'මේවා නැත්නම් LED වලට වැඩිපුර ධාරාවක් ගිහින් ඒවා පිච්චිලා යනවා.',
  },
  // Shared by both resistor blocks — a resistor has no polarity, so the copy is the same.
  'circuit.multivibrator.part.resistor.placement': {
    en: 'Bend both legs down and sit the body flat on the board. A resistor has no polarity, so either way round works.',
    si: 'මෙන්න මේ විදිහට තමයි රෙසිස්ටරර් එකක් සර්කිට් එකට සවි කරගන්නෙ. රෙසිස්ටරයට (+) (−) පැති නෑ, ඒ නිසා ඕනෑම පැත්තකට දාන්න පුළුවන්.',
  },

  // --- 47uF capacitors (timing) ---
  'circuit.multivibrator.part.capacitor.summary': {
    en: 'The two capacitors are the timekeepers of this circuit.',
    si: 'මේ කැපෑසිටර් දෙක තමයි මේ සර්කිට් එකේ වෙලාව බලාගන්නේ.',
  },
  'circuit.multivibrator.part.capacitor.how': {
    en: 'Each one charges up, holds its transistor off for a moment, then discharges and lets it switch back on.',
    si: 'එකක් චාජ් වෙලා තමන්ගේ ට්‍රාන්සිස්ටරය මොහොතකට නිවලා තියාගෙන, ඊට පස්සේ ඩිස්චාජ් වෙලා ආපහු ඒක ක්‍රියාත්මක වෙන්න දෙනවා.',
  },
  'circuit.multivibrator.part.capacitor.polarity': {
    en: 'Electrolytic capacitors have a marked negative (−) side — that stripe has to match the board.',
    si: 'ඉලෙක්ට්‍රොලයිටික් කැපෑසිටර් වල (−) පැත්ත ලකුණු කරලා තියෙනවා — ඒ ඉරි තියෙන පැත්ත බෝඩ් එකට ගැලපෙන්න ඕනෙ.',
  },
  'circuit.multivibrator.part.capacitor.placement': {
    en: 'The dark stripe down the body marks the negative lead — that leg goes into the − hole.',
    si: 'උපාංගයේ ඇති කළු ඉරෙන් පෙන්නන්නේ (−) කකුලයි — ඒ කකුල (−) සිදුරට යන්න ඕනෙ.',
  },

  // --- BC547 transistors (switching) ---
  'circuit.multivibrator.part.transistor.summary': {
    en: 'A BC547 is a switch with no moving parts.',
    si: 'මේ උපාංගයට කියන්නෙ ට්‍රාන්සිස්ටර් එකක් කියලා. මේ සර්කිට් එකේ එයාගේ කාර්යභාරය තමයි ස්වයක්‍රීය ස්විචයක් විදිහට ක්‍රියාත්මක වෙන එක.',
  },
  'circuit.multivibrator.part.transistor.how': {
    en: 'A tiny current into the middle leg (the base) lets a much larger current flow through the other two.',
    si: 'තමන්ගේ පැත්තේ තිඉයන LED එකේ (-) අග්‍රය පරිපථයේ (-) විදුලියත් එක්ක සම්බන්ධ කරන වැඩේ සහ විසන්ධි කරන වැඩේ කරන්නෙ මේ ට්‍රාන්සිස්ටර් එකෙන්. ',
  },
  'circuit.multivibrator.part.transistor.role': {
    en: 'Each transistor switches the LED on its own side of the board.',
    si: 'ස්විචය On වෙලා තියෙනවද නැත්තන් Off වෙලා තියෙනවද කියලා තීරණය වෙන්නේ මෙයාගේ මැද තියෙන Base අග්‍රයට ලැබෙන විදුලියේ ස්වභාවයත් එක්ක.',
  },
  'circuit.multivibrator.part.transistor.placement': {
    en: 'It only fits one way: the flat face of the transistor has to line up with the flat side of the outline printed on the board.',
    si: 'මේක ගැලපෙන්නේ එක පැත්තකට විතරයි: ට්‍රාන්සිස්ටරයේ පැතලි පැත්ත බෝඩ් එකේ මුද්‍රණය කර ඇති පැතලි පැත්තට ගැලපෙන්න ඕනෙ.',
  },

  // --- USB-C power input ---
  'circuit.multivibrator.part.usbC.summary': {
    en: 'The USB-C connector is where the 5V supply comes in.',
    si: 'USB-C කනෙක්ටරය හරහා තමයි සර්කිට් එක ක්‍රියාත්මක කරන්න ඕනෙ විදුලිය ලබා ගන්නෙ.',
  },
  'circuit.multivibrator.part.usbC.source': {
    en: 'Any phone charger or power bank will do.',
    si: 'ඕනෑම ෆෝන් චාජරයක් හරි පවර් බෑන්ක් එකකින් උනත් මෙයාව ක්‍රියාත්මක කරන්න පුළුවන්.',
  },
  'circuit.multivibrator.part.usbC.data': {
    en: 'It only powers the board — no data travels through it.',
    si: 'මේකෙන් වෙන්නේ බෝඩ් එකට විදුලිය දෙන එක විතරයි, ඩේටා යන්නේ නෑ.',
  },
} satisfies TranslationFragment;
