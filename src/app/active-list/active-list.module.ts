import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveListComponent } from './active-list.component';

@NgModule({
  declarations: [ActiveListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ActiveListComponent
  ]
})
export class ActiveListModule { }
