import { Injectable, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LANGS, Lang } from './types';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'cb-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly doc = inject(DOCUMENT);

  /** The active language. Reading it in a template makes that view react to changes. */
  readonly lang = signal<Lang>(this.readInitialLang());

  constructor() {
    // Keep <html lang="…"> in sync so the browser and CSS font rules follow the language.
    effect(() => {
      const lang = this.lang();
      this.doc.documentElement.setAttribute('lang', lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // localStorage may be unavailable (private mode) — ignore.
      }
    });
  }

  /** Translate a key for the active language, falling back to English then the key itself. */
  t(key: string): string {
    const entry = TRANSLATIONS[key];
    return entry?.[this.lang()] ?? entry?.en ?? key;
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.set(this.lang() === 'en' ? 'si' : 'en');
  }

  private readInitialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && LANGS.includes(saved)) return saved;
    } catch {
      // ignore
    }
    return 'en';
  }
}
