import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [
    {picture: '', title: 'Example Title For a Card', description: 'This is an example description for the first card', tags: ['Family', 'Important'], date: '10/09/2015', notes: 'Example Notes'},
    {picture: '', title: 'Example Number Two', description: 'This is an example description. Lorem Ipsum formioliThis is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog ravioli king kong punching bag, dog. This is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog', tags: ['Work', 'Family'], date: '12/20/2012', notes: 'Example Notes'},
    {picture: '', title: 'Example Number Three', description: 'This is an example description. Lorem Ipsum formioli ravioli king kong punching bag, dog', tags: [], date: '12/20/2012', notes: 'Example Notes'},
    {picture: '', title: 'Example Number Four', description: '', tags: ['Work', 'Fun'], date: '12/20/2012', notes: 'Example Notes'},
    {picture: '', title: 'Example Number Five', description: 'This is an example description', tags: ['Work', 'Family', 'Important'], date: '12/20/2012', notes: 'Example Notes'},
  ];

  individualTask: Task[] = [];
  constructor() { }

  getTaskList() {
    return this.taskList;
  }

  addTask(taskName: string, thumbnail: string, description:string, labels:string[], dueDate:string, notes: string) {
    let newTask = {picture: thumbnail, title: taskName, description: description, tags: labels, date: dueDate, notes: notes};
    this.taskList.push(newTask);
    this.getIndividualTask(newTask);
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
