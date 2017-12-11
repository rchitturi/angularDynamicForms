import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpModule, Http, ConnectionBackend, RequestOptions } from '@angular/http';

import { NoAuthGuard } from './no-auth.guard';

import { AuthService, SharedService, StorageService, ConfigService, CustomConfig, LocalService, JwtHttp } from 'ng2-ui-auth';

class MockAuthService {
  public mockName: string = 'Mocked Service';

  public authenticated: boolean = true;

  public isAuthenticated() {
    return this.authenticated;
  }
}

describe('NoAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        NoAuthGuard,
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

  it('should ...', inject([NoAuthGuard], (guard: NoAuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('checks if a user is valid', async(inject([NoAuthGuard, Router, AuthService], (auth, router, authsvc) => {

      authsvc.authenticated = false;
      spyOn(router, 'navigateByUrl');

      expect(auth.canActivate()).toBeTruthy();
      // expect(router.navigateByUrl).toHaveBeenCalled();
    })
  ));

  it('checks if a user is invalid', async(inject([NoAuthGuard, Router, AuthService], (auth, router, authsvc) => {

      spyOn(router, 'navigateByUrl');
      expect(auth.canActivate()).toBeFalsy();
    })
  ));
});
