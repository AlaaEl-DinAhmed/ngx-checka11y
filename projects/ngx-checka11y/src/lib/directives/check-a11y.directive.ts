import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, Inject } from '@angular/core';

// @dynamic
@Directive({
  selector: '[ngxCheckA11y]',
})
export class CheckA11yDirective implements AfterViewInit {
  constructor(
    @Inject('environment') private environment: { production: boolean },
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    if (!this.environment.production) {
      this.checkA11yLinkInit();
    }
  }

  checkA11yLinkInit(): void {
    const styleLink: HTMLElement = this.document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/checka11y-css/checka11y.css'
    );
    this.document.head.appendChild(styleLink);
  }
}
