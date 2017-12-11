import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../../core/modules/dynamic-form/dynamic-form.module';

import { BreadcrumbModule } from '../../core/modules/breadcrumb/breadcrumb.module';
import { TabsModule, ButtonsModule } from 'ngx-bootstrap';

import { MsspContactsState } from './states/mssp-contacts.state';

import { msspRouter } from './mssp.routes';
import { MsspSection1Component } from './components/mssp-section1/mssp-section1.component';
import { MsspSection2Component } from './components/mssp-section2/mssp-section2.component';
import { MsspSection3Component } from './components/mssp-section3/mssp-section3.component';
import { MsspSection4Component } from './components/mssp-section4/mssp-section4.component';
import { MsspSection5Component } from './components/mssp-section5/mssp-section5.component';
import { MsspSection6Component } from './components/mssp-section6/mssp-section6.component';
import { MsspSection7Component } from './components/mssp-section7/mssp-section7.component';
import { MsspSection8Component } from './components/mssp-section8/mssp-section8.component';
import { MsspSection9Component } from './components/mssp-section9/mssp-section9.component';
import { MsspSection10Component } from './components/mssp-section10/mssp-section10.component';
import { MsspSection11Component } from './components/mssp-section11/mssp-section11.component';
import { MsspSection12Component } from './components/mssp-section12/mssp-section12.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ContactExecutiveComponent } from './components/mssp-section1/components/contact-executive/contact-executive.component';
import { ContactCmsLiaisonComponent } from './components/mssp-section1/components/contact-cms-liaison/contact-cms-liaison.component';
import { ContactAppContactComponent } from './components/mssp-section1/components/contact-app-contact/contact-app-contact.component';
import { ContactItComponent } from './components/mssp-section1/components/contact-it/contact-it.component';
import { ContactFinancialComponent } from './components/mssp-section1/components/contact-financial/contact-financial.component';
import { ContactComplianceComponent }
from './components/mssp-section1/components/contact-compliance/contact-compliance.component';
import { ContactAuthorizedToSignComponent }
from './components/mssp-section1/components/contact-authorized-to-sign/contact-authorized-to-sign.component';
import { ContactDuaRequestorComponent } from './components/mssp-section1/components/contact-dua-requestor/contact-dua-requestor.component';
import { ContactDuaCustodianComponent } from './components/mssp-section1/components/contact-dua-custodian/contact-dua-custodian.component';
import { ContactMedicalDirectorComponent }
from './components/mssp-section1/components/contact-medical-director/contact-medical-director.component';
import { ContactsMenuComponent } from './components/mssp-section1/components/contacts-menu/contacts-menu.component';
import { AcoEntityComponent } from './components/mssp-section1/components/aco-entity/aco-entity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    msspRouter,
    BreadcrumbModule,
    TabsModule,
    ButtonsModule,
    DynamicFormModule
  ],
  declarations: [
    MsspSection1Component,
    MsspSection2Component,
    MsspSection3Component,
    MsspSection4Component,
    MsspSection5Component,
    MsspSection6Component,
    MsspSection7Component,
    MsspSection8Component,
    MsspSection9Component,
    MsspSection10Component,
    MsspSection11Component,
    MsspSection12Component,
    ProgressBarComponent,
    ContactExecutiveComponent,
    ContactCmsLiaisonComponent,
    ContactAppContactComponent,
    ContactItComponent,
    ContactFinancialComponent,
    ContactComplianceComponent,
    ContactAuthorizedToSignComponent,
    ContactDuaRequestorComponent,
    ContactDuaCustodianComponent,
    ContactMedicalDirectorComponent,
    ContactsMenuComponent,
    AcoEntityComponent
  ],
  providers: [
    MsspContactsState
  ]
})
export class MsspModule { }
