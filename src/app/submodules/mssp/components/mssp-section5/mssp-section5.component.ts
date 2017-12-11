import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp5Form } from './../../forms/mssp5-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section5',
  templateUrl: './mssp-section5.component.html',
  styleUrls: ['./mssp-section5.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection5Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 5';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 5'
  ];

  public config: FieldConfig[] = Mssp5Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 5');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
