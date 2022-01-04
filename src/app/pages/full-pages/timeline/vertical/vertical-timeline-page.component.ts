import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { PostService } from './posts.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var require: any;
const data: any = require('../../../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-vertical-timeline-page',
    templateUrl: './vertical-timeline-page.component.html',
    styleUrls: ['./vertical-timeline-page.component.scss']
})

export class VerticalTimelinePageComponent implements OnInit {

    posts:any;
    value: string;
    closeResult: string;

    constructor(private http: HttpClient,private postService: PostService,private modalService: NgbModal) {
    }

    ngOnInit() {
        this.postService.getPosts().subscribe(data => {
          this.posts=data
         /* for(var i=0 ;i< Object.keys(data).length;i++)
          {
            if (data[i].deleted==true) {
              this.clients.splice(i);
            }
          }*/
        //   this.filterSource = this.clients;
        //   this.source = this.clients;
        //   this.alertSource=this.clients; 
        console.log(this.posts);       
        });
      }

      public onComment() {
        console.log(this.value);
         
      }
 
       // Open default modal
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
     // This function is used in open
     private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}