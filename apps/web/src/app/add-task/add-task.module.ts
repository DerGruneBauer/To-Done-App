import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task.component';

const routes: Routes = [
  { path: 'addTask',  component: AddTaskComponent },
];

@NgModule({
  declarations: [ AddTaskComponent ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AddTaskModule { }
