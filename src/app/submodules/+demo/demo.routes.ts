import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './component/demo/demo.component';

const ROUTER: Routes = [
  { path: '', children: [
    { path: '', component: DemoComponent,
      data: {
        title: 'Demo'
      }
    }
  ]},
];

export const demoRouter = RouterModule.forChild(ROUTER);
