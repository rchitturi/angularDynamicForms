import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-checkbox.component.scss'],
  templateUrl: './form-checkbox.component.html'
})
export class FormCheckboxComponent implements OnInit, Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;

  public formArray: any;

  public ngOnInit() {
    this.formArray = <FormArray> this.group.controls[this.config.name];
    if (this.config.value && this.config.value.length > 0) {
      for (let value of this.config.value) {
        this.formArray.push(new FormControl(value));
      }
    }
  }

  public onChange(value: string, isChecked: boolean) {
    // const formArray = <FormArray> this.group.controls[this.config.name];
    // console.log(formArray, value);
    if (isChecked) {
      this.formArray.push(new FormControl(value));
    } else {
      let index = this.formArray.controls.findIndex((x) => x.value === value);
      this.formArray.removeAt(index);
      console.log(this.formArray.value);
      // if (this.formArray.value && this.formArray.value.length === 0) {
      //   this.formArray.value = null;
      //   console.log(this.formArray.value);
      // }
    }
  }
}
