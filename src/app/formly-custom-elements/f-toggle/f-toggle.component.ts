import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-f-toggle',
  templateUrl: './f-toggle.component.html',
  styleUrls: ['./f-toggle.component.scss']
})
export class FToggleComponent implements OnInit {
  fontStyleControl = new FormControl();
  fontStyle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
