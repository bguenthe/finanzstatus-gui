# FinanzstatusGui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Setup
Run `sudo npm install primeng --save`
Run `sudo npm install font-awesome --save`
Run `sudo npm install --save @angular/material @angular/cdk`
Run `sudo npm install typescript`

Run `sudo npm install`

Es gibt aber immer noch Fehler. Ich habe einfach 3 mal npm install aufgerufen, dann war er durch. Was weiß ich!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve -host 0.0.0.0 --proxy-config proxy.conf.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Put to production (Docker)
Auf einem Raspberry PI (ich habe den 3'er genommen) das raspberry docker image https://blog.hypriot.com/ installieren 

Das dist Verzeichnis auf den Raspberry kopieren (ich habe es in /home/pirate/finanzstaus-gui gelegt

Dockerfile unter `/home/pirate/finanzstaus-gui` anlegen mit Inhalt

`FROM arm32v7/nginx:latest`

`COPY dist /usr/share/nginx/html`

`docker build -t  finanzstaus-gui .`
`docker run --name finanzstaus-gui -d -p 80:80 finanzstaus-gui`
