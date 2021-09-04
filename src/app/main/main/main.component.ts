import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';
import { cloneDeep, sortBy } from 'lodash-es';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean = false;

  rows = [0];


  constructor(public dropService: DropService) {
  }

  ngOnInit() {
  }

  addRow() {
    this.rows.push(this.rows.length)
  }

}
