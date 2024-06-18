# @numo/ngx-ui-web: Numo frontend component library

This library contains [Angular](https://angular.dev/overview) components intended for use in Numo services, on desktop clients,
and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

This library relies on Tailwind CSS for styling. See [Tailwind documentation](https://tailwindcss.com/docs/) for more info on how to make use of its classes and/or customization.

## Usage notes

In order to properly use the components provided by this library, your project needs to have Tailwind CSS installed and configured (see [documentation](https://tailwindcss.com/docs/guides/angular) for detailed instructions).
Because this library delivers components with no compiled CSS, your project will need to do all the work to produce the CSS required by the browser.

Install @numo/ngx-ui-web, along with tailwindcss, autoprefixer and postcss (if not already installed):

```console
npm install -P @numo/ngx-ui-web
npm install -D tailwindcss postcss autoprefixer
```

Then modify your project's `tailwind.config.js` file to include `@numo/ngx-ui-web` components in the content searched for Tailwind classes:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/@numo/ngx-numo-ui-web/**/*.{html,ts,js,mjs}"
    ],
    ...
};
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
