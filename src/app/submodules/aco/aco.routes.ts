import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const ROUTER: Routes = [
  { path: '', children: [
    { path: 'dashboard', component: DashboardComponent,
      data: {
        title: 'ACO Dashboard'
      }
    },
  ]},
];

export const acoRouter = RouterModule.forChild(ROUTER);
