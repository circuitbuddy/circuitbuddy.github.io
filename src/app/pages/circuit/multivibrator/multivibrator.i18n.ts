import { TranslationFragment } from '../../../i18n/types';

export const multivibratorTranslations = {
  'circuit.back': { en: 'Back', si: 'ආපසු' },
  'circuit.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'circuit.multivibrator.p1': {
    en: 'An <b class="text-buddy-yellow">astable multivibrator</b> with two LEDs — the classic two-transistor circuit that never settles down. It has no stable state, so it flips back and forth on its own, switching the two LEDs on and off in a steady, alternating blink.',
    si: 'මේක තමයි මුල ඉදන් පටන් ගන්න කෙනෙක්, ඉස්සෙල්ලාම හදලා බලන්න ඕනෙ සර්කිට් එක. ඉලෙක්ට්‍රොනික් ලෝකයේ තියන ප්‍රධානම උපාංග ටික එකතු කරලා හදපු, එකලස් කරන්නත් හරිම ලේසි, ඒ වගේම ඉලෙක්ට්‍රොනික් කියන විෂය ගැන ආසාවක්, කුතුහලයක් ඇතිකරවන විදිහේ සර්කිට් එකක් තමයි මේ.',
  },
  'circuit.multivibrator.p2': {
    en: 'The rhythm comes from two capacitors charging and discharging in turn: each one holds a transistor off just long enough for its partner to light up, then they swap. It\'s the friendliest way to see timing, feedback, and transistor switching in action — the "hello world" of hands-on electronics.',
    si: 'මේකෙදී ඔයාට බලාගන්න පුළුවන් LED දෙකක් මාරුවෙන් මාරුවට දැල්වෙමින් නිවෙන ආකාරයේ රටාවක්. මේ සර්කිට් එක හැදිලා තියෙන්නෙ සරළම උපාංග කීපයකින් උනාට, මේ විදිහට ක්‍රියාත්මක වෙන ආකාරය නම් හරිම සිත්ගන්නාසුළුයි.',
  },
} satisfies TranslationFragment;
