import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreadcrumbModule } from '../../core/modules/breadcrumb/breadcrumb.module';

import { DynamicFormModule } from '../../core/modules/dynamic-form/dynamic-form.module';

import { noiaRouter } from './noia.routes';
import { NoiaComponent } from './components/noia/noia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicFormModule,
    noiaRouter,
    BreadcrumbModule
  ],
  declarations: [NoiaComponent]
})
export class NoiaModule { }
