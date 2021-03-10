import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'logIn',  component: LogInComponent },
];
@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LogInModule { }
