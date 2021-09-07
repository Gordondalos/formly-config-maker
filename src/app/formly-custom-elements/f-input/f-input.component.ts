import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {
  value: any;
  req = false;
  key = '';

  @Input() uuid: any;

  @Output() requireChange = new EventEmitter();
  @Output() keyChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.requireChange);
    console.log(this.keyChange);
    console.log(this.uuid);
  }

}
