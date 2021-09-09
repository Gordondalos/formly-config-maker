import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FInputComponent } from '../../formly-custom-elements/f-input/f-input.component';
import { FSelectComponent } from '../../formly-custom-elements/f-select/f-select.component';
import { FAutocompleteComponent } from '../../formly-custom-elements/f-autocomplete/f-autocomplete.component';
import { FCheckboxComponent } from '../../formly-custom-elements/f-checkbox/f-checkbox.component';
import { FDatepickerComponent } from '../../formly-custom-elements/f-datepicker/f-datepicker.component';
import { FRangeDatepickerComponent } from '../../formly-custom-elements/f-range-datepicker/f-range-datepicker.component';
import { FRadioComponent } from '../../formly-custom-elements/f-radio/f-radio.component';
import { FTextareaComponent } from '../../formly-custom-elements/f-textarea/f-textarea.component';
import { FToggleComponent } from '../../formly-custom-elements/f-toggle/f-toggle.component';
import { FSlideToggleComponent } from '../../formly-custom-elements/f-slide-toggle/f-slide-toggle.component';

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
    {uuid: uuidv4(), type: FAutocompleteComponent},
    {uuid: uuidv4(), type: FCheckboxComponent},
    {uuid: uuidv4(), type: FRangeDatepickerComponent},
    {uuid: uuidv4(), type: FDatepickerComponent},
    {uuid: uuidv4(), type: FTextareaComponent},
    {uuid: uuidv4(), type: FRadioComponent},
    {uuid: uuidv4(), type: FToggleComponent},
    {uuid: uuidv4(), type: FSlideToggleComponent}
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
          key: `'${key}'`,
          type: `'input'`,
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
          key: `'${key}'`,
          type: `'select'`,
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
      case 'FCheckboxComponent':
        return {
          key: `'${key}'`,
          type: `'checkbox'`,
          className: 'w-50 mr8',
          defaultValue: false,
          templateOptions: {
            label: `label`,
            value: false,
          },
        };
      case 'FAutocompleteComponent':
        return {
          key: `'${key}'`,
          type: `'autocomplete'`,
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
      case 'FDatepickerComponent':
        return {
          key: `'${key}'`,
          type: `f-datepicker`,
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            appearance: 'outline',
            floatLabel: 'always',
          },
        };
      case 'FRangeDatepickerComponent':
        return {
          key: `'${key}'`,
          type: `f-range-datepicker`,
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            appearance: 'outline',
            floatLabel: 'always',
          },
        };
      case 'FRadioComponent':
        return {
          key: `'${key}'`,
          type: `f-radio`,
          className: 'w-50 mr8',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            options: [
              {value: 1, label: `Man`},
              {value: 0, label: `Woman`},
              {value: 3, label: `Another`},
            ],
          },
        };
      case 'FTextareaComponent':
        return {
          key: `'${key}'`,
          type: `f-textarea`,
          className: 'w100',
          templateOptions: {
            label: 'label',
            placeholder: 'placeholder',
            required: required,
            rows: 5,
          },
        };
      case 'FToggleComponent':
        return {
          key: `'${key}'`,
          type: `f-toggle`,
          className: 'w100',
          templateOptions: {
            required: required,
          },
        };

      case 'FSlideToggleComponent':
        return {
          key: `'${key}'`,
          type: `f-slide-toggle`,
          className: 'w100',
          templateOptions: {
            required: required,
          },
        };
    }
  }

  // filter = '(term: any) => of(term ? this.filterTypes(term, this.normalize(this.options)) : this.normalize(this.options).slice())';


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
