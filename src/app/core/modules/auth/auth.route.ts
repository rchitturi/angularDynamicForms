import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const ROUTES: Routes = [
  { path: '', children: [
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [NoAuthGuard],
      data: {
        title: 'Login'
      }
    },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [AuthGuard],
      data: {
        title: 'Logout'
      }
    }
  ]}
];

export const authRoutes = RouterModule.forChild(ROUTES);
