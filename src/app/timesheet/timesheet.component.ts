import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientService } from 'app/client/client.service';
import { ProjectService } from 'app/project/project.service';
import { TimesheetService } from './timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  constructor(private http: HttpClient,private clientService: ClientService ,private timesheetService: TimesheetService,private projectService: ProjectService) {
  }
  employee: any;
  project: any;
  date: any;
  projects: any ;
  starttime:any;
  description:any ;
  endtime:any;
  ngOnInit() {
    this.employee=JSON.parse(localStorage.getItem('currentUser')).userName;
    this.projectService.getProjects().subscribe(data => {
      this.projects=data
      for(var i=0 ;i< Object.keys(data).length;i++)
      {
        if (data[i].deleted==true) {
          this.projects.splice(i);
        }
      }       
           
    });
}
onCancel(){
  this.project='';
  this.description='';
  this.date='';
  this.endtime='';
  this.starttime='';
  this.ngOnInit();
  
}
onSubmit(){
  this.timesheetService.addTimesheet({employee:this.employee,project:this.project,description:this.description,
    date:this.date,endtime:this.endtime,starttime:this.starttime,
  })

  /*this.project='';
  this.description='';
  this.date='';
  this.endtime='';
  this.starttime='';*/
  this.ngOnInit();
  
}
}
