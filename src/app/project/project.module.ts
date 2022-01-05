import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProjectRoutingModule } from "./project-routing.module";

import { ProjectComponent } from "./project.component";
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { CustomFormsModule } from 'ng2-validation';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        FormsModule,
        ArchwizardModule,
        CustomFormsModule,
        MatchHeightModule,
        NgbModule,
        Ng2SmartTableModule
    ],
    declarations: [
        ProjectComponent ,
        

    ]
})
export class ProjectModule { }