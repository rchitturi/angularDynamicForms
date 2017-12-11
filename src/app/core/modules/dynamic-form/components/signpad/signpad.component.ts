import { Field } from './../../models/field.interface';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './../../models/field-config.interface';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signpad',
  templateUrl: './signpad.component.html',
  styleUrls: ['./signpad.component.scss']
})
export class SignpadComponent implements Field {
  public type: string;
  public config: FieldConfig;
  public group: FormGroup;
  public image = false;
  @ViewChild('signPad') public signPad: SignaturePad;

  public clearIt() {
    if (!this.image) {
    this.signPad.clear();
    }
    this.image = false;

  }

  public makeItTouched() {
    this.group.get(this.config.name).markAsTouched();
  }

}
