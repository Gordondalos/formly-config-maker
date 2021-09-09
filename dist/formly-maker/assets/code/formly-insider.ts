
// Используйте этот код для вствик в ващ app.module.ts
// Вы можете самостоятельно реализовать любые компоненты экстраформы воспользовавшись документацией
// https://formly.dev/guide/custom-formly-field
// Используйте библиотеку @iiko, нужно установить те компоненты которые доступны у вас в форме
/*
npm install @iiko/f-autocomplete --save
npm install @iiko/f-checkbox --save
npm install @iiko/f-datepicker --save
npm install @iiko/f-input --save
npm install @iiko/f-radio --save
npm install @iiko/f-range-datepicker --save
npm install @iiko/f-select --save
npm install @iiko/f-slide-toggle --save
npm install @iiko/f-textarea --save
npm install @iiko/f-toggle --save
 */

import { FAutocompleteComponent } from '@iiko/formly-custom-elements/f-autocomplete/f-autocomplete.component';
import { FCheckboxComponent } from '@iiko/formly-custom-elements/f-checkbox/f-checkbox.component';
import { FDatepickerComponent } from '@iiko/formly-custom-elements/f-datepicker/f-datepicker.component';
import { FInputComponent } from '@iiko/formly-custom-elements/f-input/f-input.component';
import { FRadioComponent } from '@iiko/formly-custom-elements/f-radio/f-radio.component';
import { FRangeDatepickerComponent } from '@iiko/formly-custom-elements/f-range-datepicker/f-range-datepicker.component';
import { FSelectComponent } from '@iiko/formly-custom-elements/f-select/f-select.component';
import { FSlideToggleComponent } from '@iiko/formly-custom-elements/f-slide-toggle/f-slide-toggle.component';
import { FTextareaComponent } from '@iiko/formly-custom-elements/f-textarea/f-textarea.component';
import { FToggleComponent } from '@iiko/formly-custom-elements/f-toggle/f-toggle.component';

imports: [
  ...

  FormlyModule.forRoot({
    types: [
      {
        name: 'f-autocomplete',
        component: FAutocompleteComponent,
      },
      {
        name: 'f-checkbox',
        component: FCheckboxComponent,
      },
      {
        name: 'f-input',
        component: FInputComponent,
      },
      {
        name: 'f-radio',
        component: FRadioComponent,
      },
      {
        name: 'f-range',
        component: FRangeDatepickerComponent,
      },
      {
        name: 'f-select',
        component: FSelectComponent,
      },
      {
        name: 'f-slide-toggle',
        component: FSlideToggleComponent,
      },
      {
        name: 'f-textarea',
        component: FTextareaComponent,
      },
      {
        name: 'f-toggle',
        component: FToggleComponent,
      },
      {
        name: 'f-datepicker',
        component: FDatepickerComponent,
        defaultOptions: {
          defaultValue: new Date(),
          templateOptions: {
            datepickerOptions: {},
          },
        },
      },
    ],
  }),

  ...

],
