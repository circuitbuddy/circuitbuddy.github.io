import { TranslationFragment } from '../../../i18n/types';

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
    si: 'ධාරාව ගලා යනකොට එළිය දෙන උපාංගයක්. ධාරාව ගලාගෙන යන්නේ එක දිශාවකට විතරයි.',
  },
  'circuit.multivibrator.part.led.polarity': {
    en: 'The longer leg is the positive (+) side.',
    si: 'දිග කකුල (+) පැත්තයි.',
  },
  // Shown in the warning box on the LED write-up — see part-details.component.html.
  'circuit.multivibrator.part.led.warning': {
    en: 'Fit it the right way round: the shorter leg goes to the flat side marked on the board. A backwards LED simply stays dark — and once it is soldered in, turning it around is fiddly.',
    si: 'හරි පැත්තට සවි කරන්න: කොට කකුල බෝඩ් එකේ ලකුණු කරලා තියෙන පැතලි පැත්තට එන්න ඕනෙ. උල්ටා විදිහට දැම්මොත් LED එක පත්තු වෙන්නේ නෑ — සෝල්ඩර් කරලා ඉවර වුණාට පස්සේ ආපහු හරවන එක ලේසි නෑ.',
  },
  'circuit.multivibrator.part.led.role': {
    en: 'The two LEDs sit on opposite halves of the board and take turns lighting up.',
    si: 'LED දෙක බෝඩ් එකේ දෙපැත්තේ තියෙනවා, මාරුවෙන් මාරුවට පත්තු වෙනවා.',
  },
  'circuit.multivibrator.part.led.placement': {
    en: 'The short leg goes into the − hole and the long leg into the + hole.',
    si: 'කොට කකුල (−) සිදුරටත්, දිග කකුල (+) සිදුරටත් යන්න ඕනෙ.',
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
    si: 'මේවා LED එක්ක ශ්‍රේණිගතව සම්බන්ධ වෙලා ඒවාට යන ධාරාව සීමා කරනවා.',
  },
  'circuit.multivibrator.part.r330.why': {
    en: 'Without them the LEDs would pull far too much current and burn out.',
    si: 'මේවා නැත්නම් LED වලට වැඩිපුර ධාරාවක් ගිහින් ඒවා පිච්චිලා යනවා.',
  },
  // Shared by both resistor blocks — a resistor has no polarity, so the copy is the same.
  'circuit.multivibrator.part.resistor.placement': {
    en: 'Bend both legs down and sit the body flat on the board. A resistor has no polarity, so either way round works.',
    si: 'කකුල් දෙකම පහළට නවලා, උපාංගය බෝඩ් එකට තදින් තියෙන්න සවි කරන්න. රෙසිස්ටරයට (+) (−) පැති නෑ, ඒ නිසා ඕනෑම පැත්තකට දාන්න පුළුවන්.',
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
    si: 'BC547 කියන්නේ චලනය වන කොටස් නැති ස්විචයක්.',
  },
  'circuit.multivibrator.part.transistor.how': {
    en: 'A tiny current into the middle leg (the base) lets a much larger current flow through the other two.',
    si: 'මැද කකුලට (base එකට) කුඩා ධාරාවක් දුන්නම, අනිත් කකුල් දෙක හරහා ඊට වඩා ලොකු ධාරාවක් ගලාගෙන යන්න පුළුවන් වෙනවා.',
  },
  'circuit.multivibrator.part.transistor.role': {
    en: 'Each transistor switches the LED on its own side of the board.',
    si: 'එක් එක් ට්‍රාන්සිස්ටරය තමන්ගේ පැත්තේ LED එක පත්තු කරනවා.',
  },
  'circuit.multivibrator.part.transistor.placement': {
    en: 'It only fits one way: the flat face of the transistor has to line up with the flat side of the outline printed on the board.',
    si: 'මේක ගැලපෙන්නේ එක පැත්තකට විතරයි: ට්‍රාන්සිස්ටරයේ පැතලි පැත්ත බෝඩ් එකේ මුද්‍රණය කර ඇති පැතලි පැත්තට ගැලපෙන්න ඕනෙ.',
  },

  // --- USB-C power input ---
  'circuit.multivibrator.part.usbC.summary': {
    en: 'The USB-C connector is where the 5V supply comes in.',
    si: 'USB-C කනෙක්ටරය හරහා තමයි 5V විදුලිය ලැබෙන්නේ.',
  },
  'circuit.multivibrator.part.usbC.source': {
    en: 'Any phone charger or power bank will do.',
    si: 'ඕනෑම ෆෝන් චාජරයක් හරි පවර් බෑන්ක් එකක් හරි ගැලපෙනවා.',
  },
  'circuit.multivibrator.part.usbC.data': {
    en: 'It only powers the board — no data travels through it.',
    si: 'මේකෙන් වෙන්නේ බෝඩ් එකට විදුලිය දෙන එක විතරයි, ඩේටා යන්නේ නෑ.',
  },
} satisfies TranslationFragment;
