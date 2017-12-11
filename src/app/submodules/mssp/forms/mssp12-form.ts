import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp12Form = [
  {
    label: 'Section 8',
    name: 'section8',
    type: 'title',
    html: `
        <h2>Section 12 – Certify Your Application</h2>
      `
  },
  {
    label: 'Section 8',
    name: 'section8',
    type: 'title',
    html: `
    <div class="alert alert-warning">
    <strong class="required">NOTE:</strong> We will not process 
    your application if you do not complete this certification in ACO-MS. This page will appear at the
end of your application. Select “I agree”, or “I disagree.”  You certify your application when you select “I agree”.
  </div>
  <h4 class="stack-space">I have read the contents of this application. I certify that I am legally authorized to execute this document and to
  bind my ACO to comply with the applicable laws and regulations of the Medicare program. By my signature, I
  certify that the information contained herein is true, accurate, and complete, and I authorize the Centers for
  Medicare &amp; Medicaid Services (CMS) to verify this information. If I become aware that any information in this
  application is not true, accurate, or complete, I agree to notify CMS of this fact immediately and to provide the
  correct and/or complete information. If my ACO is newly formed according to the definition in the Antitrust Policy
  Statement, I understand and agree that CMS will share the content of this application, including all information and
  documents submitted with this application, with the Federal Trade Commission and the Department of Justice.</h4>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section12-aco-accepting-applications',
    radios: [
      {
        label: 'Yes, I Agree ',
        value: 'yes'
      },
      {
        label: `No, I Disagree  `,
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
