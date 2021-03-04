import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'nxlp-individual-card',
  templateUrl: './individual-card.component.html',
  styleUrls: ['./individual-card.component.css']
})
export class IndividualCardComponent implements OnInit {

  screenWidth: any = window.screen.width;
  constructor() { }

  ngOnInit(): void {
  }

}
