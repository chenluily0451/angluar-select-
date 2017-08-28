// import { Component } from '@angular/core';
//
// @Component({
//     selector: 'my-app',
//     templateUrl: './app/app.component.html'
// })
// export class AppComponent { }


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);