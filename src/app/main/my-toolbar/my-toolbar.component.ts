import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.scss']
})
export class MyToolbarComponent implements OnInit {

  @Output() addRowEvent = new EventEmitter();
  @Output() getConfigEvent = new EventEmitter();
  preview = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.indexOf('preview') !== -1) {
          this.preview = true;
        } else {
          this.preview = false;
        }
      }
    });

  }

  ngOnInit(): void {
  }

  addRow() {
    this.addRowEvent.emit();
  }

  getConfig() {
    this.getConfigEvent.emit();
  }

  goToForm() {
    this.router.navigateByUrl('/')
  }
}
