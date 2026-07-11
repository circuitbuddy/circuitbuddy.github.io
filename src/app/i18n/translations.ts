import { TranslationFragment } from './types';
import { navTranslations } from '../sections/top-nav/top-nav.i18n';
import { heroTranslations } from '../sections/hero-section/hero-section.i18n';
import { aboutTranslations } from '../sections/about-section/about-section.i18n';
import { productsTranslations } from '../sections/products-section/products-section.i18n';
import { contactTranslations } from '../sections/contact-us-section/contact-us-section.i18n';
import { footerTranslations } from '../app.i18n';
import { multivibratorTranslations } from '../pages/circuit/multivibrator/multivibrator.i18n';

export { LANGS } from './types';
export type { Lang } from './types';

/**
 * Every component's translation fragment, merged into one lookup: key → { en, si }.
 *
 * To add a new component's copy: create a `<name>.i18n.ts` next to the
 * component (see the existing `*.i18n.ts` files), then import and spread it here.
 * Keys must be unique across fragments — a later spread would silently override
 * an earlier one.
 *
 * NOTE: The Sinhala (si) copy is a best-effort translation — please have a
 * native speaker review it before publishing.
 */
export const TRANSLATIONS: TranslationFragment = {
  ...navTranslations,
  ...heroTranslations,
  ...aboutTranslations,
  ...productsTranslations,
  ...contactTranslations,
  ...footerTranslations,
  ...multivibratorTranslations,
};
