import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-radio.component.scss'],
  template: `
  <div 
  class="dynamic-field input-area"
  [ngClass]="config.class ? config.class.join(' ').trim() : ''"
  [ngStyle]="type==='horizontal' && (config.inputConfig && config.inputConfig.alignment==='normal') ? {'margin-left': '20%'} : ''"
  [formGroup]="group">
  <ng-container
    *ngFor="let radio of config.radios"
  >
    <label 
      class="{{config.inline ? 'radio-inline' : 'radio'}}"
      [ngClass]="config.class ? config.class.join(' ').trim() : ''">
      <input
        type="radio"
        [ngClass]="config.class ? config.class.join(' ').trim() : ''"
        name="{{config.name}}"
        [value]="radio.value"
        [formControlName]="config.name"> {{ radio.label }}
    </label>
  </ng-container>
</div>
  `
})
export class FormRadioComponent implements Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;
}
