import { TranslationFragment } from '../../../i18n/types';

export const multivibratorTranslations = {
  'circuit.back': { en: 'Back', si: 'ආපසු' },
  'circuit.multivibrator.title': { en: 'Multivibrator Circuit', si: 'මල්ටිවයිබ්‍රේටර් පරිපථය' },
  'circuit.multivibrator.p1': {
    en: 'An <b class="text-buddy-yellow">astable multivibrator</b> with two LEDs — the classic two-transistor circuit that never settles down. It has no stable state, so it flips back and forth on its own, switching the two LEDs on and off in a steady, alternating blink.',
    si: 'LED දෙකක් සහිත <b class="text-buddy-yellow">අස්ථායී මල්ටිවයිබ්‍රේටරයක්</b> — කිසිදා නිශ්චල නොවන සම්භාව්‍ය ට්‍රාන්සිස්ටර දෙකේ පරිපථය. එයට ස්ථායී තත්ත්වයක් නොමැති නිසා, එය තනිවම ඉදිරියට හා පසුපසට මාරු වෙමින්, LED දෙක ස්ථාවර, විකල්ප ලෙස දැල්වෙමින් හා නිවෙමින් පවතී.',
  },
  'circuit.multivibrator.p2': {
    en: 'The rhythm comes from two capacitors charging and discharging in turn: each one holds a transistor off just long enough for its partner to light up, then they swap. It\'s the friendliest way to see timing, feedback, and transistor switching in action — the "hello world" of hands-on electronics.',
    si: 'රිද්මය පැමිණෙන්නේ කැපෑසිටර දෙකක් වාරානුක්‍රමයෙන් ආරෝපණය හා විසර්ජනය වීමෙනි: එක් එක් කැපෑසිටරය එහි සහකරු දැල්වීමට තරම් වේලාවක් ට්‍රාන්සිස්ටරයක් නිවා තබා ගනී, පසුව ඒවා මාරු වේ. කාලනියමය, ප්‍රතිපෝෂණය, සහ ට්‍රාන්සිස්ටර මාරුවීම ක්‍රියාවෙන් දැකීමට ඇති හොඳම ක්‍රමය එයයි — ප්‍රායෝගික ඉලෙක්ට්‍රොනික්ස් හි "hello world" එක.',
  },
} satisfies TranslationFragment;
