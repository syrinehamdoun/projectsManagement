import { value } from './../shared/data/dropdowns';
import { UserService } from './user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import * as tableData from '../shared/data/smart-data-table';
import { stringify } from 'querystring';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class UserComponent implements OnInit {
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
      
      username: {
        title: 'User Name',
      },
     
      email: {
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
Users: any ;
userName:any ;
userLastName:any;
userEmail:any;
userWork:any;
userStreet:any;
userCity:any;
userState:any;
userZip:any;
userPhone:any;
userPassword:any;
userConfirmPassword:any;
userCountry:any;




  constructor(private http: HttpClient,private UserService: UserService) { }

 
  filtersettings = tableData.filtersettings;
  alertsettings = tableData.alertsettings;
  street: string=''
  loadData(){
    this.UserService.getUsers().subscribe(data => {
      console.log(data)
        this.Users=data
       /* for(var i=0 ;i< Object.keys(data).length;i++)
        {
          if (data[i].deleted==true) {
            this.clients.splice(i);
          }
        }*/
        this.filterSource = this.Users;
        this.source = this.Users;
        this.alertSource=this.Users;  
      });
  }
  ngOnInit() {
    //this.lastname.value="emna";
    this.loadData();
   
  }

  
  onSubmit(){
    this.UserService.addUsers({username:this.userName,email: this.userEmail,
      phone: this.userPhone, password:this.userPassword,city:this.userCity,admin:0,state:this.userState,
      zip:this.userZip,country:this.userCountry,role:parseInt(this.userWork)
    });
    this.loadData();
    console.log({username:this.userName,email: this.userEmail,phone: this.userPhone, password:this.userLastName});
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
          this.UserService.deleteUsers(event.data._id,event.data.deleted);
      } else {
          event.confirm.reject();
      }
  }


  //  For confirm action On Save
  onSaveConfirm(event) {
      if (window.confirm('Are you sure you want to save?')) {
        event.confirm.resolve(event.newData);
        event.newData.phone=parseInt(event.newData.phone);
       // this.clientService.updateClients(event.data._id,event.newData);           
      } else {
          event.confirm.reject();
      }
  }
  private newClient:string[] = [];

  //  For confirm action On Create
  onCreateConfirm(event) {
      if (window.confirm('Are you sure you want to create?')) {
          event.confirm.resolve(event.newData);
          //event.newData.phone=parseInt(event.newData.phone);
          console.log( event.newData)
          
         this.UserService.addUsers(event.newData);
      } else {
          event.confirm.reject();
      }
  }

}
