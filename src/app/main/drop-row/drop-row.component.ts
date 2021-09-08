import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FInputComponent } from '../../formly-custom-elements/f-input/f-input.component';
import { FSelectComponent } from '../../formly-custom-elements/f-select/f-select.component';
import { v4 as uuidv4 } from 'uuid';

import { NgForm } from '@angular/forms';
import { FAutocompleteComponent } from '../../formly-custom-elements/f-autocomplete/f-autocomplete.component';
import { sortBy, unionBy } from 'lodash-es';

@Component({
  selector: 'app-drop-row',
  templateUrl: './drop-row.component.html',
  styleUrls: ['./drop-row.component.scss']
})
export class DropRowComponent implements OnInit {


  @Input() elements: { uuid: string, type: any, key?: string, require?: boolean }[] = [];
  @Output() elementsChange = new EventEmitter();
  @Input() numberRow: any;
  @Output() deleteRowEvent = new EventEmitter();


  keyChange = (value: any, item: any) => {
    item.key = value;
  };

  requireChange = (value: any, item: any) => {
    item.require = value;
  };


  items: { uuid: string, type: any }[] = [
    {uuid: uuidv4(), type: FInputComponent},
    {uuid: uuidv4(), type: FSelectComponent},
    {uuid: uuidv4(), type: FAutocompleteComponent}
  ];


  constructor() {

  }

  ngOnInit() {
    this.items = unionBy(sortBy(this.items, 'type'), 'type');
  }


  drop(event: any) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  addElem(item: any) {
    this.items.push({uuid: uuidv4(), type: item.type});
    this.items = unionBy(sortBy(this.items, 'type'), 'type');
  }

  deleteRow() {
    this.deleteRowEvent.emit();
  }


}
