import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpModule, Http, ConnectionBackend, RequestOptions } from '@angular/http';

import { AuthGuard } from './auth.guard';

import { AuthService, SharedService, StorageService, ConfigService, CustomConfig, LocalService, JwtHttp } from 'ng2-ui-auth';

class MockAuthService {
  public mockName: string = 'Mocked Service';

  public authenticated: boolean = true;

  public isAuthenticated() {
    return this.authenticated;
  }
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        // AuthService,
        // SharedService,
        // StorageService,
        // ConfigService,
        // CustomConfig,
        // LocalService,
        // JwtHttp,
        // MockBackend,
        // Http,
        // ConnectionBackend,
        // RequestOptions
        { provide: AuthService, useClass: MockAuthService }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('checks if a user is valid', async(inject([AuthGuard, Router], (auth, router) => {
      expect(auth.canActivate()).toBeTruthy();
    })
  ));

  it('checks if a user is invalid', async(inject([AuthGuard, Router, AuthService], (auth, router, authsvc) => {

      authsvc.authenticated = false;
      spyOn(router, 'navigateByUrl');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigateByUrl).toHaveBeenCalled();
    })
  ));
});
