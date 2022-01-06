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
  url = 'https://projects-management-itbs.herokuapp.com';
  getClients() {
    return this
      .http
      .get(`${this.url}/api/clients/getAllclients`);
  }
  addClients(newClient){
    return this
      .http
      .post(`${this.url}/api/clients/addClient`,{newClient})     
      .subscribe(()=>{  
        console.log("Added");  
    });
  }
  deleteClients(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/clients/deleteClient/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
  updateClients(id:string,clientUpdated) {
    return this
      .http
      .patch(`${this.url}/api/clients/updateClient/`+id,{clientUpdated})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }
}
