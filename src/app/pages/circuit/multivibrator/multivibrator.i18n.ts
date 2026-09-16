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
} satisfies TranslationFragment;
