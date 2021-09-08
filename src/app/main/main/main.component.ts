import { Component, OnInit } from '@angular/core';
import { each } from 'lodash-es';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean = false;
  rows = [0];
  forms: any = [
    {
      elements:[]
    }
  ]


  constructor(
    private router: Router,
    private mainService: MainService
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
    const form = this.drawForm();
    localStorage.setItem('myForms', JSON.stringify(form));
    this.router.navigateByUrl('/preview');

  }

  drawForm() {
    const groups: any = [];
    each(this.forms, (group: any, index: number) => {
      groups[index] = [];
      for (let element of group.elements) {
        groups[index].push({
          element: element.type.name,
          config: this.mainService.getConfigElemt(element.type.name, element.key, element.requierd),
          // additionalyInfo: this.getAdditionalyInfo(element.name)
        });
      }
    });
    return groups;
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }
}
