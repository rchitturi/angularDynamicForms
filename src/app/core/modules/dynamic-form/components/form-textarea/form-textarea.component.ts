import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-textarea',
  styleUrls: ['form-textarea.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input form-group"
      [ngClass]="config.class ? config.class.join(' ').trim() : ''"
      fxLayout="row" fxLayout.lt-md="column"
      [formGroup]="group">
      <label class="control-label"
             [ngClass]="config.class ? config.class.join(' ').trim() : ''"
             for="{{config.name}}"
             fxFlex="20">
        {{ config.label }}
      </label>
      <div fxLayout="column" class="input-area" style="width: 100%;">
        <textarea
          type="text"
          id="{{config.name}}"
          class="{{!group.controls[config.name].valid&&group.controls[config.name].touched ? 'fmError' : ''}}"
          [ngClass]="config.class ? config.class.join(' ').trim() : ''"
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name"></textarea>
        <form-error-handler [config]="config" [group]="group"></form-error-handler>
      </div>
    </div>
  `
})
export class FormTextareaComponent implements Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;
}
