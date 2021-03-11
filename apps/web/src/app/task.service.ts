//****************************************** */
// "LOG IN" USERNAME: admin
// "LOG IN" PASSWORD: 1234
//********************************************* */

import { Injectable } from '@angular/core';
import { Task } from './task';
import { Router, RouterModule, Routes } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList = [];
  individualTask: Task[] = [];
  completedTasks: Task[] = [];
  user: string;
  id: string = '';
  completedId: string = '';
  ticker: number = 0;

  constructor(private db: AngularFirestore, private router: Router) {}

  logIn(username: string, password: string) {
    const doc = this.db.doc(`users/${username}/logIn/logIn`).get();
    doc.subscribe((data) => {
      let returnedPass = data.data().password;
      if (returnedPass == password) {
        console.log('congrats logging in');
        this.user = username;
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('incorrect password');
      }
    });
  }

  getId(id: number) {
    const docRef = this.db.collection(`users/${this.user}/tasks/`);
    let idArray: string[] = [];
    docRef.snapshotChanges().forEach((changes) => {
      changes.map((a) => {
        this.id = a.payload.doc.id;
        idArray.push(this.id);
      });
      this.id = idArray[id];
    });
  }
  getCompletedId(id: number) {
    const docRef = this.db.collection(`users/${this.user}/completedTasks/`);
    let idArray: string[] = [];
    docRef.snapshotChanges().forEach((changes) => {
      changes.map((a) => {
        this.completedId = a.payload.doc.id;
        idArray.push(this.completedId);
      });
      this.completedId = idArray[id];
    });
  }

  getTaskList() {
    const refDoc = this.db.collection(`users/${this.user}/tasks/`).get();
    this.taskList = [];
    refDoc.subscribe((data) => {
      data.docs.forEach((doc) => {
        this.taskList.push(doc.data().field);
      });
    });
    return this.taskList;
  }

  addTask(
    id: number,
    taskName: string,
    thumbnail: string,
    description: string,
    labels: string[],
    dueDate: string,
    notes: string
  ) {
    let newTask = {
      id: id,
      picture: thumbnail,
      title: taskName,
      description: description,
      tags: labels,
      date: dueDate,
      notes: notes,
    };
    this.db.collection(`users/${this.user}/tasks`).add({
      field: newTask,
    });
    this.getIndividualTask(newTask);
  }

  editTask(
    id: number,
    taskName: string,
    thumbnail: string,
    description: string,
    labels: string[],
    dueDate: string,
    notes: string
  ) {
    let editTask = {
      id: id,
      picture: thumbnail,
      title: taskName,
      description: description,
      tags: labels,
      date: dueDate,
      notes: notes,
    };
    this.db.collection(`users/${this.user}/tasks`).doc(this.id).update({
      field: editTask,
    });
    this.getIndividualTask(editTask);
  }

  deleteTask() {
    this.db.collection(`users/${this.user}/tasks/`).doc(this.id).delete();
  }
  deleteCompletedTask() {
    console.log(`deleteing id ${this.completedId}`);
    this.db
      .collection(`users/${this.user}/completedTasks`)
      .doc(this.completedId)
      .delete();
  }

  completeTask(task: Task) {
    this.db.collection(`users/${this.user}/completedTasks`).add({
      field: task,
    });
    this.deleteTask();
  }

  returnCompletedTasks() {
    const refDoc = this.db
      .collection(`users/${this.user}/completedTasks`)
      .get();
    this.completedTasks = [];
    refDoc.subscribe((data) => {
      data.docs.forEach((doc) => {
        this.completedTasks.push(doc.data().field);
      });
    });
    return this.completedTasks;
  }

  getIndividualTask(task: Task) {
    this.individualTask.push(task);
    if (this.individualTask.length > 1) {
      this.individualTask.splice(0, 1);
      return this;
    } else {
      return this;
    }
  }

  returnIndividualTask() {
    return this.individualTask;
  }

  changeTicker(number: number) {
    this.ticker = number;
  }

  getTicker() {
    return this.ticker;
  }
}
