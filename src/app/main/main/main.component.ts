import { Component, OnInit } from '@angular/core';
import { each } from 'lodash-es';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean = false;
  rows = [0];
  forms: any = [
    {elements: []}
  ];

  options: any = [
    { name: 'Первый', key: '1' },
    { name: 'Второй', key: '2' },
    { name: 'Третий', key: '3' },
  ];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  addRow() {
    if (this.rows.length) {
      this.forms[this.rows.length] = {};
      this.forms[this.rows.length].elements = [];
      this.rows.push(this.rows.length);
    }

  }

  getConfig() {
    console.log(this.rows);
    console.log(this.forms);
    const form = this.drawForm();
    localStorage.setItem('myForms', JSON.stringify(form));
    this.router.navigateByUrl('/preview');

  }

  drawForm() {
    const groups: any = [];
    each(this.forms, (group, index) => {
      groups[index] = [];
      for (let element of group.elements) {
        groups[index].push({
          element: element.name,
          config: this.getConfigElemt(element.name),
          additionalyInfo: this.getAdditionalyInfo(element.name)
        });
      }
    });
    return groups;
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  private getConfigElemt(elementName: any): any {
    switch (elementName) {
      case 'FInputComponent': return {
        key: 'title',
        type: 'input',
        className: 'w-50 mr8',
        templateOptions: {
          label: 'label',
          floatingLabel: 'always',
          placeholder: 'Placeholder',
          required: true,
          appearance: 'outline',
        }
      }
      case 'FSelectComponent': return {
        key: 'filial',
        type: 'select',
        className: 'w-50 mr8',
        templateOptions: {
          label: 'label',
          placeholder: 'placeholder',
          required: false,
          appearance: 'outline',
          floatLabel: 'always',
          filter: this.filter,
        },
      }
    }
  }

  filter = '(term: any) => of(term ? this.filterTypes(term, this.normalize(this.options)) : this.normalize(this.options).slice())'

  normalize(arr: any): any {
    const newArr = [];
    for (const item of arr) {
      newArr.push({ label: item.name, value: item.key });
    }
    return newArr;
  }

  filterTypes(val: any, arr: any) {
    if (typeof val === 'string') {
      return arr.filter((item: any) => {
        return item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
    } else {
      return arr.filter((item: any) => {
        try {
          return item.label.toLowerCase().indexOf(val.label.toLowerCase()) !== -1;
        } catch (e) {
          return false;
        }
      });
    }

  }

  private getAdditionalyInfo(name: string): any {
    switch (name) {
      case 'FInputComponent': return {};
      case 'FSelectComponent': return {
        normalize: 'normalize(arr: any): any {          const newArr = [];          for (const item of arr) {            newArr.push({ label: item.name, value: item.key });          }          return newArr;        }',
        filterTypes: "filterTypes(val: any, arr: any) {if (typeof val === 'string') {            return arr.filter((item: any) => {              return item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;            });          } else {            return arr.filter((item: any) => {              try {                return item.label.toLowerCase().indexOf(val.label.toLowerCase()) !== -1;              } catch (e) {                return false;              }            });          }}",
        options: `options: any = [{ name: 'Первый', key: '1' },{ name: 'Второй', key: '2' },{ name: 'Третий', key: '3' }];`
      };

    }
  }
}
