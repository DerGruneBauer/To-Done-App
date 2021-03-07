import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [
    {id: 0, picture: '', title: 'Example Title For a Card', description: 'This is an example description for the first card', tags: ['Family', 'Important'], date: '10/09/2015', notes: 'Example Notes'},
    {id: 1, picture: '', title: 'Example Number Two', description: 'This is an example description. Lorem Ipsum formioliThis is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog ravioli king kong punching bag, dog. This is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog', tags: ['Work', 'Family'], date: '12/20/2012', notes: 'Example Notes'},
    {id: 2, picture: '', title: 'Example Number Three', description: 'This is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog', tags: [], date: '12/20/2012', notes: 'Example Notes'},
    {id: 3, picture: '', title: 'Example Number Four', description: '', tags: ['Work', 'Fun'], date: '12/20/2012', notes: 'Example Notes'},
    {id: 4, picture: '', title: 'Example Number Five', description: 'This is an example description', tags: ['Work', 'Family', 'Important'], date: '12/20/2012', notes: 'Example Notes'},
  ];

  individualTask: Task[] = [];
  completedTasks: Task[] = [];
  constructor() { }

  getTaskList() {
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
