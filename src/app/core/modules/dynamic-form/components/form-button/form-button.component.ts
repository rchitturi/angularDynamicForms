import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
    <div 
      class="dynamic-field form-button form-group"
      [ngClass]="config.class ? config.class.join(' ').trim() : ''"
      [ngStyle]="type==='horizontal' ? {'margin-left': '20%'} : ''"
      fxLayout="row" fxLayout.lt-md="column"
      [formGroup]="group">
      <button
        [disabled]="config.disabled"
        type="{{config.btnConfig.type}}"
        (click)="buttonFunction()"
        [ngClass]="config.class ? config.class.join(' ').trim() : ''"
      >
        {{ config.label }}
      </button>
    </div>
  `
})
export class FormButtonComponent implements OnInit, Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;

  public ngOnInit() {
    console.log();
  }

  public buttonFunction() {
    console.log('click');
  }
}
