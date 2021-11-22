import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ClientComponent } from "./client.component";

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingModule,
        Ng2SmartTableModule

    ],
    declarations: [
        ClientComponent       
    ]
})
export class ClientModule { }