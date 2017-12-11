import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../modules/auth/services/authentication.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  providers: [
    AuthenticationService
  ]
})
export class ToolbarComponent implements OnInit {
  public isMenuCollapsed: boolean = true;
  public signedIn = false;
  public userRole = 'Guest';
  public activeNotifications: any[] = [];

  public loggedIn: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthenticationService
  ) {
    auth.setState('test', 1);
    console.log(auth.state);
    auth.UserLoggedIn$().subscribe((login) => {
      console.log(login);
      if (login.key === 'loggedIn' && login.data) {
        console.log(auth.state, auth.state);
      }
    });
    setTimeout(() => {
      console.log(auth.state);
    }, 10000);
  }

  public ngOnInit() {
    let userinfo = JSON.parse(localStorage.getItem('currentUser'));
    if (userinfo) {
      this.signedIn = true;
      this.userRole = userinfo.userrole;
    }
    this.getNotifications();
  }

  public logout() {
    // this.authService.logout();
    this.router.navigate(['/']);
  }

  public getNotifications() {
    // this.acoService.getDashboardNotifications().
    // subscribe((data) => {
    //     this.activeNotifications = data.active;
    //   }
    // );
  }
}
