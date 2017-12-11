import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp10Form = [
  {
    label: 'Section 10',
    name: 'section10',
    type: 'title',
    html: `
        <h2>Section 10 – Information About Your Data Sharing</h2>
      `
  },
  {
    label: 'Section 10',
    name: 'section10',
    type: 'title',
    html: `
        <h3>You certify that you are requesting the following minimum necessary data:</h3>
      `
  },
  {
    label: 'Section 10',
    name: 'section10',
    type: 'title',
    html: `
    <p class="tight"><strong> For Tracks 1 and 2</strong>&nbsp;</p>
    <ul>
    <li>The name, date of birth, sex and Health Insurance Claim Number
     (HICN) of beneficiaries who are preliminarily prospectively assigned and 
     beneficiaries that have received a primary care service during the previous
     12 months from an ACO participant that submits claims for primary care services used to determine the ACO’s assigned population.</li>
    <li>Information in the following categories for beneficiaries that are preliminarily prospectively assigned:
      <ul>
        <li>demographic data</li>
        <li>health status information</li>
        <li>utilization rates</li>
        <li>expenditure information</li>
      </ul>
    </li>
  </ul>
  <p class="tight"><strong>For Tracks 3 </strong></p>
  <ul>
  <li>The name, date of birth, sex and Health Insurance Claim Number (HICN) of beneficiaries who are prospectively assigned to the ACO.</li>
  <li>Information in the following categories for beneficiaries that are prospectively assigned:
    <ul>
      <li>demographic data</li>
      <li>health status information</li>
      <li>utilization rates</li>
      <li>expenditure information</li>
    </ul>
  </li>
</ul>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section10-aco-minimum-data',
    radios: [
      {
        label: `Yes, I certify that I'm requesting the minimum necessary data `,
        value: 'yes'
      },
      {
        label: `No, I cannot certify that I'm requesting the minimum necessary data `,
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
    label: 'Section 10',
    name: 'section10',
    type: 'title',
    html: `
        <h3>You certify that you are requesting beneficiary-identifiable Part A, B and/or D claims
         data referenced in the Application Reference Manual.</h3>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section9-aco-requesting-beneficiary',
    radios: [
      {
        label: `Yes`,
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
    <div class="alert alert-warning"> 
    <strong class="required">Note:</strong> 
    See the <a href="https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/sharedsavingsprogram
    /Downloads/MSSP-Reference-Table.pdf" target="_blank" title="this link opens in a new window.">
    Application Reference Manual</a> for additional guidance. </div>
      `
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
