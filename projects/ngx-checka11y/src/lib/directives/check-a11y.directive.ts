import { AfterViewInit, Directive, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare const require: any;

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
      this.addChecka11yStyle();
    }
  }

  addChecka11yStyle(): void {
    const checka11yCss = require('node_modules/checka11y-css/checka11y.css');
    const style: HTMLElement = this.document.createElement('style');
    style.innerHTML = `${checka11yCss.default}`;
    this.document.head.appendChild(style);
  }
}
