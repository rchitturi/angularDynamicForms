import { element } from 'protractor';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FieldConfig } from './../../models/field-config.interface';
import { Field } from './../../models/field.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-form-input-date',
  templateUrl: './form-input-date.component.html',
  styleUrls: ['./form-input-date.component.scss'],
  providers: [DatePipe]
})
export class FormInputDateComponent implements Field, OnInit {
  public config: FieldConfig;
  public group: FormGroup;
  public type: string;
  public onDate: boolean = false;
  public Date: string;
  public opened: boolean = false;
  public starting: boolean = true;

  public ngOnInit(): void {
    if (this.config.value) {
      console.log(moment(this.config.value).format(this.config.dateConfig.format));
      this.Date = moment(this.config.value).format(this.config.dateConfig.format);
      this.group.get(this.config.name).patchValue(this.Date);
    }
  }

  public open(): void {
    this.opened = !this.opened;
  }
  public close() {
    if (!this.onDate) {
      this.opened = false;
    } else {
      this.onDate = !this.onDate;
    }

  }

  // public getDate(): number {
    // return this.Date && this.Date.getTime() || new Date().getTime();
  // }

  public onSelectionDone(a) {
    console.log(a);
    this.Date = a;
    this.group.get(this.config.name).patchValue(moment(this.Date));
    // this.config.value = this.Date;
    this.starting = false;
    this.open();
  }

  public onDatePicker() {
    this.onDate = true;
  }

  public clearDate() {
    this.Date = null;
    this.group.get(this.config.name).patchValue('');
  }

}
