import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { demoRouter } from './demo.routes';

import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { DynamicFormModule } from '../../core/modules/dynamic-form/dynamic-form.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoComponent } from './component/demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicFormModule,
    Ng2BootstrapModule.forRoot(),
    SortableModule.forRoot(),
    demoRouter,
    FlexLayoutModule
  ],
  declarations: [
    DemoComponent
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
