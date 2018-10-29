import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        CustomMaterialModule
    ],
    declarations: [
        AppComponent,
        ResetpasswordComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
