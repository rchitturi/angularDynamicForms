import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  value?: any;
  deactivate?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  options?: string[];
  validation?: ValidatorFn[];
  validationMsg?: any[];
  buttonType?: string;
  class?: string[];
  radios?: any[];
  checkboxes?: any[];
  inline?: boolean;
  formType?: string;
  dateConfig?: any;
  btnConfig?: any;
  html?: string;
  inputConfig?: any;
  businessLogic?: any;
}
