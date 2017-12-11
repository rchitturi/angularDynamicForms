import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp8Form } from './../../forms/mssp8-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section8',
  templateUrl: './mssp-section8.component.html',
  styleUrls: ['./mssp-section8.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection8Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 8';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 8'
  ];

  public config: FieldConfig[] = Mssp8Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 8');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
