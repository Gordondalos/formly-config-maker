import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-properties',
  templateUrl: './field-properties.component.html',
  styleUrls: ['./field-properties.component.scss']
})
export class FieldPropertiesComponent implements OnInit {

  value: any;
  req = false;
  key = '';

  @Input() uuid: string = '';

  @Output() requireChange = new EventEmitter();
  @Output() keyChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
