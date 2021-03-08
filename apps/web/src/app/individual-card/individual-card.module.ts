import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCardComponent } from './individual-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: 'individualCard', component: IndividualCardComponent },
  { path: 'editTask', component: EditTaskComponent }
];


@NgModule({
  declarations: [IndividualCardComponent, EditTaskComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class IndividualCardModule { }
