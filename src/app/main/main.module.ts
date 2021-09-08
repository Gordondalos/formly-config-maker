import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { DropRowComponent } from './drop-row/drop-row.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';
import { FInputComponent } from '../formly-custom-elements/f-input/f-input.component';
import { DinamicComponentComponent } from './dinamic-component/dinamic-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PreviewComponent } from './preview/preview.component';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';
import { NGX_HIGHLIGHT_JS_DEFAULT_THEME, NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
import { FieldPropertiesComponent } from '../field-properties/field-properties.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    LeftBarComponent,
    DropRowComponent,
    FInputComponent,
    DinamicComponentComponent,
    PreviewComponent,
    MyToolbarComponent,
    FieldPropertiesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    DragDropModule,
    DynamicIoModule,
    DynamicModule,
    MatFormFieldModule,
    MatInputModule,
    NgxHighlightJsModule.forRoot()
  ],
  entryComponents: [
    FInputComponent
  ],
  providers: [
    {provide: NGX_HIGHLIGHT_JS_DEFAULT_THEME, useValue: 'dracula'}
  ]
})
export class MainModule {
}
