import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ILoginData } from '../../interfaces/interfaces';
import { ApiConstants } from '../../../../constants/app.api.constants';
import { ErrorHandlerService } from '../../../../services/error-handler.service';

import { FieldConfig } from '../../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../dynamic-form/containers/dynamic-form/dynamic-form.component';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public config: FieldConfig[] = [
    {
      type: 'input',
      label: 'User ID',
      name: 'username',
      placeholder: 'Enter your Username',
      formType: 'text',
      validation: [Validators.required],
      validationMsg: [
        {
          label: 'Required',
          error: 'required',
          msg: 'Username is required'
        }
      ]
    },
    {
      type: 'input',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your Password',
      formType: 'password',
      validation: [Validators.required],
      validationMsg: [
        {
          label: 'Required',
          error: 'required',
          msg: 'Password is required'
        }
      ]
    },
    {
      label: 'Sign In',
      name: 'submit',
      buttonType: 'submit',
      type: 'button',
      btnConfig: {
        type: 'submit'
      }
    }
  ];

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private exception: ErrorHandlerService,
    // private authenticate: AuthenticationService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    console.log('login...');
  }

  public ngAfterViewInit(): void {
    let previousValid = this.form.valid;

    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);

    this.cdr.detectChanges();
  }

  public login(loginData: ILoginData) {
    console.log(ApiConstants._ENDPOINT('login'));
    this.auth.loginProcess(loginData, {
      url: ApiConstants._ENDPOINT('login')
    })
    .subscribe({
      error: (err: any) => this.exception.handleError(err),
      complete: () => {
        console.log('login', this.auth.isAuthenticated());
        this.auth.loginUser(true);
        this.router.navigateByUrl('dashboard');
      }
    });
  }

}
