import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckA11yDirective } from 'projects/ngx-checka11y/src/public-api';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, CheckA11yDirective],
  imports: [BrowserModule],
  providers: [{ provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
