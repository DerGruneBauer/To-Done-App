import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'nxlp-individual-card',
  templateUrl: './individual-card.component.html',
  styleUrls: ['./individual-card.component.css']
})
export class IndividualCardComponent implements OnInit {

  individualCard: Task[];
  screenWidth: any = window.screen.width;

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getCardInfo();
  }

  getCardInfo() {
    this.individualCard = this.taskService.returnIndividualTask();
  }

  completeTask() {
    this.taskService.completeTask(this.individualCard[0]);
  }

  deleteTask() {
    this.taskService.deleteTask();
  }

}
