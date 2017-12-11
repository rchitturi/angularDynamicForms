// TODO: add referenced function calls to each form element to support (change), (click), etc...
import { NgUploaderModule } from 'ngx-uploader';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { SignaturePadModule } from 'angular2-signaturepad';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PipesModule } from '../../pipes/pipes.module';

import { SignaturePadComponent } from './components/signpad/signature-pad/signature-pad.component';
import { FormFilesComponent } from './components/form-files/form-files.component';
import { SignpadComponent } from './components/signpad/signpad.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormInputDateComponent } from './components/form-input-date/form-input-date.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { FormTitleComponent } from './components/form-title/form-title.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    SignaturePadModule,
    DatepickerModule,
    NgUploaderModule,
    PipesModule
  ],
  declarations: [
    FormFilesComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ErrorHandlerComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    SignaturePadComponent,
    SignpadComponent,
    FormInputDateComponent,
    FormTitleComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormFilesComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    SignpadComponent,
    FormInputDateComponent,
    FormTitleComponent
  ]
})
export class DynamicFormModule {}
