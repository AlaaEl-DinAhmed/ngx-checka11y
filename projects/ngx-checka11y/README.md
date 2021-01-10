# NgxChecka11y

An Angular package wrapping [Checka11y.css](https://github.com/jackdomleo7/Checka11y.css "Checka11y.css") during the development process to quickly highlight some common accessibility errors and warnings that can be easily and quickly rectified.

## Installation

Using npm

`npm install ngx-checka11y --save-dev`

Using yarn

`yarn add ngx-checka11y --dev`

---

## Usage

> Add CheckA11yModule to your app.module.ts and inject a provider for the environment to be avialable to the ngx-checka11y package.

```javascript
import { CheckA11yModule } from "ngx-checka11y";
import { environment } from "../environments/environment";
```

```javascript
@NgModule({
  imports: [
      ...,
      CheckA11yModule
    ],
  providers: [{ provide: 'environment', useValue: environment }],
})
```

Add `appCheckA11y` directive to whatever `html` element

or

`<ng-container appCheckA11y></ng-container>` in `app.component.html` or whatever `component` you want.
