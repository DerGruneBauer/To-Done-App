import { Injectable } from '@angular/core';
import { Task } from './task';
import { Router, RouterModule, Routes } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [];

  individualTask: Task[] = [];
  completedTasks: Task[] = [];
  // user: string;
  user: string = 'admin';

  constructor(private db: AngularFirestore, private router: Router) { 
   
  }

  logIn(username: string, password: string) {
    const doc = this.db.doc(`users/${username}/logIn/logIn`).get();
    doc.subscribe((data) => {
     console.log(data.data());
    //  let returnedUser = data.data().username;
     let returnedPass = data.data().password;
     if (returnedPass == password) {
       console.log("congrats logging in");
       this.user = username;
       this.getTaskList();
       this.router.navigateByUrl('/dashboard');
      } else {
        console.log("incorrect password");
      }
    });
  }

  getTaskList() {
    const doc = this.db.doc(`users/${this.user}/tasks/tasks`).get();
    doc.subscribe((data) => {
      let object = data.data();
      let taskArray = object.tasks;
    this.taskList = taskArray;
    })
    return this.taskList;
  }

  addTask(id: number, taskName: string, thumbnail: string, description:string, labels:string[], dueDate:string, notes: string) {
    let newTask = {id: id, picture: thumbnail, title: taskName, description: description, tags: labels, date: dueDate, notes: notes};
    this.taskList.push(newTask);
    this.getIndividualTask(newTask);
  }

  editTask(id: number, taskName: string, thumbnail: string, description:string, labels:string[], dueDate:string, notes: string) {
    this.taskList[id].title = taskName;
    this.taskList[id].picture = thumbnail;
    this.taskList[id].description = description;
    this.taskList[id].tags = labels;
    this.taskList[id].date = dueDate;
    this.taskList[id].notes = notes;
    this.getIndividualTask(this.taskList[id]);
  }

  deleteTask() {
    for (let i=0; i < this.taskList.length; i++){
      if (this.individualTask[0].id == this.taskList[i].id){
        this.taskList.splice(i, 1)
      }
    }
    return this;
  }

  completeTask(task: Task) {
    this.completedTasks.push(task);
  }

  returnCompletedTasks(): Task[] {
    return this.completedTasks;
  }

  getIndividualTask(task: Task) {
    this.individualTask.push(task);
    if(this.individualTask.length > 1){
      this.individualTask.splice(0,1);
      return this;
    }else{
      return this;
    }
  }

  returnIndividualTask(): Task[]{
    return this.individualTask;
  }
}
