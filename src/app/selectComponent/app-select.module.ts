import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppSelectComponent } from './app-select.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppSelectComponent
    ],
    bootstrap: [ AppSelectComponent ]
})
export class AppSelectModule { }