import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, Inject } from '@angular/core';

@Directive({
  selector: '[appCheckA11y]',
})
export class CheckA11yDirective implements AfterViewInit {
  environment: any;
  constructor(
    @Inject('environment')
    environment: any,
    @Inject(DOCUMENT) private document: any
  ) {
    this.environment = environment;
  }

  ngAfterViewInit(): void {
    if (!this.environment.production) this.checkA11yLinkInit();
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
