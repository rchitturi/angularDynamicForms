import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export const DemoForm = [
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
    validation: [Validators.required],
    class: ['test', 'test2'],
    inline: true,
    inputConfig: {
      alignment: 'normal'
    }
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
    inputConfig: {
      alignment: 'normal'
    },
    value: 3
  },
  {
    label: 'Signature pad',
    name: 'Signature pad',
    type: 'signpad',
    validation: [Validators.required],
  },
  {
    type: 'file',
    label: 'Upload Resume',
    name: 'file',
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
