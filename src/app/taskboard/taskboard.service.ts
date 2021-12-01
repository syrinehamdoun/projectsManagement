import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WebRequestService } from '../web-request.service';


@Injectable()
export class TaskBoardService {

    constructor(private webReqService: WebRequestService) { }

    public tasks: Task[] = [
        new Task(
            4,
            'checklist',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'ffff',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            5,
            'Navigation',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'ffff',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            6,
            'Bootstrap 4',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'ffff',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            7,
            'Assessment',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'ffff',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            8,
            'Schedule',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'ffff',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            9,
            'Unit tests',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'ffff',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            10,
            'Angular 5',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'ffff',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            11,
            'Fields',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'ffff',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            12,
            'Task board',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'ffff',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed')
    ];


   addNewTask(title: string, message: string,createdOn : string,createdBy: string,deadline: string,assignedTo: string,status:string) {
        let task: Task = {
            taskId: Math.round(Math.random() * 10000000000),
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
    UpdateTask(task: Task, index: number) {
        // this.tasks.splice(index, 1, task);
        this.tasks = this.tasks.map(i => {
            if(i.taskId === task.taskId) {
              return Object.assign({}, i, task);
            }
            return i;
          })
          return of(this.tasks.slice()).pipe(delay(1000));
    }
    deleteTask(index: number) {
        this.tasks.splice(index, 1);
        return of(this.tasks.slice()).pipe(delay(100));
    }

}