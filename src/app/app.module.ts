import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppSelectComponent } from './selectComponent/app-select.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AppSelectComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }