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

    
      // let error = document.querySelector('.errorMessage') as HTMLElement;
    
      // for (let user in this.users) {
      //   if (email.toLowerCase() == this.users[user].email.toLowerCase()) {
      //       if (password == this.users[user].password.toLowerCase()) {
      //         console.log("congrats on signing in");
      //         let index = parseInt(user);
      //         this.logInService.getUser(index).subscribe((data) => {
      //           this.logInService.setProfileUser(data);
      //           this.router.navigateByUrl('/profile');
               
      //     })
      //       } else {
      //         console.log("not the correct password");
      //         error.style.display = "inline-block";
      //       }
      //     return;
      //   } 
      // }
      // console.log("No user could be found with that email and password combination.");
      // error.style.display = "inline-block";
    

  }
}
