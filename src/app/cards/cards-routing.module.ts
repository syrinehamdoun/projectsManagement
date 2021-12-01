import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicCardsComponent } from "./basic/basic-cards.component";
import { AdvancedCardsComponent } from "./advanced/advanced-cards.component";

const routes: Routes = [
    {
        path: '',
        children: [{
            path: 'basic',
            component: BasicCardsComponent
        }, {
            path: 'advanced',
            component: AdvancedCardsComponent
        }
        ]
    }
];
/*const routes: Routes = [
    {
        path: 'project',
        component: BasicCardsComponent,
        data: {
            title: 'Project Management'
        },

    }
];*/
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CardsRoutingModule { }
