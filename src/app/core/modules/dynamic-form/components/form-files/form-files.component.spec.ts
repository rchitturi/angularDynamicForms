import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgUploaderModule } from 'ngx-uploader';

import { FormFilesComponent } from './form-files.component';

describe('FormFilesComponent', () => {
  let component: FormFilesComponent;
  let fixture: ComponentFixture<FormFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFilesComponent ],
      imports: [NgUploaderModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
