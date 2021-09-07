import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FSelectComponent } from './formly-custom-elements/f-select/f-select.component';
import { MatSelectModule } from '@angular/material/select';
import { NGX_HIGHLIGHT_JS_DEFAULT_THEME, NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    FSelectComponent,
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
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
