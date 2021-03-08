import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
  selector: 'nxlp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
  }

  get taskItems() {
    return this.taskService.getTaskList();
  }

  completeTasks() {
    console.log(this.taskService.returnCompletedTasks());
  }

  get completedTasks() {
    return this.taskService.returnCompletedTasks();
  }

  supplyCardInfo(task: Task) {
    this.taskService.getIndividualTask(task);
  }
}
