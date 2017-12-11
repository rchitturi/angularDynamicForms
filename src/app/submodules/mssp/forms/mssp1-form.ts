import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp1Form = [
  {
    label: 'Section 1',
    name: 'section1',
    type: 'title',
    html: `
        <h2>SECTION 1 - Contact Information</h2>
      `
  },
  {
    label: 'ACO Details',
    name: 'aco-details',
    type: 'title',
    html: `
        <h3>ACO Address</h3>
      `
  },
  {
    type: 'input',
    label: 'Full Legal Business Name:',
    name: 'legal-business-name',
    placeholder: 'Enter Legal Business Name',
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
    label: 'Trade Name/DBA (if applicable):',
    name: 'trade-name',
    placeholder: 'Enter Trade Name',
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
