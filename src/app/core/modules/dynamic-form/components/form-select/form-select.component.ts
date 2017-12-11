import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
       class="dynamic-field form-select form-group"
       [ngClass]="config.class ? config.class.join(' ').trim() : ''"
       fxLayout="{{config.inputConfig && config.inputConfig.alignment ? config.inputConfig.alignment : 'row'}}"
       fxLayout.lt-md="column"
       [formGroup]="group">
      <label class="control-label"
             [ngClass]="config.class ? config.class.join(' ').trim() : ''"
             for="{{config.name}}"
             fxFlex="20">
        {{ config.label }}
      </label>
      <div fxLayout="column" class="input-area" style="width: 100%;">
        <select [formControlName]="config.name" [formControl]="group.controls[config.name]"
                class="{{!group.controls[config.name].valid&&group.controls[config.name].touched ? 'fmError' : ''}}"
                [ngClass]="config.class ? config.class.join(' ').trim() : ''"
                [attr.disabled]="config.readonly ? true : null"
                name="{{config.name}}" 
                id="{{config.name}}">
          <option value="">{{ config.placeholder }}</option>
          <ng-container *ngFor="let option of config.options">
            <option [attr.selected]="config.value === option ? true : null">
              {{ option }}
            </option>  
          </ng-container>
        </select>
        <form-error-handler [config]="config" [group]="group"></form-error-handler>
      </div>
    </div>
  `
})
export class FormSelectComponent implements OnInit, Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;

  public ngOnInit() {
    if (this.config.value && this.config.value !== null && this.config.value !== '') {
      this.group.patchValue(this.config.value);
    }
  }
}
