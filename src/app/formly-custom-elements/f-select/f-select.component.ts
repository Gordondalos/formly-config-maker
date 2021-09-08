import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-select',
  templateUrl: './f-select.component.html',
  styleUrls: ['./f-select.component.scss']
})
export class FSelectComponent implements OnInit {
  selected = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
