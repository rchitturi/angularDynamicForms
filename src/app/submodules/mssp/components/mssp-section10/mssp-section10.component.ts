import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { Mssp10Form } from './../../forms/mssp10-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section10',
  templateUrl: './mssp-section10.component.html',
  styleUrls: ['./mssp-section10.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection10Component implements OnInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;
  public section: string = 'MSSP Section 10';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 10'
  ];

  public config: FieldConfig[] = Mssp10Form;

  constructor(
    public validator: ValidatorsService
  ) {
    console.log();
  }
  public ngOnInit() {
    console.log('mssp 10');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
