import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements AfterViewInit {



  constructor(
    public dropService: DropService
  ) {


  }

  ngAfterViewInit() {

  }



}
