import { Routes, RouterModule } from '@angular/router';
import { NoiaComponent } from './components/noia/noia.component';

const ROUTER: Routes = [
  { path: '', children: [
    { path: '', component: NoiaComponent,
      data: {
        title: 'NOIA'
      }
    },
  ]},
];

export const noiaRouter = RouterModule.forChild(ROUTER);
