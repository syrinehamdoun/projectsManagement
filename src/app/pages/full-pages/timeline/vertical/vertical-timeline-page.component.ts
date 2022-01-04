import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { PostService } from './posts.service';
import { HttpClient } from '@angular/common/http';

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

    constructor(private http: HttpClient,private postService: PostService) {
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
 

}