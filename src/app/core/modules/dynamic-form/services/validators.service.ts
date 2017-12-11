import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export abstract class Validator {
  public abstract regEx(regEx: RegExp): ValidatorFn;
}

@Injectable()
export class ValidatorsService extends Validator {

  // constructor() { }

  public regEx(regEx: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = regEx.test(control.value);
      return forbidden ? {regEx: {value: control.value}} : null;
    };
  }

}
