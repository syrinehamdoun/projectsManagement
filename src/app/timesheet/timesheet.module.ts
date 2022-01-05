import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TimesheetRoutingModule } from "./timesheet-routing.module";

import { TimesheetComponent } from "./timesheet.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        TimesheetRoutingModule,
        FormsModule
    ],
    declarations: [
        TimesheetComponent       
    ]
})
export class TimesheetModule { }