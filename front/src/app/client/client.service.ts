import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,  private router: Router) { }
  url = 'http://localhost:5000';
  getClients() {
    return this
      .http
      .get(`${this.url}/api/clients/getAllclients`);
  }
  addClients(nom,prenom,phone,mail){
    return this
      .http
      .post(`${this.url}/api/clients/addClient`,{nom:nom,prenom:prenom,mail:mail,phone:phone},this.httpOptions);
  }
  deleteClients(id:string,deleted) {
    console.log(deleted)
    return this
      .http
      .patch(`${this.url}/api/clients/deleteClient/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
}
