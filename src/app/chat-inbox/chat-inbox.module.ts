import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { ChatInboxComponent } from "./chat-inbox.component";

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        PerfectScrollbarModule
    ],
    declarations: [
        ChatInboxComponent
    ]
})
export class ChatInboxModule { }