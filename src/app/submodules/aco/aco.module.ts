import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './component/dashboard/dashboard.component';

import { acoRouter } from './aco.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    acoRouter
  ],
  declarations: [DashboardComponent]
})
export class AcoModule { }
