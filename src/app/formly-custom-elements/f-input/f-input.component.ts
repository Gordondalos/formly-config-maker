import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {

  value: any;
  req = false;
  key = '';

  // @Input()
  // uuid: string = '';


  constructor() {
  }

  ngOnInit() {
    // console.log(this.uuid)

  }

}
