import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FSelectComponent } from './formly-custom-elements/f-select/f-select.component';
import { MatSelectModule } from '@angular/material/select';
import { NGX_HIGHLIGHT_JS_DEFAULT_THEME, NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FAutocompleteComponent } from './formly-custom-elements/f-autocomplete/f-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FCheckboxComponent } from './formly-custom-elements/f-checkbox/f-checkbox.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FDatepickerComponent } from './formly-custom-elements/f-datepicker/f-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FRangeDatepickerComponent } from './formly-custom-elements/f-range-datepicker/f-range-datepicker.component';
import { FRadioComponent } from './formly-custom-elements/f-radio/f-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { FTextareaComponent } from './formly-custom-elements/f-textarea/f-textarea.component';
import { FToggleComponent } from './formly-custom-elements/f-toggle/f-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FSlideToggleComponent } from './formly-custom-elements/f-slide-toggle/f-slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FSelectComponent,
    FAutocompleteComponent,
    FCheckboxComponent,
    FDatepickerComponent,
    FRangeDatepickerComponent,
    FRadioComponent,
    FTextareaComponent,
    FToggleComponent,
    FSlideToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    NgxHighlightJsModule.forRoot(),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyModule.forRoot({extras: {lazyRender: true}}),
    FormlyMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
