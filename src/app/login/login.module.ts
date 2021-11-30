import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from "./login-routing.module";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";

import { LoginComponent } from "./login.component";


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule        
    ],
    declarations: [
        ErrorPageComponent,
        LoginComponent,
    ]
})
export class LoginModule { }
