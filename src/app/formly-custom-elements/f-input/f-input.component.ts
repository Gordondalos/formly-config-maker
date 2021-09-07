import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {
  value: any;
  required = false;
  key = 'You-key-here';

  constructor() { }

  ngOnInit() {
  }

}
