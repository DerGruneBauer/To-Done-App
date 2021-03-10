import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'nxlp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ticker: number = 0;
  emptyArray: Task[] = [];
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  this.emptyArray = this.taskItems;
  }

  showCompletedTasks() {
    let completedTaskButton = document.querySelector('.showCompletedTasks') as HTMLDivElement;
    let incompleteButton = document.querySelector('.showIncompleteTasks') as HTMLDivElement;
    let complete = document.querySelectorAll('.completed') as any;
    for(let i=0; i < complete.length; i++) {
      complete[i].style.display = "inline-block";
    }
    completedTaskButton.style.backgroundColor = "darkgray";
    incompleteButton.style.backgroundColor = "lightgray";
    this.taskService.changeTicker(this.ticker);
  }

  showIncompleteTasks() {
    let incompleteButton = document.querySelector('.showIncompleteTasks') as HTMLElement;
    let completedTaskButton = document.querySelector('.showCompletedTasks') as HTMLDivElement;
    let complete = document.querySelectorAll('.completed') as any;
    for(let i=0; i < complete.length; i++) {
      complete[i].style.display = "none";
    }
    incompleteButton.style.backgroundColor = "darkgray";
    completedTaskButton.style.backgroundColor = "lightgray";
    this.taskService.changeTicker(this.ticker);
  }

  getId(index: number) {
    if (this.ticker == 0) {
      this.taskService.getId(index);
    } else if (this.ticker == 1 ){
      this.taskService.getCompletedId(index);
    }
  }

  get taskItems() {
    return this.taskService.getTaskList();
  }

  get completedTasks() {
    return this.taskService.returnCompletedTasks();
  }

  supplyCardInfo(task: Task) {
    this.taskService.getIndividualTask(task);
  }
}
