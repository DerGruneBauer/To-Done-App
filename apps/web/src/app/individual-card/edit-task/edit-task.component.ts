import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { TaskService } from '../../task.service';


@Component({
  selector: 'nxlp-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  screenWidth: any = window.screen.width;
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  editTask() {
    //NEED TO ADD SOME SORT OF REQUIREMENT FOR TASKNAME
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
    let id = this.task[0].id;

   this.taskService.editTask(id, taskName, thumbnail, description, labels, dueDate, notes);
  }

  deleteTask() {
    this.taskService.deleteTask();
  }

  get taskList() {
    return this.taskService.getTaskList();
  }

  get task() {
   return this.taskService.returnIndividualTask();
  }

}
