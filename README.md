<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/AlaaEl-DinAhmed/ngx-checka11y?style=social) ![npm](https://img.shields.io/npm/v/ngx-checka11y) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-checka11y) ![npm](https://img.shields.io/npm/dw/ngx-checka11y)

</div>

---

# ngxChecka11y

An Angular package wrapping [Checka11y.css](https://github.com/jackdomleo7/Checka11y.css "Checka11y.css") during the development process to quickly highlight some common accessibility errors and warnings that can be easily and quickly rectified.

## Installation

Using npm

`npm i checka11y-css@1.2.0 --save-dev`

`npm install ngx-checka11y --save-dev`

Using yarn

`yarn add checka11y-css@1.2.0 --dev`

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

Add ngxCheckA11y directive to whatever HTML element

or

```javascript
<ng-container ngxCheckA11y></ng-container>
```

in the app.component.html or whatever component you want.
