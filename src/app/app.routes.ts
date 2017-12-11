import { Routes } from '@angular/router';
import { HomeComponent } from './submodules/home';
import { AboutComponent } from './submodules/about';
import { NoContentComponent } from './submodules/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  { path: 'aco', loadChildren: './submodules/aco#AcoModule' },
  { path: 'cms', loadChildren: './submodules/cms#CmsModule' },
  { path: 'noia', loadChildren: './submodules/noia#NoiaModule' },
  { path: 'mssp', loadChildren: './submodules/mssp#MsspModule' },
  { path: 'about', loadChildren: './submodules/about#AboutModule' },
  { path: 'detail', loadChildren: './submodules/+detail#DetailModule' },
  { path: 'barrel', loadChildren: './submodules/+barrel#BarrelModule' },
  { path: 'auth', loadChildren: './core/modules/auth#AuthModule' },
  { path: 'demo', loadChildren: './submodules/+demo#DemoModule' },
  { path: '**', component: NoContentComponent,
    data: {
      title: '404'
    }
  },
];
