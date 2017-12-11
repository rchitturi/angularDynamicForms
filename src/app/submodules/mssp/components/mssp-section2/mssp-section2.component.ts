import { Mssp2Form } from './../../forms/mssp2-form';
import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from './../../../../core/modules/dynamic-form/models/field-config.interface';
import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section2',
  templateUrl: './mssp-section2.component.html',
  styleUrls: ['./mssp-section2.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection2Component implements OnInit {
  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public section: string = 'MSSP Section 2';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 2'
  ];

  // constructor() { }

  public ngOnInit() {
    console.log('mssp 1');
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
