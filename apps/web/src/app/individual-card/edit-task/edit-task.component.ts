import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterModule, Routes } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'nxlp-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Work', 'Personal', 'Important', 'Family'];
  
  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  screenWidth: any = window.screen.width;
  constructor(public taskService: TaskService, private router: Router) { 
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tags: string | null) => tags ? this._filter(tags) : this.allTags.slice()));
  }

  ngOnInit(): void {
  }

  editTask() {
    let taskNameX = document.querySelector('.taskName') as HTMLInputElement;
    let thumbnailX = document.querySelector('.thumbnail') as HTMLInputElement;
    let descriptionX = document.querySelector('.description') as HTMLInputElement;
    let dueDateX = document.querySelector('.dueDate') as HTMLInputElement;
    let notesX = document.querySelector('.notes') as HTMLInputElement;
    let required = document.querySelector('.required') as HTMLElement;

    let taskName = taskNameX.value;
    let thumbnail = thumbnailX.value;
    let description = descriptionX.value;
    let labels = this.tags;
    let dueDate = dueDateX.value;
    let notes = notesX.value;
    let id = this.task[0].id;
    let regex = /.*\S+.*/;

    if(regex.test(taskName)){
      this.taskService.editTask(id, taskName, thumbnail, description, labels, dueDate, notes);
      taskNameX.style.border = '#EAEDF3';
      required.style.display = 'none';
      this.router.navigateByUrl('/individualCard');
      return;
    } else {
      taskNameX.style.border = 'red solid';
      required.style.display = 'inline';
    }
  }

  deleteTask() {
    if (this.ticker == 0) {
      this.taskService.deleteTask();
    } else if (this.ticker == 1) {
      this.taskService.deleteCompletedTask();
    }
  }

  get taskList() {
    return this.taskService.getTaskList();
  }

  get task() {
   return this.taskService.returnIndividualTask();
  }

  get ticker() {
    return this.taskService.getTicker();
  }

  //Angular Material 'Chip' code below
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
      //Add
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagsCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
