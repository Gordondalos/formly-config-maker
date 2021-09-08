import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FInputComponent } from '../../formly-custom-elements/f-input/f-input.component';
import { FSelectComponent } from '../../formly-custom-elements/f-select/f-select.component';
import { FAutocompleteComponent } from '../../formly-custom-elements/f-autocomplete/f-autocomplete.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // options: any = [
  //   { name: 'Первый', key: '1' },
  //   { name: 'Второй', key: '2' },
  //   { name: 'Третий', key: '3' },
  // ];

  items: { uuid: string, type: any }[] = [
    {uuid: uuidv4(), type: FInputComponent},
    {uuid: uuidv4(), type: FSelectComponent},
    {uuid: uuidv4(), type: FAutocompleteComponent}
  ];

  constructor() {
  }

  getItems() {
    return this.items;
  }


  getConfigElemt(elementName: any, key = 'someKey', required = false): any {
    switch (elementName) {
      case 'FInputComponent':
        return {
          key: key,
          type: 'input',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            floatingLabel: 'always',
            placeholder: 'placeholder',
            required: required,
            appearance: 'outline',
          }
        };
      case 'FSelectComponent':
        return {
          key: key,
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            appearance: 'outline',
            floatLabel: 'always',
            filter: true,
          },
        };
      case 'FAutocompleteComponent':
        return {
          key: key,
          type: 'autocomplete',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            appearance: 'outline',
            floatLabel: 'always',
            filter: true,
          },
        };
    }
  }

  // filter = '(term: any) => of(term ? this.filterTypes(term, this.normalize(this.options)) : this.normalize(this.options).slice())';


  // normalize(arr: any): any {
  //   const newArr = [];
  //   for (const item of arr) {
  //     newArr.push({ label: item.name, value: item.key });
  //   }
  //   return newArr;
  // }
  //
  // filterTypes(val: any, arr: any) {
  //   if (typeof val === 'string') {
  //     return arr.filter((item: any) => {
  //       return item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  //     });
  //   } else {
  //     return arr.filter((item: any) => {
  //       try {
  //         return item.label.toLowerCase().indexOf(val.label.toLowerCase()) !== -1;
  //       } catch (e) {
  //         return false;
  //       }
  //     });
  //   }
  //
  // }
  //
  //  getAdditionalyInfo(name: string): any {
  //   switch (name) {
  //     case 'FInputComponent': return {};
  //     case 'FSelectComponent': return {
  //       normalize: 'normalize(arr: any): any {          const newArr = [];          for (const item of arr) {            newArr.push({ label: item.name, value: item.key });          }          return newArr;        }',
  //       filterTypes: "filterTypes(val: any, arr: any) {if (typeof val === 'string') {            return arr.filter((item: any) => {              return item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;            });          } else {            return arr.filter((item: any) => {              try {                return item.label.toLowerCase().indexOf(val.label.toLowerCase()) !== -1;              } catch (e) {                return false;              }            });          }}",
  //       options: `options: any = [{ name: 'Первый', key: '1' },{ name: 'Второй', key: '2' },{ name: 'Третий', key: '3' }];`
  //     };
  //
  //   }
  // }
}
