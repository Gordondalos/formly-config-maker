import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DinamicComponentService {
  open = new Subject<any>();

  sidenavEvent = new Subject<any>();

  updateList = new Subject<any>();

  constructor() {}

  filterTypes(val: any, arr: any) {
    if (typeof val === 'string') {
      return arr.filter((item: any) => {
        return item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
    } else {
      return arr.filter((item: any) => {
        try {
          return (
            item.label.toLowerCase().indexOf(val.label.toLowerCase()) !== -1
          );
        } catch (e) {
          return false;
        }
      });
    }
  }

  normalize(arr: any, areaLabel?: any): any {
    const newArr = [];
    if (arr) {
      for (const item of arr) {
        if (!areaLabel) {
          newArr.push({ label: item.name, value: item.id });
        } else {
          newArr.push({
            label: `${item.id} ${item.name} ${
              item[areaLabel] ? item[areaLabel] : ''
            }`,
            value: item.id,
          });
        }
      }
    }
    return newArr;
  }
}
