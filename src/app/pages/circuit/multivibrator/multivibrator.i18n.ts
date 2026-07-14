import { TranslationFragment } from '../../../i18n/types';

export const multivibratorTranslations = {
  'circuit.back': { en: 'Back', si: 'ආපසු' },
  'circuit.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'circuit.multivibrator.p1': {
    en: 'An <b class="text-buddy-yellow">astable multivibrator</b> with two LEDs — the classic two-transistor circuit that never settles down. It has no stable state, so it flips back and forth on its own, switching the two LEDs on and off in a steady, alternating blink.',
    si: 'ඉලෙක්ට්‍රොනික් වලට අලුත් කෙනෙක් මුලින්ම හදලා බලන්න ඕනෙ, ඒ වගේම මේ විශය ගැන ආසාවක් ඇතිකරවන විදිහේ සර්කිට් එකක් තමයි මේ.',
  },
  'circuit.multivibrator.p2': {
    en: 'The rhythm comes from two capacitors charging and discharging in turn: each one holds a transistor off just long enough for its partner to light up, then they swap. It\'s the friendliest way to see timing, feedback, and transistor switching in action — the "hello world" of hands-on electronics.',
    si: 'මේ සර්කිට් එක හැදිලා තියෙන්නෙ ඉලෙක්ට්‍රොනික් ලෝකයේ තියෙන සරළම උපාංග කීපයකින්. හැබැයි ඒවා එකතු වෙලා ක්‍රියාත්මක වෙන ආකාරය නම් හරිම සිත්ගන්නාසුළුයි.',
  },
} satisfies TranslationFragment;
