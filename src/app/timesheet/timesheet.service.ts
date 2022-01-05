import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,  private router: Router) { }
  url = 'http://localhost:5000';
  getTimesheets() {
    return this
      .http
      .get(`${this.url}/api/timesheets/getAllTimesheets`);
  }
  addTimesheet(newTimesheet){
    return this
      .http
      .post(`${this.url}/api/timesheets/addTimesheet`,{newTimesheet})     
      .subscribe(()=>{  
        console.log("Added");  
    });
  }

  deleteTimesheet(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/timesheets/deleteTimesheet/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
  updateProjects(id:string,updateTimesheet) {
    return this
      .http
      .patch(`${this.url}/api/timesheets/updateTimesheet/`+id,{updateTimesheet})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }

}

