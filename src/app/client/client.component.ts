import { Component, ViewEncapsulation } from '@angular/core';
import * as tableData from '../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { stringify } from 'querystring';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ClientComponent {

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
          nom: {
            title: 'Full Name',
          },
          prenom: {
            title: 'User Name',
          },
          mail: {
            title: 'Email',
          },
          phone: {
            title: 'phone',
          },
        },
      };
    source: any;
    filterSource: any;
    alertSource: any;
    clients: any ;
    constructor(private http: HttpClient,private clientService: ClientService) {
    }
    filtersettings = tableData.filtersettings;
    alertsettings = tableData.alertsettings;

    ngOnInit() {
        this.clientService.getClients().subscribe(data => {
          this.clients=data
         /* for(var i=0 ;i< Object.keys(data).length;i++)
          {
            if (data[i].deleted==true) {
              this.clients.splice(i);
            }
          }*/
          this.filterSource = this.clients;
          this.source = this.clients;
          this.alertSource=this.clients;        
        });
      }

    // And the listener code which asks the DataSource to filter the data:
    onSearch(query: string = '') {
        alert('hello')
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
            {
                field: 'phone',
                search: query,
            },
        ],);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }

    //  For confirm action On Delete
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            event.data.deleted=true;
            this.clientService.deleteClients(event.data._id,event.data.deleted);
        } else {
            event.confirm.reject();
        }
    }


    //  For confirm action On Save
    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
          event.confirm.resolve(event.newData);
          event.newData.phone=parseInt(event.newData.phone);
          this.clientService.updateClients(event.data._id,event.newData);           
        } else {
            event.confirm.reject();
        }
    }
    private newClient:string[] = [];

    //  For confirm action On Create
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.confirm.resolve(event.newData);
            event.newData.phone=parseInt(event.newData.phone);
            this.clientService.addClients(event.newData);
        } else {
            event.confirm.reject();
        }
    }

}
