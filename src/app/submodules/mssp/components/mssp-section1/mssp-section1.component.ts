import { DynamicFormComponent } from './../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { ValidatorsService } from './../../../../core/modules/dynamic-form/services/validators.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sd-mssp-section1',
  templateUrl: './mssp-section1.component.html',
  styleUrls: ['./mssp-section1.component.scss'],
  providers: [
    ValidatorsService
  ]
})
export class MsspSection1Component implements OnInit {
  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public section: string = 'MSSP Section 1';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 1'
  ];

  // constructor() { }

  public ngOnInit() {
    console.log('mssp 1');
  }

}
