import { TranslationFragment } from '../../../i18n/types';

export const multivibratorTranslations = {
  'circuit.back': { en: 'Back', si: 'ආපසු' },
  'circuit.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'circuit.multivibrator.p1': {
    en: 'An <b class="text-buddy-yellow">astable multivibrator</b> with two LEDs — the classic two-transistor circuit that never settles down. It has no stable state, so it flips back and forth on its own, switching the two LEDs on and off in a steady, alternating blink.',
    si: 'ඔයා ඉලෙක්ට්‍රොනික් වලට අලුත් කෙනෙක් නම්, මේ තමයි ඔයා මුලින්ම try කරලා බලන්න ඕනෙ සර්කිට් එක.',
  },
  'circuit.multivibrator.p2': {
    en: 'The rhythm comes from two capacitors charging and discharging in turn: each one holds a transistor off just long enough for its partner to light up, then they swap. It\'s the friendliest way to see timing, feedback, and transistor switching in action — the "hello world" of hands-on electronics.',
    si: 'මේ සර්කිට් එක හැදිලා තියෙන්නෙ ඉලෙක්ට්‍රොනික් ලෝකයේ තියෙන සරළම, ඒ වගේම වැදගත්ම උපාංග කීපයකින්. හැබැයි ඒවා එකතු වෙලා ක්‍රියාත්මක වෙන විදිහ නම් හරිම සිත්ගන්නාසුළුයි.',
  },
  'circuit.multivibrator.bom.title': {
    en: 'Bill of materials',
    si: 'උපාංග ලැයිස්තුව',
  },
  'circuit.multivibrator.bom.intro': {
    en: 'Everything that goes on the board, and how many of each you need.',
    si: 'මේ සර්කිට් එක හදාගන්න ඕන උපාංග මොනවද, ඒවායින් කීයක් ඕනද කියලා මෙතන තියෙනවා.',
  },
  'circuit.multivibrator.bom.part': { en: 'Part', si: 'උපාංගය' },
  'circuit.multivibrator.bom.designators': {
    en: 'On the board',
    si: 'සලකුණ',
  },
  'circuit.multivibrator.bom.quantity': { en: 'Qty', si: 'ගණන' },
  'circuit.multivibrator.bom.total': { en: 'Total parts', si: 'මුළු උපාංග ගණන' },
  'circuit.multivibrator.description.p1': {
    en: 'If you look closely, you can see that this circuit has a special thing. It is symmetric. You can divide the circuit in half so that it will have 2 parts with exact same components.',
    si: 'මේ සර්කිට් එක දිහා හොඳට බැලුවොත් ඔයාලට විශේෂ දෙයක් බලාගන්න පුළුවන්. ඒ තමයි මේ සර්කිට් එක හරියටම මැද්දෙන් සමාන කොටස් දෙකකට බෙදන්න පුළුවන්.',
  },
  'circuit.multivibrator.description.p2': {
    en: 'Primary component handling the LED pattern in this circuit is the Transistor. It acts as a automatic switch which time to time turns on and off the LEDs connected to it.',
    si: 'මෙතන ප්‍රධානම කෙනා තමයි ට්‍රාන්සිස්ටර් එක. එයා තමයි ස්වයක්‍රීය ස්වීච් එකක් විදිහට ක්‍රියාත්මක වෙලා එයාට අයිති LED එක On/Off කරන්නෙ.',
  },
  'circuit.multivibrator.description.p3': {
    en: 'But the circuit is designed in a way that only one side can stay turned on at a given time. The side which gets turned on, forcefully makes the other side turn off.',
    si: 'හැබැයි මේ දෙපැත්තම බලාගෙන ඉන්නෙ තමන්ට චාන්ස් එකක් ආපු ගමන් අනිත් කෙනාව Off කරන්න. ඒ විදිහට ක්‍රියාත්මක වෙන්න තමයි මේ සර්කිට් එක ඩිසයින් කරලා තියෙන්නෙ.',
  },
  'circuit.multivibrator.description.p4': {
    en: 'But the side which is turned off, waits until the capacitor gets charged enough to turn on again. And when the time comes, it gets turned on and forcefully turns off the other side.',
    si: 'හැබැයි එහෙමයි කියලා අනිත් කෙනා නිකං ඉන්නෙත් නෑ, එයා Off උනාට පස්සෙ ටික වෙලාවක් බලාගෙන ඉඳලා, වෙලව ආව ගමන් අනික් පැත්තට Return එක දෙනවා.',
  },
  'circuit.multivibrator.description.p5': {
    en: 'The time take to charge/discharge the capacitor is the key factor which decides the timing between these actions. ',
    si: 'මේ වැඩේ වෙන්න කොයිතරම් වෙලාවක් ගන්නවද කියලා ප්‍රධානවම තීරණය වෙන්නේ ඒ පැත්තට සම්බන්ධ කැපෑසිටර් එක ආරෝපණය වෙන්න කොයිතරම් වෙලාවක් යනවද කියන එක මත.',
  },
  'circuit.multivibrator.description.p6': {
    en: 'When the capacity gets increased, it takes longer time to switch between LEDs. And the (R1) resistor controls the current flow for chaging and discharging the capacitor.',
    si: 'කැපෑසිටි එකේ අගය වැඩි වෙනකොට වගේම එයාව ආරෝපණය වෙන්න අවශ්‍ය ධාරාව ලැබෙන රෙසිස්ටර් එකේ (R1) අගය වැඩි වෙනකොටත් මේ කාලය වැඩි වෙනවා.',
  },
  'circuit.multivibrator.description.p7': {
    en: 'So this tug-of-war between both sides continues as long as power is connected to the board. Which results the LED blinking pattern.',
    si: 'ඉතින් ඔය විදිහට මේ සර්කිට් එකට විදුලිය ලැබිලා තියෙනකන් මේ දෙපැත්ත තරඟෙට තමන්ගේ LED එක On කරගෙන අනික් කෙනාව Off කරනවා. ඔය විදිහට තමයි අපිට මාරුවෙන් මාරුවට දැල්වෙන රටාවක් බලාගන්න පුළුවන් වෙන්නේ.',
  },
} satisfies TranslationFragment;
