import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router, RouterModule, Routes } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'nxlp-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  
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

  addTask() {
    let taskNameX = document.querySelector('.taskName') as HTMLInputElement;
    let thumbnailX = document.querySelector('.thumbnailInput') as HTMLInputElement;
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
    let id = this.taskList.length + 1;
    let regex = /.*\S+.*/;

    if(regex.test(taskName)){
      this.taskService.addTask(id, taskName, thumbnail, description, labels, dueDate, notes);
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
    this.taskService.deleteTask();
  }

  get taskList() {
    return this.taskService.getTaskList();
  }

//Below is for Angular Material 'chip'/tag elements
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
