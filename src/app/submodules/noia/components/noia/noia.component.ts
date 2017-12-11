import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from '../../../../core/modules/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { ValidatorsService } from '../../../../core/modules/dynamic-form/services/validators.service';

import { NoiaForm } from '../../forms/noia-form';

@Component({
  selector: 'sd-noia',
  templateUrl: './noia.component.html',
  styleUrls: ['./noia.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class NoiaComponent implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public config: FieldConfig[] = NoiaForm;

  public breadcrumb: any[] = [
    'NOIA Initial Application'
  ];

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }

  public ngOnInit() {
    console.log('noia');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
