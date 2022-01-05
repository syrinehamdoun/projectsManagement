
import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TaskBoardService } from './taskboard.service';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Task } from './taskboard.model';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent {

  @ViewChild('todoTitle', {static: false}) titleInputRef: ElementRef;
  @ViewChild('todoMessage', {static: false}) messageInputRef: ElementRef;
  @ViewChild('todocreatedOn', {static: false}) createdOnInputRef: ElementRef;
  @ViewChild('todocreatedBy', {static: false}) createdByInputRef: ElementRef;
  @ViewChild('tododeadline', {static: false}) deadlineInputRef: ElementRef;
  @ViewChild('todostatus', {static: false}) statusInputRef: ElementRef;
  @ViewChild('assignedTo', {static: false}) assignedToInputRef: ElementRef;

  BAG = "task-group";

  tasks: Task[];
  
  todo: Task[];
  inProcess: Task[];
  backLog: Task[];
  completed: Task[];
  res:any;
  constructor(private dragulaService: DragulaService, private elRef: ElementRef, private taskBoardService: TaskBoardService, private modalService: NgbModal) {
   // this.taskBoardService.getTasks();
    
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
        this.updateTaskStatus(el.getAttribute('task-id'), target.id)
      });
  }
   ngOnInit() {
      this.taskBoardService.getTasks1().subscribe(data => {
        let res=[];
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
            console.log(task)
            res.unshift(task); 
        }
        console.log(res)
        //alert(res)
        this.tasks=res;
        this.loadTasks();
        //alert(this.tasks)
      })
     //this.tasks = this.taskBoardService.tasks;
  }
  loadTasks(){
    this.taskBoardService.getTasks1().subscribe(data => {
      let res=[];
      for(var i=0 ;i< Object.keys(data).length;i++)
      {
          let task: Task = {
          taskId: data[i]._id,
          id :data[i]._id,
          taskTitle: data[i].title,
          taskMessage: data[i].description,
          createdOn:  new Date(data[i].date_creation).toDateString(),
          createdBy: new Date(data[i].createdBy).toDateString(),
          deadline : data[i].deadline,
          assignedTo: data[i].assignedTo,
          status: data[i].status
          }
          console.log(task)
          res.unshift(task); 
      }
      console.log(res)
      //alert(res)
      this.tasks=res;
      this.getAllTask();
      //alert(this.tasks)
    })
  }
  getAllTask() {
    
    this.todo = this.tasks.filter((task: Task) => task.status === 'New');
    this.inProcess = this.tasks.filter((task: Task) => task.status === 'In-Process');
    this.backLog = this.tasks.filter((task: Task) => task.status === 'Pending');
    this.completed = this.tasks.filter((task: Task) => task.status === 'Completed');
  }

  editTask(id: number) {
    alert(id)
    let task: Task = this.tasks.find(x => x.taskId === id);
    const modalRef = this.modalService.open(CrudModalComponent);
    modalRef.componentInstance.id = id; // should be the id
    modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage ,status:task.status,deadline:task.deadline,createdOn:task.createdOn }; // should be the data

      modalRef.result.then((result) => {
      console.log(result)
      console.log('test')
      let index = this.tasks.indexOf(task);
      task.taskTitle = result.title;
      task.taskMessage = result.message;
      task.createdOn=result.createdOn,
      task.createdBy= result.createdBy,
      task.deadline = result.deadline,
      task.assignedTo=result.assignedTo,
      task.status= result.status
      this.taskBoardService.UpdateTask(task, index,id.toString()).subscribe(data => {
       // this.tasks = data;
        this.loadTasks();
      });

    }).catch((error) => {
      console.log(error);
    });
  }

  updateTaskStatus(id: string, status: string) {
        this.taskBoardService.UpdateStatusTask(status,id).subscribe(data => {
         // this.tasks = data;
          this.loadTasks();
        });
    
  }

  deleteTask(id: number) {
    alert(id)
    this.taskBoardService.deleteTask(id.toString(),true).subscribe(data => {
      this.loadTasks();
    });
  }

  addTask() {
    const modalRef = this.modalService.open(CrudModalComponent, );
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { title: '', message: ''}; // should be the data

    modalRef.result.then((result) => {
      this.taskBoardService.addNewTask(result.title, result.message,result.createdOn,result.createdBy,result.deadline,result.assignedTo,result.status).subscribe(data => {
       //this.taskBoardService.addTask(result.title, result.message,result.createdOn,result.createdBy,result.deadline,result.assignedTo,result.status);
        //=this.tasks = data;
        console.log(data)
        this.loadTasks();
      });
    }).catch((error) => {
      console.log(error);
    });
  }


}
