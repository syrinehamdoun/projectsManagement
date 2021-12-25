
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from "./login-routing.module";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";

import { LoginComponent } from "./login.component";

export class user{
    constructor(
        public username,
        public admin,
        public password,
        public email,
        public phone,
        public address,
        public city,
        public state,
        public country,
        public createdAt,
        public updatedAt,

    ){}

}
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule        
    ],
    declarations: [
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginComponent,
      
    ]
})
export class LoginModule { }
