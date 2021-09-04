import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FInputComponent } from '../../formly-custom-elements/f-input/f-input.component';
import { DinamicComponentService } from '../services/dinamic-component.service';
import { FSelectComponent } from '../../formly-custom-elements/f-select/f-select.component';


@Component({
  selector: 'app-dinamic-component',
  templateUrl: './dinamic-component.component.html',
  styleUrls: ['./dinamic-component.component.scss'],
})
export class DinamicComponentComponent implements OnDestroy, OnInit {
  inputs: any;

  outputs: any;

  @Input() data: { inputs: any; outputs: any; component: any; } | undefined;

  component: any;

  onDestroy$ = new Subject();

  constructor(
    private dinamicComponentService: DinamicComponentService) {
    // this.dinamicComponentService.open
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe((data: { inputs: any; outputs: any; component: string }) => {
    //     this.load(data);
    //   });
  }

  ngOnInit() {
    this.load(this.data);
  }


  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  load(data: any) {
    this.inputs = {data: data.inputs};
    this.outputs = data.outputs;
    switch (data.component) {
      case 'FInputComponent':
        this.component = FInputComponent;
        break;
      case 'FSelectComponent':
        this.component = FSelectComponent;
        break;
    }
  }
}
