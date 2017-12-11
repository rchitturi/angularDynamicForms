import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp4Form } from './../../forms/mssp4-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section4',
  templateUrl: './mssp-section4.component.html',
  styleUrls: ['./mssp-section4.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection4Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 4';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 4'
  ];

  public config: FieldConfig[] = Mssp4Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 4');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
