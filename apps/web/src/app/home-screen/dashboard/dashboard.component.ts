import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
  selector: 'nxlp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  get taskItems() {
    return this.taskService.getTaskList();
  }

  supplyCardInfo(task: Task) {
    this.taskService.getIndividualTask(task);
  }
}
