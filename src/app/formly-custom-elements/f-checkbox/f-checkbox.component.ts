import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-checkbox',
  templateUrl: './f-checkbox.component.html',
  styleUrls: ['./f-checkbox.component.scss']
})
export class FCheckboxComponent implements OnInit {

  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
