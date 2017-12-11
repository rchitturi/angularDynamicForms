import { Routes, RouterModule } from '@angular/router';
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

import { ContactExecutiveComponent } from './components/mssp-section1/components/contact-executive/contact-executive.component';
import { ContactCmsLiaisonComponent } from './components/mssp-section1/components/contact-cms-liaison/contact-cms-liaison.component';
import { ContactAppContactComponent } from './components/mssp-section1/components/contact-app-contact/contact-app-contact.component';
import { ContactItComponent } from './components/mssp-section1/components/contact-it/contact-it.component';
import { ContactFinancialComponent } from './components/mssp-section1/components/contact-financial/contact-financial.component';
import { ContactComplianceComponent } from './components/mssp-section1/components/contact-compliance/contact-compliance.component';
import { ContactAuthorizedToSignComponent }
  from './components/mssp-section1/components/contact-authorized-to-sign/contact-authorized-to-sign.component';
import { ContactDuaRequestorComponent } from './components/mssp-section1/components/contact-dua-requestor/contact-dua-requestor.component';
import { ContactDuaCustodianComponent } from './components/mssp-section1/components/contact-dua-custodian/contact-dua-custodian.component';
import { ContactMedicalDirectorComponent }
  from './components/mssp-section1/components/contact-medical-director/contact-medical-director.component';
import { AcoEntityComponent } from './components/mssp-section1/components/aco-entity/aco-entity.component';

const ROUTER: Routes = [
  {
    path: '', children: [
      {
        path: 'section-1', component: MsspSection1Component,
        data: {
          title: 'MSSP Section 1'
        },
        children: [
          {
            path: 'aco-entity', component: AcoEntityComponent,
            data: {
              title: 'ACO Entity'
            }, outlet: 'Contact'
          },
          {
            path: 'executive', component: ContactExecutiveComponent,
            data: {
              title: 'ACO Executive'
            }, outlet: 'Contact'
          },
          {
            path: 'cms-liaison', component: ContactCmsLiaisonComponent,
            data: {
              title: 'CMS Liaison'
            }, outlet: 'Contact'
          },
          {
            path: 'application', component: ContactAppContactComponent,
            data: {
              title: 'Application Contact'
            }, outlet: 'Contact'
          },
          {
            path: 'it', component: ContactItComponent,
            data: {
              title: 'Information Technology'
            }, outlet: 'Contact'
          },
          {
            path: 'financial', component: ContactFinancialComponent,
            data: {
              title: 'Financial'
            }, outlet: 'Contact'
          },
          {
            path: 'compliance', component: ContactComplianceComponent,
            data: {
              title: 'Compliance'
            }, outlet: 'Contact'
          },
          {
            path: 'authorized-to-sign', component: ContactAuthorizedToSignComponent,
            data: {
              title: 'Authorized to Sign'
            }, outlet: 'Contact'
          },
          {
            path: 'dua-requestor', component: ContactDuaRequestorComponent,
            data: {
              title: 'DUA Requestor'
            }, outlet: 'Contact'
          },
          {
            path: 'dua-custodian', component: ContactDuaCustodianComponent,
            data: {
              title: 'DUA Custodian'
            }, outlet: 'Contact'
          },
          {
            path: 'medical-director', component: ContactMedicalDirectorComponent,
            data: {
              title: 'Medical Director'
            }, outlet: 'Contact'
          },
        ]
      }, {
        path: 'section-2', component: MsspSection2Component,
        data: {
          title: 'MSSP Section 2'
        }
      },
      {
        path: 'section-3', component: MsspSection3Component,
        data: {
          title: 'MSSP Section 3'
        }
      },
      {
        path: 'section-4', component: MsspSection4Component,
        data: {
          title: 'MSSP Section 4'
        }
      },
      {
        path: 'section-5', component: MsspSection5Component,
        data: {
          title: 'MSSP Section 5'
        }
      },
      {
        path: 'section-6', component: MsspSection6Component,
        data: {
          title: 'MSSP Section 6'
        }
      },
      {
        path: 'section-7', component: MsspSection7Component,
        data: {
          title: 'MSSP Section 7'
        }
      }
      ,
      {
        path: 'section-2', component: MsspSection2Component,
        data: {
          title: 'MSSP Section 2'
        }
      },
      {
        path: 'section-3', component: MsspSection3Component,
        data: {
          title: 'MSSP Section 3'
        }
      },
      {
        path: 'section-4', component: MsspSection4Component,
        data: {
          title: 'MSSP Section 4'
        }
      },
      {
        path: 'section-5', component: MsspSection5Component,
        data: {
          title: 'MSSP Section 5'
        }
      },
      {
        path: 'section-6', component: MsspSection6Component,
        data: {
          title: 'MSSP Section 6'
        }
      },
      {
        path: 'section-7', component: MsspSection7Component,
        data: {
          title: 'MSSP Section 7'
        }
      },
      {
        path: 'section-8', component: MsspSection8Component,
        data: {
          title: 'MSSP Section 8'
        }
      },
      {
        path: 'section-9', component: MsspSection9Component,
        data: {
          title: 'MSSP Section 9'
        }
      },
      {
        path: 'section-10', component: MsspSection10Component,
        data: {
          title: 'MSSP Section 10'
        }
      },
      {
        path: 'section-11', component: MsspSection11Component,
        data: {
          title: 'MSSP Section 11'
        }
      },
      {
        path: 'section-12', component: MsspSection12Component,
        data: {
          title: 'MSSP Section 12'
        }
      },

    ]
  },
];

export const msspRouter = RouterModule.forChild(ROUTER);
