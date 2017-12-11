import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp7Form } from './../../forms/mssp7-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section7',
  templateUrl: './mssp-section7.component.html',
  styleUrls: ['./mssp-section7.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection7Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 7';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 7'
  ];

  public config: FieldConfig[] = Mssp7Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 7');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
