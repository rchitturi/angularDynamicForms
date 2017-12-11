import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp8Form = [
  {
    label: 'Section 8',
    name: 'section8',
    type: 'title',
    html: `
        <h2>Section 8 – How Do You Plan to Manage Shared Savings?</h2>
      `
  },
  {
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
    <h3>Shared Savings</h3>
    <h4> Describe in a narrative how you plan to use shared savings payments, including:</h4>
    <ul>
    <li>How you intend to share savings with your ACO participants and ACO providers/suppliers, or to use the
      shared savings to reinvest in the ACO’s infrastructure, redesigning care processes, etc.</li>
    <li>The percentage of savings you intend to distribute to each category. If you intend to distribute shared
savings among ACO participants and ACO providers/suppliers, please describe the criteria you intend
      to use for distributing those payments.</li>
    <li>Describe how this plan will achieve the specific goals of the Shared Savings Program and how this plan
will achieve the general aims of better care for individuals, better health for populations, and lower
      growth in expenditures.</li>
  </ul>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section8-aco-plan',
    placeholder: 'Enter your context here',
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
    label: 'Section 8',
    name: 'section8',
    type: 'title',
    html: `
    <h3>Select your symmetrical Minimum Loss Rate (MLR)/Minimum Savings Rate (MSR)<br>
    <span class="small normal">(Select One)</span></h3>
      `
  },
  {
    label: 'note',
    name: 'note',
    type: 'title',
    html: `
    <div class="alert alert-warning">
    <strong class="required">Note:</strong> ACOs applying under Track 1 must select N/A. ACOs applying under Track 2 or Track 3 must
select any other option.
   </div>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section8-aco-loss',
    radios: [
      {
        label: ' 0.0% MLR/MSR',
        value: '0.0%'
      },
      {
        label: `0.5% MLR/MSR `,
        value: '0.5%'
      },
      {
        label: `1.0% MLR/MSR `,
        value: '1.0%'
      },
      {
        label: `1.5% MLR/MSR `,
        value: '1.5%'
      },
      {
        label: '2% MLR/MSR ',
        value: '2%'
      },
      {
        label: 'Symmetrical variable MLR/MSR (based on the size of your ACO’s assigned population)  ',
        value: 'variable'
      },
      {
        label: 'N/A (Select this option if you are applying under Track 1)   ',
        value: 'N/A'
      }
    ],
    validation: [Validators.required],
    class: ['normal'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Description',
    name: 'note',
    type: 'title',
    html: `
    <div class="col-xs-12">
    <h3>Banking Information</h3>
    <h4> You must establish a relationship with a banking partner 
    that meets the Internal Revenue Service (IRS) requirements 
    (bank, insurance company or other entity) as set out in the Treasury Reg. Secs. 1.408- 2(e)(2) through (e)(5).</h4>
    <p class="tight">This checking account is associated with the TIN designated for the ACO. Shared savings will be
      deposited directly to the account you indicate.</p>
    <ul>
      <li>Complete the Electronic Funds Transfer (EFT) Authorization Agreement Form CMS 588. Use the ACO
        Banking Form Guidance to help you complete the form.</li>
      <li><strong>We will not consider your application complete until we get this form.</strong> Send your completed Form
CMS 588, with your original signature and a voided check using tracked mail, such as certified mail,
        Federal Express or United Parcel Service, to:
<blockquote class="shaded">
<p>Centers for Medicare &amp; Medicaid Services<br>
CM/PBPPG, Mailstop C5-15-12<br>
7500 Security Blvd.<br>
Baltimore, MD 21244-1850<br>
<em> Attention</em>: Jonnice McQuay<br>
<em> Desk Location:</em> C4-02-02<br>
</p>
</blockquote>
        </li>
    </ul>
    
  </div>
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
