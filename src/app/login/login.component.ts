import { LoginService } from './login.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {ChatService} from   'app/chat/chat.service'
import { Login } from './login';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})



export class LoginComponent  {




    @ViewChild('f', {static: false}) loginForm: NgForm;

    constructor(private router: Router,private LoginService: LoginService,private chatService:ChatService,
        private route: ActivatedRoute) { }
        userName: string=''
        password: string=''

    // On submit button click
    onSubmit() {
        console.log("submit")
        const login = {
            userName : this.userName,
            password : this.password
          }
       
        //this.loginForm.reset();
            const  result=this.LoginService.loginUser(login)
        this.chatService.connect(login.userName);
        this.router.navigate(['/chat']);
        
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
