import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const MsspContactForm = [
  {
    type: 'input',
    label: 'Prefix:',
    name: 'name-prefix',
    placeholder: 'e.g. Mr./Ms./Dr.',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'First Name:',
    name: 'first-name',
    placeholder: 'Enter First Name',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Last Name:',
    name: 'last-name',
    placeholder: 'Enter Last Name',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Title:',
    name: 'title',
    placeholder: 'e.g. CEO, CFO, COO',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Phone Number (Do not include dashes):',
    name: 'phone-number',
    placeholder: 'e.g. xxxxxxxxxx',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Phone Number Extension (Optional):',
    name: 'phone-ext',
    placeholder: 'xxxx',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Address 1 (P.O. Box not accepted):',
    name: 'address1',
    placeholder: 'Enter Street Name',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Address 2 (Optional):',
    name: 'address2',
    placeholder: 'Enter Apt, Suite, Etc...',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'City:',
    name: 'city',
    placeholder: 'Enter City',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'select',
    label: 'State',
    name: 'state',
    options: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL',
      'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
      'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT',
      'WA', 'WI', 'WV', 'WY'],
    placeholder: 'Select an option',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'ZIP/Postal Code:',
    name: 'postal-code',
    placeholder: 'Zip/Postal Code',
    formType: 'text',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  }
];
