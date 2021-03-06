import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChatRoutingModule } from "./chat-routing.module";

import { ChatComponent } from "./chat.component";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActiveListModule } from 'app/active-list/active-list.module';
import { MessageModule } from 'app/message/message.module';

@NgModule({
    imports: [
        CommonModule,
        ChatRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        PerfectScrollbarModule,
        FormsModule,
        ActiveListModule,
        MessageModule,
        ReactiveFormsModule
    ],
    declarations: [
        ChatComponent,
    ]
})
export class ChatModule { }
