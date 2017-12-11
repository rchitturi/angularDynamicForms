import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';

import { cmsRouter } from './cms.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    cmsRouter
  ],
  declarations: [DashboardComponent]
})
export class CmsModule { }
