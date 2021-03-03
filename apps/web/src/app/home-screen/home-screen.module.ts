import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualCardComponent } from './individual-card/individual-card.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  // { path: 'individualCard', component: IndividualCardComponent }
];


@NgModule({
  declarations: [DashboardComponent, IndividualCardComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HomeScreenModule { }
