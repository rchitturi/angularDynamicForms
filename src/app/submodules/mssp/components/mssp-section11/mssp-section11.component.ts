import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp11Form } from './../../forms/mssp11-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section11',
  templateUrl: './mssp-section11.component.html',
  styleUrls: ['./mssp-section11.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection11Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 11';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 11'
  ];

  public config: FieldConfig[] = Mssp11Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 11');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
