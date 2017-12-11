import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp3Form } from './../../forms/mssp3-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section3',
  templateUrl: './mssp-section3.component.html',
  styleUrls: ['./mssp-section3.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection3Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 3';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 3'
  ];

  public config: FieldConfig[] = Mssp3Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 3');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
