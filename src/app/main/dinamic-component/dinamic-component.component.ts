import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DinamicComponentService } from '../services/dinamic-component.service';


@Component({
  selector: 'app-dinamic-component',
  templateUrl: './dinamic-component.component.html',
  styleUrls: ['./dinamic-component.component.scss'],
})
export class DinamicComponentComponent implements OnDestroy, OnInit {
  inputs: any;

  outputs: any;


  @Input() data: { inputs: any; outputs: any; component: Component; } | undefined;

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
    this.inputs = {...data.inputs, element: data.component.uuid};
    this.outputs = {
      keyChange: this.data?.outputs.keyChange,
      requireChange: this.data?.outputs.requireChange,
    };
    this.component = data.component;
  }
}
