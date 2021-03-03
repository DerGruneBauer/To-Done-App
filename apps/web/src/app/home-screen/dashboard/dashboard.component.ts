import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nxlp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gridItems = [
    {picture: '', title: 'Example Title For a Card', description: 'This is an example description for the first card', tags: ['Family', 'Important'], date: '10/09/2015'},
    {picture: '', title: 'Example Number Two', description: 'This is an example description', tags: ['Work', 'Family'], date: '12/20/2012'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
