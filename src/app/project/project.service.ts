import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,  private router: Router) { }

  url = 'http://localhost:5000';
  getProjects() {
    return this
      .http
      .get(`${this.url}/api/projects/getAllprojects`);
  }
  addProject(newProject){
    return this
      .http
      .post(`${this.url}/api/projects/addProject`,{newProject})     
      .subscribe(()=>{  
        console.log("Added");  
    });
  }

  deleteProject(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/projects/deleteProject/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
  updateProjects(id:string,updateProject) {
    return this
      .http
      .patch(`${this.url}/api/projects/updateProject/`+id,{updateProject})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }


}



