import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, AfterViewInit {

  forms: any;

  form = new FormGroup({});
  model = {};
  fields: any;

  constructor() {
  }

  onSubmit() {
    console.log(this.model);
  }

  ngOnInit(): void {
    const forms = localStorage.getItem('myForms');
    if (forms) {
      this.forms = JSON.parse(forms);
    }
    this.drawConfig();
  }

  ngAfterViewInit() {
    // // @ts-ignore
    // setTimeout(() => {
    //   let config: any = document.getElementById('form');
    //   if(config){
    //     config = config.innerText.replaceAll('\n', '')
    //   }
    //   console.log(config);
    //
    //   const str2obj = (config: string) => {
    //     return config
    //       .split(',')
    //       .map(keyVal => {
    //         return keyVal
    //           .split(':')
    //           .map((it) => it.trim())
    //       })
    //       .reduce((accumulator: any, currentValue) => {
    //         accumulator[currentValue[0]] = currentValue[1]
    //         return accumulator
    //       }, {})
    //   }
    //
    //
    //   console.log(str2obj(config))
    //   this.fields = [
    //     {
    //       fieldGroupClassName: 'd-flex w100',
    //       fieldGroup: [
    //         {
    //           key: 'zxczxc',
    //           type: 'select',
    //           className: 'w100',
    //           templateOptions: {
    //             label: 'label',
    //             floatingLabel: 'always',
    //             placeholder: 'placeholder',
    //             required: false,
    //             filter: (term: any) => of(term ? this.filterTypes(term,
    //               this.normalize(this.options)) : this.normalize(this.options).slice()),
    //           },
    //         },
    //       ],
    //     },
    //   ];
    // }, 3000)

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














  options: any = [
    { name: 'Первый', key: '1' },
    { name: 'Второй', key: '2' },
    { name: 'Третий', key: '3' },
  ];


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



}
