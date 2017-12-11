import {
  fakeAsync,
  async,
  inject,
  tick,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DynamicFieldDirective } from './dynamic-field.directive';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

describe('DynamicFieldDirective', () => {
  let directive: DynamicFieldDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    template: '<div dynamic-field>Content</div>'
  })
  class TestComponent { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicFieldDirective,
        TestComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`should be readly initialized`, () => {
  //   expect(fixture).toBeDefined();
  //   expect(component).toBeDefined();
  // });

  it('should create an instance', () => {
    const config: any = 1;
    const group: any = 1;
    //
    directive = new DynamicFieldDirective(config, group);

    spyOn(directive, 'ngOnInit');

    expect(directive).toBeTruthy();

    directive.ngOnInit();

    expect(directive.ngOnInit).toHaveBeenCalled();
  });

  it('should be able to test directive', async(() => {
    // TestBed.overrideComponent(TestComponent, {
    //   set: {
    //     template: '<div dynamic-field></div>'
    //   }
    // });

    // TestBed.compileComponents().then(() => {
    //   fixture = TestBed.createComponent(TestComponent);
    //   const directiveEl = fixture.debugElement.query(By.directive(DynamicFieldDirective));
    //   expect(directiveEl).not.toBeTruthy();
    //
    //   // const directiveInstance = directiveEl.injector.get(DynamicFieldDirective);
    //   // expect(directiveInstance.ngOnInit()).toHaveBeenCalled();
    //
    //   const config: any = 1;
    //   const group: any = 1;
    //
    //   directive = new DynamicFieldDirective(config, group);
    // });

  }));

});
