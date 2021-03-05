import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router, RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'nxlp-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  screenWidth: any = window.screen.width;
  constructor(public taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addTask() {
    //NEED TO ADD SOME SORT OF REQUIREMENT FOR TASKNAME
    let taskNameX = document.querySelector('.taskName') as HTMLInputElement;
    let thumbnailX = document.querySelector('.thumbnail') as HTMLInputElement;
    let descriptionX = document.querySelector('.description') as HTMLInputElement;
    let labelsX = document.querySelector('.labels') as HTMLInputElement;
    let dueDateX = document.querySelector('.dueDate') as HTMLInputElement;
    let notesX = document.querySelector('.notes') as HTMLInputElement;
    let required = document.querySelector('.required') as HTMLElement;

    let taskName = taskNameX.value;
    let thumbnail = thumbnailX.value;
    let description = descriptionX.value;
    let labels = labelsX.value;
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

}
