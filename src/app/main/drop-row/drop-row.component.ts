import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FInputComponent } from '../../formly-custom-elements/f-input/f-input.component';
import { FSelectComponent } from '../../formly-custom-elements/f-select/f-select.component';


@Component({
  selector: 'app-drop-row',
  templateUrl: './drop-row.component.html',
  styleUrls: ['./drop-row.component.scss']
})
export class DropRowComponent {

  @Input() elements = [];
  @Output() elementsChange = new EventEmitter();


  @Input() numberRow: any;
  @Output() deleteRowEvent = new EventEmitter();


  items: any = [
    FInputComponent,
    FSelectComponent,
  ];



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

  addElem(item: Component) {
    this.items.push(item)
  }

  deleteRow() {
    this.deleteRowEvent.emit()
  }
}
