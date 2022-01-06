import { id } from '@swimlane/ngx-charts/release/utils';
import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { WebRequestService } from '../web-request.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class TaskBoardService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    url = 'https://projects-management-itbs.herokuapp.com';
    public tasks: Task[] = [];

    constructor(private http: HttpClient,  private router: Router ,private webReqService: WebRequestService) { 
       //this.getTasks() ;
    }
    getTasks() {
         let observableReq=this.http.get(`${this.url}/api/taches/getAlltaches`).subscribe(data => {
            for(var i=0 ;i< Object.keys(data).length;i++)
            {
                let task: Task = {
                taskId: data[i]._id,
                id :data[i]._id,
                taskTitle: data[i].title,
                taskMessage: data[i].description,
                createdOn: data[i].date_creation,
                createdBy: data[i].createdBy,
                deadline : data[i].deadline,
                assignedTo: data[i].assignedTo,
                status: data[i].status
                }
              this.tasks.unshift(task);
            }
            alert(this.tasks)
          })
    }

    getTasks1(): any {
      return this.http.get(`${this.url}/api/taches/getAlltaches`)
      /*return this
        .http
        .get(`${this.url}/api/taches/getAlltaches`);*/
  }
   


   addNew(title: string, message: string,createdOn : string,createdBy: string,deadline: string,assignedTo: string,status:string) {
        let task: Task = {
            taskId: Math.round(Math.random() * 10000000000),
            id :"",
            taskTitle: title,
            taskMessage: message,
            createdOn: createdOn,
            createdBy: createdBy,
            deadline : deadline,
            assignedTo: assignedTo,
            status: status
        }
        this.webReqService.post('lists',{title});

        this.tasks.unshift(task);
    return of(this.tasks.slice()).pipe(delay(100));
        
    }

    addNewTask(title: string, message: string,createdOn : string,createdBy: string,deadline: string,assignedTo: string,status:string){
   
        let task: Task = {
            taskId: Math.round(Math.random() * 10000000000),
            id :"",
            taskTitle: title,
            taskMessage: message,
            createdOn: createdOn,
            createdBy: createdBy,
            deadline : deadline,
            assignedTo: assignedTo,
            status: status
        }
        this.webReqService.post('lists',{title});
        this.tasks.unshift(task);
        return this
        .http
        .post(`${this.url}/api/taches/addTache/`,{title:title,description:message,status:status,date_creation:createdOn,assignedTo:assignedTo,createdBy:createdBy,deadline:deadline})     
      
  }




  updateProjects(id:string,updateProject) {
    return this
      .http
      .patch(`${this.url}/api/projects/updateProject/`+id,{updateProject})
      .subscribe(()=>{  
        console.log("Updated");  
    }); 
  }
    UpdateTask(task: Task, index: number,id:string) {
        // this.tasks.splice(index, 1, task);
      alert(task.taskTitle)
      return this
        .http
        .patch(`${this.url}/api/taches/updateTache/`+id,{title:task.taskTitle,description:task.taskMessage,status:task.status,date_creation:task.createdOn,assignedTo:task.assignedTo,createdBy:task.createdBy,deadline:task.deadline})     
      
        /*this.tasks = this.tasks.map(i => {
            if(i.taskId === task.taskId) {
              return Object.assign({}, i, task);
            }
            return i;
          })
            return of(this.tasks.slice()).pipe(delay(1000));*/
         
          
    }
    UpdateStatusTask(status :string ,id :string) {
      // this.tasks.splice(index, 1, task);
          return this
          .http
          .patch(`${this.url}/api/taches/UpdateStatustache/`+id,{status:status})
          
        
  }

    deleteTask(id:string,deleted) {
    return this
      .http
      .patch(`${this.url}/api/taches/deletetache/`+id,{deleted:deleted});
      
  }
    deleteTask1(index: number) {
        this.tasks.splice(index, 1);
        return of(this.tasks.slice()).pipe(delay(100));
    }

}