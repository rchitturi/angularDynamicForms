import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(

//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp7Form = [
  {
    label: 'Section 1',
    name: 'section1',
    type: 'title',
    html: `
        <h2>Section 7 - Information About Your Participation 
        in other Medicare Initiatives Involving Shared Savings</h2>
      `
  },
  {
    label: 'Section 7',
    name: 'section7',
    type: 'title',
    html: `
        <h3>Past Participation</h3>
      `
  },
  {
    label: 'Section 7',
    name: 'section7',
    type: 'title',
    html: `
        <h4>Has your ACO, ACO participants,
         or ACO provider/suppliers ever been 
         voluntarily or involuntarily terminated from the Shared Savings Program? §425.204(b)(3)</h4>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section7-aco-terminated',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: `No `,
        value: 'No'
      }
    ],
    validation: [Validators.required],
    class: ['normal'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 1',
    name: 'section1',
    type: 'title',
    html: `
        <h3>Current Participation</h3>
      `
  },
  {
    label: 'Section 1',
    name: 'section1',
    type: 'title',
    html: `
        <h4>Does your ACO or any of your ACO participants, under 
        the same or different name currently participate in any Medicare
         initiative involving a shared savings arrangement?
        
        </h4>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section7-aco-participate-other',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: `No `,
        value: 'No'
      }
    ],
    validation: [Validators.required],
    class: ['normal'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 7',
    name: 'section7',
    type: 'title',
    html: `
        <h3>Future Participation</h3>
      `
  },
  {
    label: '',
    name: 'section7-aco-participation-completed',
    type: 'title',
    html: `
        <h4>You certify that participation 
        in the program(s) in question 19 will be completed by the start date for which you are applying.</h4>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section7-aco-certify-aprticipication',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: `N/A `,
        value: 'No'
      }
    ],
    validation: [Validators.required],
    class: ['normal'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Submit',
    name: 'submit',
    type: 'button',
    btnConfig: {
      type: 'submit'
    }
  },
];
