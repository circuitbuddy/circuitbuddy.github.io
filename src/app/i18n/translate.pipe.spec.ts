import { Component, inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { TRANSLATIONS } from './translations';

@Component({
  imports: [TranslatePipe],
  template: `<span>{{ 'nav.about' | t }}</span>`,
})
class HostComponent {
  readonly i18n = inject(TranslationService);
}

// Compare against the dictionary rather than hard-coded copy so the test stays
// green as translations are edited — what matters here is reactivity.
const EN = TRANSLATIONS['nav.about'].en;
const SI = TRANSLATIONS['nav.about'].si;

describe('TranslatePipe', () => {
  afterEach(() => {
    // The service persists the active language; reset so tests don't leak state.
    try {
      localStorage.clear();
    } catch {
      // ignore
    }
  });

  it('renders the English string by default', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent?.trim()).toBe(EN);
  });

  it('re-renders automatically when the language signal changes (zoneless)', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent?.trim()).toBe(EN);

    // Change the signal only — no manual detectChanges — to prove the impure
    // pipe registers the view as a consumer and CD is scheduled on change.
    fixture.componentInstance.i18n.setLang('si');
    await fixture.whenStable();

    expect(el.textContent?.trim()).toBe(SI);
    expect(SI).not.toBe(EN);
  });
});
