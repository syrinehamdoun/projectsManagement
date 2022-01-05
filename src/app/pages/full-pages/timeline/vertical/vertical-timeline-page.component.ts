import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { PostService } from './posts.service';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult = '';
    posts:any;
    commenttext: string;
    title: string;
    description :string;

    constructor(private http: HttpClient,private postService: PostService,private modalService: NgbModal) {
    }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        alert(this.title)
        this.postService.addPosts(this.title ,this.description)
        this.closeResult = `Closed with: ${result}`;
        this.ngOnInit()
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
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
        alert(this.commenttext)
         
      }
}