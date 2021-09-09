import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-f-slide-toggle',
  templateUrl: './f-slide-toggle.component.html',
  styleUrls: ['./f-slide-toggle.component.scss']
})
export class FSlideToggleComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
