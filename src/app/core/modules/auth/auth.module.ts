import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { authRoutes } from './auth.route';

// Modules
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

// Components
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
// import { AuthComponent } from './components/src/app/core/modules/auth/components/auth/auth.component';

// Services
import { AuthenticationService } from './services/authentication.service';

// States
import { AuthState } from './states/auth.state';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    authRoutes
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    // AuthComponent
  ],
  exports: [],
  providers: [
    AuthGuard,
    NoAuthGuard,
    AuthenticationService,
    // AuthState
  ]
})
export class AuthModule {
  // public static routes = routes;
}
