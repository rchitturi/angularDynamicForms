import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl: './form-input.component.html'
})
export class FormInputComponent implements Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;
}
