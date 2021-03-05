import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { TaskService } from '../task.service';
import { Task } from '../task';


@Component({
  selector: 'nxlp-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  screenWidth: any = window.screen.width;
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    
  }

  addTask() {
    let taskNameX = document.querySelector('.taskName') as HTMLInputElement;
    let thumbnailX = document.querySelector('.thumbnail') as HTMLInputElement;
    let descriptionX = document.querySelector('.description') as HTMLInputElement;
    let labelsX = document.querySelector('.labels') as HTMLInputElement;
    let dueDateX = document.querySelector('.dueDate') as HTMLInputElement;
    let notesX = document.querySelector('.notes') as HTMLInputElement;

    let taskName = taskNameX.value;
    let thumbnail = thumbnailX.value;
    let description = descriptionX.value;
    let labels = labelsX.value;
    let dueDate = dueDateX.value;
    let notes = notesX.value;

   this.taskService.addTask(taskName, thumbnail, description, labels, dueDate, notes);
  }

}
