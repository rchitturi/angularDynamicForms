import {
  Component,
  OnInit, ViewChild,
  ViewEncapsulation, AfterViewInit,
  ElementRef, ChangeDetectorRef,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AppAction } from '../../../../core/services/app.svc.service';
import { AppState } from '../../../../core/services/app.service';
// import { Api, ApiService } from '../../services/api-services/index';
import { ApiConstants } from '../../../../core/constants';
import { Title } from '../title/index';
import { Task } from 'protractor/built/taskScheduler';

import { ValidatorsService } from '../../../../core/modules/dynamic-form/services/validators.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { TabsetComponent } from 'ngx-bootstrap';

import { NotificationsService } from 'angular2-notifications';

import { FieldConfig } from '../../../../core/modules/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../../core/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'demo',
  providers: [
    Title,
    // Api,
    // ApiService
    AppAction,
    ValidatorsService
  ],
  styleUrls: [ './demo.component.scss' ],
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit, AfterViewInit {
  // Set our default values
  public localState = { value: '' };

  public weather: any = [];

  public city: string;

  public data: any = {};

  public tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public modalRef: BsModalRef;

  public itemStringsLeft: any[] = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  public itemStringsRight: any[] = [
    'Mr. O',
    'Tomato'
  ];

  @ViewChild(DynamicFormComponent)
  public form: DynamicFormComponent;

  public config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      /**
       * Default value: (optional)
       * ex: value: null, value: '', value: 'some value', or don't include at all.
       */
      value: 'testing',
      placeholder: 'Enter your name',
      /**
       * Note: formType supports all html5 input types
       * - text
       * - number
       * - date --> use date component instead to support cross browser
       * - datetime-local --> use date component instead to support cross browser
       * - color
       * - email
       * - month
       * - range
       * - search
       * etc...
       */
      formType: 'text',
      /**
       * NOTE: to add custom validator just add this.validator.regEx(/{regex}/i) as an array item.
       * replace {regex} with regular expression
       */
      validation: [Validators.required, Validators.minLength(4)],
      validationMsg: [
        {
          label: 'Required',
          error: 'required',
          msg: 'this is required'
        }
      ],
      class: ['test', 'test2']
    },
    // {
    //   type: 'date',
    //   label: 'Date Of Birth',
    //   name: 'DateofBirth',
    //   placeholder: 'Enter your DOB',
    //   // validation: [Validators.required],
    //   value: '2002-04-11T10:20:30Z',
    //   dateConfig: {
    //     /**
    //      * Uses moment date format
    //      */
    //     format: 'MM/DD/YYYY'
    //   }
    // },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required],
      // validationMsg: [
      //   {
      //     label: 'Required',
      //     error: 'required',
      //     msg: 'this is required'
      //   }
      // ],
      /**
       * select element only accepts disabled so readonly or disabled will disable it
       */
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'descr',
      placeholder: 'Description',
      validation: [Validators.required, Validators.minLength(4)],
      validationMsg: [
        {
          label: 'Required',
          error: 'required',
          msg: 'this is required'
        },
        {
          label: 'min-length',
          error: 'minlength',
          msg: 'min-length'
        }
      ],
      class: ['test', 'test2']
    },
    {
      type: 'checkbox',
      label: 'Description',
      name: 'checkboxes',
      checkboxes: [
        {
          label: 'one',
          value: 1
        },
        {
          label: 'two',
          value: 2
        },
        {
          label: 'three',
          value: 3
        }
      ],
      validation: [(control: FormControl): {[key: string]: boolean} => {
        return {'Must be checked': true};
      }
    ],
      class: ['test', 'test2'],
      inline: true,
      // value: [2]
    },
    {
      type: 'radio',
      label: 'Description',
      name: 'radios',
      radios: [
        {
          label: 'one',
          value: 1
        },
        {
          label: 'two',
          value: 2
        },
        {
          label: 'three',
          value: 3
        }
      ],
      validation: [Validators.required],
      class: ['test', 'test2'],
      inline: true,
      value: 3
    },
    {
      label: 'Signature pad',
      name: 'Signature pad',
      type: 'signpad',
      validation: [Validators.required],
    },
    {
      type: 'date',
      label: 'Date of Birth',
      name: 'DOB',
      validation: [Validators.required],
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      btnConfig: {
        type: 'submit'
      }
    },
    {
      label: 'Cancel',
      name: 'cancel',
      buttonType: 'button',
      class: ['test'],
      type: 'button',
      btnConfig: {
        type: 'button',
        btnFunction: () => {
          console.log('hello from button');
        }
      }
    }
  ];

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    public appAction: AppAction,
    public validator: ValidatorsService,
    // public cart: CartService,
    // private api: Api,
    // private apiConst: ApiConstants,
    private ele: ElementRef,
    private render: Renderer2,
    private modalService: BsModalService,
    private notifier: NotificationsService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.appAction.getWeather('Dallas, TX', 'json', '7').subscribe((posts) => {
      // console.log(posts);
      this.city    = posts.city.name;
      this.weather = posts.list;
      this.data    = posts;
    });

    this.appAction.getUser()
      .subscribe((profile) => {
        // console.log(profile);
      });

    // this.api.fetch( 'get', {
    //   api: 'profile'
    // }).subscribe((user) => {
    //   console.log(user);
    // });
    //
    // this.api.fetch( 'post', {
    //   api: 'profile',
    //   data: {
    //     id: 1
    //   }
    // }).subscribe((user) => {
    //   console.log(user);
    // });
    // this.form.setValue('name', 'Philip Choi');
  }

  public ngAfterViewInit(): void {
    let previousValid = this.form.valid;
    console.log(previousValid);
    this.form.changes.subscribe(() => {
      console.log(this.form.valid, previousValid, this.form);
      if (this.form.valid !== previousValid) {
        console.log(1);
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      } else {
        console.log(2);
      }
    });

    this.form.setDisabled('submit', true);

    this.cdr.detectChanges();
  }

  public mustBeChecked(control: FormControl): {[key: string]: boolean} {
    if (control.value.length === 0) {
      return {'Must be checked': true};
    } else {
      return null;
    }
  }

  public submit(value: {[name: string]: any}) {
    console.log(value);
  }

  public submitState(value: string) {
    // console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public alertMe(): void {
    alert('You\'ve selected the alert tab!');
  }

  public openToasterSuccess() {
    this.notifier.success('Success', 'Success Toaster');
  }

  public openToasterWarning() {
    this.notifier.warn('Warn', 'Warn Toaster');
  }

  public openToasterError() {
    this.notifier.error('Error', 'Error Toaster');
  }

  public openToasterInfo() {
    this.notifier.info('Info', 'Info Toaster');
  }

  public openToasterAlert() {
    this.notifier.alert('Alert', 'Alert Toaster');
  }

  public openToasterBare() {
    this.notifier.bare('Bare', 'Bare Toaster');
  }

}
