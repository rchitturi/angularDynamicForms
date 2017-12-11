import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AuthService, SharedService, LocalService, OauthService } from 'ng2-ui-auth';

import { MessageEvent, EventBroadcast } from '../../../services/event-listeners/app.events.service';
import { AppState } from '../../../services/app.service';

class MockAuthService {
  public mockName: string = 'Mocked Service';

  public authenticated: boolean = true;

  public isAuthenticated() {
    return this.authenticated;
  }
}

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        MessageEvent,
        EventBroadcast,
        AppState,
        { provide: AuthService, useClass: MockAuthService },
        { provide: SharedService, useClass: MockAuthService },
        { provide: LocalService, useClass: MockAuthService },
        { provide: OauthService, useClass: MockAuthService }
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
