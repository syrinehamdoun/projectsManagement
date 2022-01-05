import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,  private router: Router) { }
  url = 'http://localhost:5000';
  getPosts() {
    return this
      .http
      .get(`${this.url}/api/posts/getAllposts`);
  }
  addPosts(title:string ,description:string){
    return this
      .http
      .post(`${this.url}/api/posts/addPost`,{title:title ,description:description})     
      .subscribe(()=>{  
        console.log("Added");  
    });
  }
  deletePosts(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/posts/deletepost/`+id,{deleted:deleted})
      .subscribe(()=>{  
        console.log("Deleted");  
    }); 
  }
  updatePosts(id:string,postUpdated) {
    return this
      .http
      .patch(`${this.url}/api/posts/UpdatePost/`+id,{postUpdated})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }
}
