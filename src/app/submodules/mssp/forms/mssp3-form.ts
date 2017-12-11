import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp3Form = [
  {
    label: 'Section 3',
    name: 'section3',
    type: 'title',
    html: `
        <h2>SECTION 3 - ACO meets the Antitrust Agencies’ definition of “newly formed”?</h2>
      `
  },
  {
    label: 'Section 3',
    name: 'section3',
    type: 'title',
    html: `
        <h3>Jointly Negotiated Contracts With A Private Payor(s)</h3>
      `
  },
  {
    label: 'Heading',
    name: 'Heading',
    type: 'title',
    html: `
        <h4>Is the ACO “newly formed”?</h4>
      `
  },
  {
    label: '',
    name: 'Description',
    type: 'title',
    html: `
        <p class="small tight">An ACO is not “newly formed” if it is comprised solely
         of providers and suppliers who jointly negotiated or jointly
          signed any contracts with a private payor(s), on or before
           March 23, 2010. If the ACO includes any providers or suppliers
            who were not part of the prior joint negotiation or joint contracting,
             it is newly formed.</p>
      `
  },
  {
    type: 'radio',
    label: '',
    name: 'section3-aco-newly-formed',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: 'No',
        value: 'no'
      }
    ],
    validation: [Validators.required],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'note',
    name: 'note',
    type: 'title',
    html: `
    <div class="alert alert-warning"> <span class="required">NOTE:</span>
     If you answer <strong>YES</strong>, you understand and agree that we
      will share a copy of your application (including all
      information and documents submitted with the application) with the Federal Trade Commission (FTC)
      and the Antitrust Division of the Department of Justice (DoJ) </div>
      `
  },
  {
    label: 'Continue to Step 4',
    name: 'Continue to Step 4',
    type: 'button',
    btnConfig: {
      type: 'submit'
    }
  },
  {
    label: 'Save and Exit',
    name: 'subimt',
    type: 'button',
    btnConfig: {
      type: 'submit',
      class: ['btn btn-success']
    }
  },
  {
    label: 'Cancel',
    name: 'submit',
    type: 'button',
    btnConfig: {
      type: 'button',
      class: ['btn btn-default']
    }
  }
];
