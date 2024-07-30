# @numo/ngx-ui-web: Numo frontend component library

This library contains [Angular](https://angular.dev/overview) components intended for use in Numo services, on desktop clients,
and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Usage notes

Because this library delivers components with no compiled CSS, your project will need to do all the work to produce the CSS required by the browser.

Install @numo/ngx-ui-web, autoprefixer and postcss (if not already installed):

```console
npm install -P @numo/ngx-ui-web
npm install -D postcss autoprefixer
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-ui-web`.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building the library with `npm run build`, go to the dist folder `cd dist/ngx-ui-web` and run `npm publish`.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).
