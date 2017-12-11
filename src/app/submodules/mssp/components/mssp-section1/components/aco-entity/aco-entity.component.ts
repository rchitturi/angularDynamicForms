import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { FieldConfig } from '../../../../../../core/modules/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { ValidatorsService } from '../../../../../../core/modules/dynamic-form/services/validators.service';

import { slideInOutAnimation } from '../../../../animations/animations';

import { Mssp1Form } from '../../../../forms/mssp1-form';
import { MsspContactsState } from '../../../../states/mssp-contacts.state';

@Component({
  selector: 'sd-aco-entity',
  templateUrl: './aco-entity.component.html',
  styleUrls: ['./aco-entity.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class AcoEntityComponent implements OnInit, AfterViewInit {

  public section: string = 'MSSP Section 1';

  public breadcrumb: any[] = [
    'MSSP Initial Application',
    'Section 1'
  ];

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public config: FieldConfig[] = Mssp1Form;

  constructor(
    private state: MsspContactsState,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    console.log('mssp aco entity...');
  }

  public ngAfterViewInit(): void {
    let previousValid = this.form.valid;
    console.log(previousValid);
    this.form.changes.subscribe(() => {
      console.log(this.form.valid, previousValid, this.form);
      if (this.form.valid !== previousValid) {
        console.log(1);
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      } else {
        console.log(2);
      }
    });

    this.form.setDisabled('submit', true);

    this.cdr.detectChanges();
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
