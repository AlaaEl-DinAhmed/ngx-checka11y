import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckA11yModule } from 'projects/ngx-checka11y/src/public-api';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckA11yModule],
  providers: [{ provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
