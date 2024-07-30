# NumoUiWeb

This project contains:

-   Numo UI Web component library;
-   Numo UI Web storybook.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Numo UI Web component library

The library contains [Angular](https://angular.dev/overview) components intended for use in Numo services, on desktop clients.

To build the library, use `npm run build`. The build artifacts will be stored in the `dist/` directory.

All library contents are located under `projects/ngx-ui-web/src/lib/`.

## Numo UI Web storybook

This projects contains a [Storybook](https://storybook.js.org) demonstrating the components of the Numo UI Web library.

To build the storybook, use `npm run build-storybook`.

To run the storybook instance locally, use `npm run storybook`. The storybook will be available at http://localhost:6006/. While running, you can edit both the library components and stories and storybook will update on the fly.

The storybook configuration is located under `projects/ngx-ui-web/.storybook/`.

The storybook stories are located under `projects/ngx-ui-web/src/stories/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running unit tests

Run `npm run test` to execute unit tests via [Jest](https://jestjs.io).
