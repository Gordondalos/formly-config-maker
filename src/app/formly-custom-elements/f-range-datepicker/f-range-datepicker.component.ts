import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f-range-datepicker',
  templateUrl: './f-range-datepicker.component.html',
  styleUrls: ['./f-range-datepicker.component.scss']
})
export class FRangeDatepickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
