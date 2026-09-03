import { TranslationFragment } from '../../../i18n/types';

/**
 * Short blurbs for the parts on the multivibrator board, shown in the card
 * under the PCB preview when a marker is tapped.
 *
 * Each key is referenced from `pcbConfig` through the part's `descriptionKey`.
 * Parts that are identical in this circuit — the two LEDs, the two 22k
 * resistors, and so on — deliberately share a key rather than repeating the
 * same copy twice.
 *
 * Values are rendered with `[innerHTML]`, so inline markup (`<b>`, `<br>`) is
 * allowed. Keep any emphasis a *dark* colour: this card sits on white, unlike
 * the page copy in `multivibrator.i18n.ts` which sits on the teal background.
 */
export const multivibratorPartTranslations = {
  'circuit.multivibrator.part.led': {
    en: 'A <b class="text-teal-800">light-emitting diode</b> — it glows when current flows through it, but only in one direction. The longer leg is the positive (+) side, so it has to go into the board the right way round.',
    si: 'ධාරාව ගලා යනකොට එළිය දෙන <b class="text-teal-800">LED</b> එකක්. ධාරාව ගලාගෙන යන්නේ එක දිශාවකට විතරයි, ඒ නිසා දිග කකුල (+) පැත්තට එන විදිහට හරියටම සවි කරන්න ඕනෙ.',
  },
  'circuit.multivibrator.part.r22k': {
    en: 'These <b class="text-teal-800">22k resistors</b> feed a small current into the base of each transistor. Together with the capacitors they decide how long each side stays off — that is what sets the blinking speed.',
    si: 'මේ <b class="text-teal-800">22k රෙසිස්ටර්</b> දෙක එක් එක් ට්‍රාන්සිස්ටරයේ base එකට කුඩා ධාරාවක් සපයනවා. කැපෑසිටර් එක්ක එකතු වෙලා එක් එක් පැත්ත නිවී තියෙන කාලය තීරණය කරන්නේ මේවා — ඒකෙන් තමයි LED ලයිට් වෙන වේගය හැදෙන්නේ.',
  },
  'circuit.multivibrator.part.r330': {
    en: 'The <b class="text-teal-800">330 ohm resistors</b> sit in series with the LEDs and limit how much current reaches them. Without them the LEDs would pull too much current and burn out.',
    si: '<b class="text-teal-800">330 ohm රෙසිස්ටර්</b> දෙක LED වලට යන ධාරාව සීමා කරනවා. මේවා නැත්නම් LED වලට වැඩිපුර ධාරාවක් ගිහින් ඒවා පිච්චිලා යනවා.',
  },
  'circuit.multivibrator.part.capacitor': {
    en: 'The two <b class="text-teal-800">47µF capacitors</b> are the timekeepers. Each one charges up, holds its transistor off for a moment, then discharges and lets it switch back on — the two take turns, and that is the rhythm you see in the LEDs.',
    si: 'මේ <b class="text-teal-800">47µF කැපෑසිටර්</b> දෙක තමයි වෙලාව බලාගන්නේ. එකක් චාජ් වෙලා තමන්ගේ ට්‍රාන්සිස්ටරය මොහොතකට නිවලා තියාගෙන, ඊට පස්සේ ඩිස්චාජ් වෙලා ආපහු ඒක ක්‍රියාත්මක වෙන්න දෙනවා. දෙන්නා මාරුවෙන් මාරුවට මේක කරන නිසා තමයි LED දෙක මාරුවෙන් මාරුවට පත්තු වෙන්නේ.',
  },
  'circuit.multivibrator.part.transistor': {
    en: 'A <b class="text-teal-800">BC547 transistor</b> is a switch with no moving parts: a tiny current into the middle leg (the base) lets a much larger current flow through the other two. Each one switches the LED on its own side of the board.',
    si: '<b class="text-teal-800">BC547 ට්‍රාන්සිස්ටරය</b> කරන්නේ ස්විචයක වැඩක්. මැද කකුලට (base එකට) කුඩා ධාරාවක් දුන්නම, අනිත් කකුල් දෙක හරහා ඊට වඩා ලොකු ධාරාවක් ගලාගෙන යන්න පුළුවන් වෙනවා. එක් එක් ට්‍රාන්සිස්ටරය තමන්ගේ පැත්තේ LED එක පත්තු කරනවා.',
  },
  'circuit.multivibrator.part.usbC': {
    en: 'The <b class="text-teal-800">USB-C connector</b> is where the 5V comes in — any phone charger or power bank will do. It only powers the board; no data travels through it.',
    si: '<b class="text-teal-800">USB-C කනෙක්ටරය</b> හරහා තමයි 5V විදුලිය ලැබෙන්නේ. ඕනෑම ෆෝන් චාජරයක් හරි පවර් බෑන්ක් එකක් හරි ගැලපෙනවා. මේකෙන් වෙන්නේ බෝඩ් එකට විදුලිය දෙන එක විතරයි, ඩේටා යන්නේ නෑ.',
  },
} satisfies TranslationFragment;
