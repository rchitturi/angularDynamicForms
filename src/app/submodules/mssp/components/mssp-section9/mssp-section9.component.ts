import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp9Form } from './../../forms/mssp9-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section9',
  templateUrl: './mssp-section9.component.html',
  styleUrls: ['./mssp-section9.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection9Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 9';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 9'
  ];

  public config: FieldConfig[] = Mssp9Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 9');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
