import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, inject, input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Smoothly scrolls to an element by id — the replacement for `href="#section"`
 * anchors, which can't be used under hash-based routing (they'd collide with
 * the router's use of the URL hash).
 *
 * If the target isn't on the current page (e.g. a landing-page section while on
 * a sub-route), it navigates home first, then scrolls once the section renders.
 *
 * Usage: `<a href="#" appScrollTo="about">About</a>`
 */
@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);

  /** Id of the element to scroll to. */
  readonly appScrollTo = input.required<string>();

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const id = this.appScrollTo();

    if (this.doc.getElementById(id)) {
      this.scrollWhenReady(id);
    } else {
      // Section lives on the home page — go there, then scroll once it renders.
      this.router.navigateByUrl('/').then(() => this.scrollWhenReady(id));
    }
  }

  /** Scroll to the element, retrying across a few frames while it renders. */
  private scrollWhenReady(id: string, attempts = 0): void {
    const el = this.doc.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (attempts > 20) return;
    requestAnimationFrame(() => this.scrollWhenReady(id, attempts + 1));
  }
}
