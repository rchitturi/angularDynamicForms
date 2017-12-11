import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { FieldConfig } from '../../models/field-config.interface';

describe('DynamicFormsComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ DynamicFormComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should log ngOnInit', () => {
    // spyOn(console, 'log');
    // expect(console.log).not.toHaveBeenCalled();

    // expect(console.log).toHaveBeenCalled();

    spyOn(component, 'createGroup').and.callThrough();
    expect(component.createGroup).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(component.createGroup).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('should call createGroup', () => {
  //   const group = this.fb.group({});
  //   spyOn(group, 'addControl')
  //   component.createGroup();
  //   expect(group.addControl).toHaveBeenCalled();
  // });

  it('should log ngOnChanges', () => {
    component.ngOnChanges();
  });

  it('should log createControl', () => {
    const config: FieldConfig = {
        type: 'input',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your name',
        validation: [Validators.required]
      };
    component.createControl(config);
  });

  it('should log handleSubmit', () => {
    const config: FieldConfig = {
      label: 'Submit',
      name: 'submit',
      buttonType: 'submit',
      type: 'button'
    };

    spyOn(component, 'handleSubmit');

    component.form.addControl('name', component.createControl(config));

    // let button = fixture.nativeElement.querySelector('button');
    // button.click();
    //
    // fixture.whenStable().then(() => {
    //   expect(component.handleSubmit).toHaveBeenCalled();
    // });
  });

  it('should log setDisabled', () => {
    const config: FieldConfig = {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required]
    };
    component.createControl(config);
    component.setDisabled('name', true);
  });

  it('should log setDisabled false', () => {
    const config: FieldConfig = {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required],
      disabled: true
    };
    component.form.addControl('name', component.createControl(config));
    // component.form.controls['submit'].disable(false);
    // component.createControl(config);
    component.setDisabled('name', false);
  });

  it('should get changes', () => {
    const c = component.changes;
    // expect(c).toEqual(null);
  });

  it('should get valid', () => {
    const c = component.valid;
    expect(c).toEqual(true);
  });

  it('should get value', () => {
    const c = component.value;
    expect(c).toEqual({ });
  });

  it('should call setValue', () => {
    const config: FieldConfig = {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required],
      disabled: true
    };
    component.form.addControl('name', component.createControl(config));
    const c = component.setValue('name', 'test');
    // expect(c).toEqual({ });
  });

  it('should call setValue', () => {
    const config: FieldConfig[] = [
      {
        type: 'input',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your name',
        validation: [Validators.required, Validators.minLength(4)]
      },
      {
        type: 'select',
        label: 'Favourite Food',
        name: 'food',
        options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        placeholder: 'Select an option',
        validation: [Validators.required]
      },
      {
        label: 'Submit',
        name: 'submit',
        buttonType: 'submit',
        type: 'button'
      },
      {
        label: 'Cancel',
        name: 'cancel',
        buttonType: 'button',
        type: 'button'
      }
    ];

    component.config = config;
    const c = component.setDisabled('name', true);
    // expect(c).toEqual({ });
  });
});
