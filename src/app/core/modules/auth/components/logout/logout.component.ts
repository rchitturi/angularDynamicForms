import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../../services/error-handler.service';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private exception: ErrorHandlerService
  ) { }

  public ngOnInit() {
    console.log('logout...');
    this.auth.logoutProcess()
      .subscribe({
        error: (err: any) => this.exception.handleError(err),
        complete: () => {
          this.auth.destroy();
          this.router.navigateByUrl('/');
        }
      });
  }

}
