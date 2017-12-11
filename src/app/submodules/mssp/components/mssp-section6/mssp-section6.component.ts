import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp6Form } from './../../forms/mssp6-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section6',
  templateUrl: './mssp-section6.component.html',
  styleUrls: ['./mssp-section6.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection6Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 6';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 6'
  ];

  public config: FieldConfig[] = Mssp6Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 6');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
