import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckA11yDirective } from './directives/check-a11y.directive';

@NgModule({
  declarations: [CheckA11yDirective],
  imports: [BrowserModule],
  exports: [CheckA11yDirective],
})
export class CheckA11yModule {}
