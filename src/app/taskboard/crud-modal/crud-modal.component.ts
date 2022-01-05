import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'app/user/user.service';

@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})
export class CrudModalComponent implements OnInit{

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  users: any ;
  usersto :any;
  constructor(
    private userService: UserService,
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users=data;
      this.usersto=data;
    
    });
    this.buildItemForm(this.data);
    if(this.id === 0) {
      this.ModalTitle = "Add Task";
    }
    else {
      this.ModalTitle = "Edit Task";
    }
  }

  private buildItemForm(item) {
    this.myForm = this.formBuilder.group({
      title: [item.title || '', Validators.required],
      message: [item.message || '', Validators.required],
      createdOn: [item.createdOn || '', Validators.required],
      createdBy: [item.createdBy || '', Validators.required],
      deadline: [item.deadline || '', Validators.required],
      assignedTo: [item.assignedTo || '', Validators.required],
      status: [item.status || '', Validators.required],

    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
