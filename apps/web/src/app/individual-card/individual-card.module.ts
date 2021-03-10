import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCardComponent } from './individual-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'individualCard', component: IndividualCardComponent },
  { path: 'editTask', component: EditTaskComponent }
];

@NgModule({
  declarations: [IndividualCardComponent, EditTaskComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatChipsModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatInputModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndividualCardModule { }
