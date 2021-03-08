import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  { path: 'addTask',  component: AddTaskComponent },
];

@NgModule({
  declarations: [ AddTaskComponent ],
  imports: [
    CommonModule, RouterModule.forChild(routes),  MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatInputModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatInputModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule ]
})
export class AddTaskModule { }
