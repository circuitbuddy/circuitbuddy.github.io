export type Lang = 'en' | 'si';

export const LANGS: readonly Lang[] = ['en', 'si'] as const;

/** One key's text in every supported language. */
export type TranslationEntry = Record<Lang, string>;

/**
 * A component's translation fragment: a dot-namespaced key mapped to its text
 * in each language.
 *
 * Co-locate one of these next to each component as `<name>.i18n.ts`, then
 * register it in `i18n/translations.ts`. Values containing markup (inline
 * <span>/<b> emphasis) are meant to be rendered with `[innerHTML]="'key' | t"`.
 */
export type TranslationFragment = Record<string, TranslationEntry>;
