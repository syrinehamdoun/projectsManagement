import { NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientService } from '../client/client.service';
import * as tableData from '../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2" ></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    columns: {
      
      description: {
        title: 'Description',
      },
     
      date_debut: {
        title: 'Date start',
      },
      date_fin: {
        title: 'Date Finsh',
      },
    },
  };

  @ViewChild('f' , {static: false}) projectForm :NgForm;
  constructor(private http: HttpClient,private clientService: ClientService ,private projectService: ProjectService) {
  }
  source: any;
  filterSource: any;
  alertSource: any;
  clients: any ;
  projects:any;
  description:any ;
  client:any;
  remarque:any;
  type:any;
  status:any;
  date_debut:any;
  date_fin:any;

  ngOnInit() {
    this.clientService.getClients().subscribe(data => {
      this.clients=data
     
     /* for(var i=0 ;i< Object.keys(data).length;i++)
      {
        if (data[i].deleted==true) {
          this.clients.splice(i);
        }
      }*/
       
           
    });
    this.projectService.getProjects().subscribe(data => {
      this.projects=data
   /* for(var i=0 ;i< Object.keys(data).length;i++)
    {
      if (data[i].deleted==true) {
        this.clients.splice(i);
      }
    }*/
    this.filterSource = this.projects;
    this.source = this.projects;
    this.alertSource=this.projects;  
         
  });
  }
  onSearch(query: string = '') {
    alert('hello')
    this.source.setFilter([
        // fields we want to inclue in the search
        {
            field: 'id',
            search: query,
        },
        {
            field: 'description',
            search: query,
        },
        {
            field: 'date_fin',
            search: query,
        },
        {
            field: 'date_debut',
            search: query,
        },
        {
            field: 'status',
            search: query,
        },
       
    ],);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
}
  onSubmit(){
    //alert("submit")
    this.projectService.addProject({client:this.client,remarque:this.remarque,description:this.description,type:this.type,
      status:parseInt(this.status),date_debut:this.date_debut,date_fin:this.date_fin
    })
  }
}
