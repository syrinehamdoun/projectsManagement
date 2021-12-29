import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,  private router: Router) { }
  url = 'http://localhost:5000';
  getUsers() {
    return this
      .http
      .get(`${this.url}/api/users/`);
  }
  addUsers(newUser){
    console.log(newUser);
    return this
      .http
      .post(`${this.url}/api/users/register`,{newUser})     
      .subscribe(()=>{  
        console.log("Added");  
    });
  }
  deleteUsers(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/users/deleteUser/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
  /*updateUsers(id:string,clientUpdated) {
    return this
      .http
      .patch(`${this.url}/api/users/updateClient/`+id,{clientUpdated})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }*/
  
}
