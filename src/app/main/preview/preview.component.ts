import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  forms: any;

  constructor() {
  }

  ngOnInit(): void {
    const forms = localStorage.getItem('myForms');
    if (forms) {
      this.forms = JSON.parse(forms);
    }
    this.drawConfig();
  }

  drawConfig() {
    console.log(this.forms);
  }


  getKey(item: any): string {
    return `          key: ${item.config.key},`;
  }

  getType(item: any): string {
    return `          type: ${item.config.type},`;
  }

  getClassName(item: any, group: any, index: number): string {
    const len = group.length;
    let value = '';
    switch (len) {
      case 1: {
        value = 'w100';
        break;
      }
      case 2: {
        if (index === 0) {
          value = 'w-50 mr8';
        }
        if (index === 1) {
          value = 'w-50 ml8';
        }
      }
        break;
      case 3: {
        if (index === 0) {
          value = 'w-33 mr8';
        }
        if (index === 1) {
          value = 'w-33 mx8';
        }
        if (index === 2) {
          value = 'w-33 ml8';
        }
      }
        break;
      case 4: {
        if (index === 0) {
          value = 'w-25 mr8';
        }
        if (index === 1 || index === 2) {
          value = 'w-25 mx8';
        }
        if (index === 3) {
          value = 'w-25 ml8';
        }
      }

    }
    return `          className: '${value}',`;
  }

  getLabel(item: any) {
    return `            label: '${item.config.templateOptions.label}',`;
  }

  getPlaceHolder(item: any) {
    return `            placeholder: '${item.config.templateOptions.placeholder}',`;
  }

  getRequired(item: any) {
    return `            required: ${item.config.templateOptions.required},`;
  }
}
