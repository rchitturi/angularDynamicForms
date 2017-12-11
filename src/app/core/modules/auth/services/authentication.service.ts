import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { AuthService, SharedService, LocalService, OauthService } from 'ng2-ui-auth';

import { AppState } from '../../../services/app.service';

import { ILoginData } from '../interfaces/interfaces';

import { MessageEvent } from '../../../services/event-listeners/app.events.service';

@Injectable()
export class AuthenticationService extends AuthService {

  public UserLoggedInSource = new Subject<boolean>();
  // public UserLoggedIn$ = this.UserLoggedInSource.asObservable();

  constructor(
    public messenger: MessageEvent,
    private authState: AppState,
    private lShared: SharedService,
    private lLocal: LocalService,
    private lOauth: OauthService
  ) {
    super(lShared, lLocal, lOauth);
  }

  public loginUser(loggedIn: boolean) {
    console.log(this.isAuthenticated());
    this.authState.set('auth', {
      loggedIn: this.isAuthenticated()
    });
    this.messenger.fire('loggedIn', loggedIn);
  }

  public UserLoggedIn$() {
    return this.messenger.on().map((res) => {
      return res;
    });
  }

  public get state() {
    return this.authState.state;
  }

  public setState( key: any, data: any ) {
    console.log(1111, key, data);
    return this.authState.set(key, data);
  }

  public loginProcess( loginData: ILoginData, loginObj: any ) {
    return this.login(loginData, loginObj)
      .map((res) => {
        console.log(res);
      });
  }

  public logoutProcess() {
    return this.logout()
      .map((res) => res);
  }

  public destroy() {
    delete this.authState._state.auth;
  }

}
