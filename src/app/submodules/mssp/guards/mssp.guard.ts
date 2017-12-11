import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pairwise';

@Injectable()
export class MsspGuard implements CanActivate {

  private navRule: any = {
    '/signup': false,
    '/userDetails': false,
    '/securityQuestions': false,
    '/successMessage': false
  };

  private _previous: string;

  private _currentStep: string;

  private _referrer: string;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router
  ) {
    this._referrer = document.referrer;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._previous    = this.router.url;
    this._currentStep = state.url;
    // console.log(state.url);
    // console.log('Previous:', this._previous);
    // console.log('Current:', this._currentStep);
    switch(this._currentStep) {
      case '/signup':
        // console.log('signup');
        if(this._referrer !== '') {
          localStorage.setItem('registerReferrer', this._referrer);
        }
        break;
      case '/userDetails':
        // console.log('userDetails');
        if(this._previous !== '/signup') {
          this.router.navigate(['/signup']);
        }
        break;
      case '/securityQuestions':
        // console.log('securityQuestions');
        if(this._previous !== '/userDetails') {
          this.router.navigate(['/signup']);
        }
        break;
      default:
        // console.log('last');
        if(this._previous !== '/securityQuestions') {
          this.router.navigate(['/signup']);
        }
        break;
    }
    return true;
  }
}
