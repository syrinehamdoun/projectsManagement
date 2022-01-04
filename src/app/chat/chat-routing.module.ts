import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

import { ChatComponent } from './chat.component';

const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
        data: {
            title: 'Chat'
        },
        canActivate: [AuthGuard],
        children: [
            { path: ':chatWith', component: ChatComponent },
            { path: '**', redirectTo: '/chat/chat-room', pathMatch: 'full' }
          ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRoutingModule { }

export const routedComponents = [ChatComponent];