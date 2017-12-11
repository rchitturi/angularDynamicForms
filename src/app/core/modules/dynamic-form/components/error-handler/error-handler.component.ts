import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {
  public errorMessage: any;
  public showed = true;
  @Input()
  public config: any = {};

  @Input()
  public group: FormGroup;

  // constructor() { }

  public ngOnInit() {
    // console.log(this.config, this.group);
  }

  public checkErrors(messages) {
    let count = 0;
    for (let message of messages) {
      if (this.group.get(this.config.name).errors[message.error]) {
        this.errorMessage = message;
        count++;
      }
    }
    if (count > 0) {
      this.showed = true;
    } else {
      this.showed = false;
    }
    return this.showed;
  }

}
