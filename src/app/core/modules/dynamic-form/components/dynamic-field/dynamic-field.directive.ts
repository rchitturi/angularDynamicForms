import { FormInputDateComponent } from './../form-input-date/form-input-date.component';
import { SignpadComponent } from './../signpad/signpad.component';
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFilesComponent } from '../form-files/form-files.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormTextareaComponent } from '../form-textarea/form-textarea.component';
import { FormRadioComponent } from '../form-radio/form-radio.component';
import { FormCheckboxComponent } from '../form-checkbox/form-checkbox.component';
import { FormTitleComponent } from '../form-title/form-title.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  date: FormInputDateComponent,
  select: FormSelectComponent,
  textarea: FormTextareaComponent,
  radio: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  signpad: SignpadComponent,
  file: FormFilesComponent,
  title: FormTitleComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {

  @Input()
  public config: FieldConfig;

  @Input()
  public group: FormGroup;

  @Input()
  public type: string = 'horizontal';

  public component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  public ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.type = this.type;
    }
  }

  public ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.type = this.type;
  }
}
