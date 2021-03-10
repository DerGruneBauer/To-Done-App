import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'nxlp-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  constructor(public taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    let userX = document.querySelector('.usernameInput') as HTMLInputElement;
    let passX = document.querySelector('.passwordInput') as HTMLInputElement;
    let username = userX.value;
    let password = passX.value;

    this.taskService.logIn(username, password);
  }
}
