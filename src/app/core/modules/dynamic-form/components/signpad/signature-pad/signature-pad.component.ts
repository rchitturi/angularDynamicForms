import { FieldConfig } from './../../../models/field-config.interface';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Component, OnInit, ViewChild, Input, forwardRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
// tslint:disable-next-line:no-empty
const noop = () => { } ;
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => SignaturePadComponent),
      multi: true,
    },
  ],
})
export class SignaturePadComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  public config: FieldConfig;
  public group: FormGroup;
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  @Input()
  public signValue: any;

  public options: Object = {
    backgroundColor: '#f3f3f3',
    canvasHeight: '100',
    canvasWidth: '500'
  };

  public _signature: any = null;

  private propagateChange: (_: any) => void = noop;

  get signature(): any {
    return this._signature;
  }

  set signature(value: any) {
    this._signature = value;
    // console.log('set signature to ' + this._signature);
    // console.log('signature data :');
    // console.log(this.signaturePad.toData());
    this.propagateChange(this.signature);
  }

  public ngOnInit() {
    // console.log(this.signaturePad);
    if (this.signValue) {
      this._signature = this.signValue;
      // console.log(this.signature);
      // this.signaturePad.fromDataURL(this.signature);
    }
  }

  public ngAfterViewInit() {
    // console.log(this.signaturePad);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    // this.signaturePad.fromDataURL(this.signature);
  }
  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // no-op
  }

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
  }

  public clear(): void {
    this.signaturePad.clear();
    this.signature = '';
  }

}
