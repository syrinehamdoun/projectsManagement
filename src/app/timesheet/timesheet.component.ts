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
  projectname: any;
  date: any;
  clients: any ;
  projects: any ;
  starttime:any;
  description:any ;
  endtime:any;
  ngOnInit() {
    this.employee=JSON.parse(localStorage.getItem('currentUser')).userName;
    this.clientService.getClients().subscribe(data => {
      this.clients=data
      for(var i=0 ;i< Object.keys(data).length;i++)
      {
        if (data[i].deleted==true) {
          this.clients.splice(i);
        }
      }
       
           
    });
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
}
