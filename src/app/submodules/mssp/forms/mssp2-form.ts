import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp2Form = [
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
        <h2>SECTION 1 - Application Type</h2>
      `
  },
  {
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <label for="app-type" class="control-label text">
            What is your application type for the January 1, 2018 program start date? 
            <span class="normal">
                (Select one) 
						</span>
				</label>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'application-type',
    radios: [
      {
        label: 'New Shared Savings Program ACO',
        value: 'new'
      },
      {
        label: 'Re-applicant (Select only if you were terminated from the Shared Savings Program voluntarily or involuntarily and are re-applying)',
        value: 'reapplicant'
      },
      {
        label: 'Former Next Generation Accountable Care Organization',
        value: 'former'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
        <hr />
      `
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
        <h2>SECTION 2 - ACO Legal Entity Information</h2>
      `
  },
  {
    type: 'input',
    label: 'What is your ACO Taxpayer Identification Number (TIN)? (You must have a valid TIN to complete this question.)',
    name: 'tin',
    placeholder: 'Enter TIN here',
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
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
        <div class="alert alert-warning">
          <ul style="margin-left: -15px;">
            <li>This is the TIN established for the ACO, as a legal entity and will also be
              included on your CMS Form CMS-588 Electronic Funds Transfer (EFT)
              Authorization Agreement.</li>
            <li>Shared savings payments will be made to this TIN.</li>
            <li>You must have a valid TIN to complete your NOIA. We will not accept
                incomplete or invalid TINs. </li>
          </ul>
        </div>
      `
  },
  // {
  //   type: 'input',
  //   label: `What is the ACO’s date of formation? <span class="normal">
  //           (date noted on the Certificate of Incorporation or other formation documentation)</span>`,
  //   name: 'aco-date-of-formation',
  //   placeholder: 'mm/dd/yyyy',
  //   formType: 'text',
  //   validation: [Validators.required],
  //   validationMsg: [
  //     {
  //       label: 'Required',
  //       error: 'required',
  //       msg: 'this is required'
  //     }
  //   ],
  //   class: ['label-left', 'test2'],
  //   inputConfig: {
  //     alignment: 'column'
  //   }
  // },
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
        </p>
        </label>
      `
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h3>Merged or Acquired TINs</h3>
    <h4 class="stack-space">Does your ACO include any TINs that
     have been subsumed into an ACO Participant TIN through a merger or acquisition within the three (3) benchmarking years?</h4>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section9-aco-tins-submitted',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
    <h3>Employment Agreements</h3>
    <h4 class="stack-space">Your ACO providers/suppliers are employed by the ACO legal
     entity, and as a condition of employment, are they required to participate in the Medicare Shared Savings Program?</h4>
     <p>If you answered <strong>NO</strong> to both questions 4 and 6, choose <strong>YES</strong> or <strong>NO</strong> below. <br>
     If you answered <strong>YES</strong> to either question 4 or
     6, choose<strong> N/A</strong>. </p>
     <blockquote class="col-sm-10" style="float: right;">
     <p class="text-left"><em><strong>PREVIOUS QUESTIONS REFERENCED HERE</strong></em>:<br>
       4. Is your ACO formed among two or more ACO participants, and has a legal entity separate from any of its
       ACO participants?</p>
     <p class="text-left">6. If you answered NO to question 4, your ACO is not required to have a separate legal entity. However,
       please indicate whether your ACO has chosen to have a legal entity separate from the single ACO
       participant to allow the addition of ACO participants in the future. If you answered YES to question 4,
       select N/A.</p>
   </blockquote>

      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section9-aco-employed-legal',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: 'No',
        value: 'No'
      },
      {
        label: 'N/A',
        value: 'N/A'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h3>ACP Participant Agreement</h3>
    <h4 class="stack-space">Submit a sample of the agreements you are currently using between
     the ACO and ACO participants, Taxpayer Identification Number (TINs), ACO providers/suppliers, 
     other individuals and other entities performing functions or services related to ACO activities.</h4>
     <p>All ACO providers/suppliers (NPIs) that have reassigned their billings to the TIN of 
     an ACO participant must also agree to participate in the ACO and to comply with all applicable 
     laws and regulations, including the regulations in 42 CFR Part 425. </p>

      `
  },
  {
    type: 'file',
    label: 'Upload ACO Participants List',
    name: 'section9-aco-agreements',
    validation: [Validators.required],
    class: ['test', 'test2'],
  },
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
    <h4>Submit the ACO Participant Agreement Template to identify the location of program requirements in your
    ACO participant agreement found in 42 CFR Part 425. The ACO participant agreement with each ACO
    participant must include the following:</h4>
    <ul>
    <li><strong>a.</strong> An explicit requirement that the only parties to the agreement are the ACO and the ACO participant.</li>
    <li><strong>b.</strong> The agreement must be signed on behalf of the ACO and the ACO participant by individuals who are
      authorized to bind the ACO and the ACOparticipant, respectively.</li>
    <li><strong>c.</strong> An explicit requirement that the ACO’s participant agrees, and ensures that each ACO
      providers/suppliers that bill through the TIN of the ACO participant agrees to participate in the Shared
      Savings Program, and will comply with the requirements and conditions of the Medicare Shared
      Savings Program and all other applicable laws and regulations (42 CFR Part 425), including, but not
      limited to, those specified at §425.208(b); federal criminal law, the False Claims Act, the anti-kickback
      statute, the civil monetary penalties law, and the physician self-referral law.</li>
    <li><strong>d.</strong> The ACO participants’ and ACO providers’/suppliers’ rights and obligations in, and representation by
      the ACO, including without limitation, the quality reporting requirements (42 CFR Part 425), the
      beneficiary notification requirements (§425.312), and how participation in the Shared Savings
      Program affects the ability of the ACO participant and its ACO providers/suppliers to participate in
      other Medicare demonstration projects or programs that involve shared savings.</li>
    <li><strong>e.</strong> How the opportunity to get shared savings or other financial arrangements will encourage ACO
      participants and ACO providers/suppliers to follow the quality assurance and improvement program
      and evidence-based clinical guidelines.</li>
    <li><strong>f.</strong> An explicit requirement that the ACO participant must update its Medicare enrollment information,
      including the addition and deletion of ACO professionals and ACO provider/suppliers billing through
      the TIN of the ACO participant, on a timely basis in accordance with Medicare program requirements
      and to notify the ACO of any such changes within 30 days after the change.</li>
    <li><strong>g.</strong> Remedial actions that will apply to ACO participants and remedial actions the ACO participant will
      take against its ACO providers/suppliers, including imposition of a corrective action plan, denial of
      incentive payments, and termination of the ACO participant agreement, to address non-compliance
      with the requirements of the Medicare Shared Savings Program and other program integrity issues,
      including those identified by CMS.</li>
    <li><strong>h.</strong> The agreement must be for a term of at least one performance year and must articulate potential
      consequences for early termination from the ACO.</li>
    <li><strong>i.</strong> An explicit requirement for completion of a close-out process upon termination or expiration of the
      agreement that requires the ACO participant to furnish all data necessary to complete the annual
      assessment of the ACO's quality of care and addresses other relevant matters.</li>
  </ul>

      `
  },
  {
    type: 'file',
    label: 'Upload ACO Participants List',
    name: 'section9-aco-agreement-template',
    validation: [Validators.required],
    class: ['test', 'test2'],
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <div class="alert alert-warning"> <strong class="required">NOTE:</strong>
     Please refer to
      <a href="https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/sharedsavingsprogram/Downloads/MSSP-Reference-Table.pdf"
       target="_blank" title="this link opens in a new window.">
       Application Reference Manual</a> for details about ACO Participant Agreement requirements </div>
       <h3>Medicare Referrals</h3>
       <h4 class="stack-space"> Your ACO Participant Agreement(s)
        do not include language requiring Medicare referrals to ACO participants or their 
        associated ACO provider/suppliers or to any other provider or supplier, except under 
        the specific and limited circumstances expressly permitted by the regulations.</h4>

      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section9-aco-medical-language',
    radios: [
      {
        label: 'Yes',
        value: 'yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 9',
    name: 'section9',
    type: 'title',
    html: `
    <p>You certify that your ACO Participant Agreements comply with the requirements in 42 CFR 425.304(c)(2).</p>
    <h3>Executive ACO Participant Agreements</h3>
    <h4 class="stack-space"> Submit a signed ACO Participant Agreement for each ACO participant (TIN) entered on your ACO
    Participant List, which are signed on behalf of the ACO and ACO participant by individuals who are
    authorized to bind the ACO and the ACO participant, respectively. Include the first page and signature
    page for each agreement.</h4>
    <p>If you do not have an executed ACO Participant agreement with the ACO participant, the ACO participant (TIN)
    cannot be included on your ACO Participant List.</p>

      `
  },
  {
    type: 'file',
    label: 'Upload ACO Participants List',
    name: 'section9-aco-comply-requirments',
    validation: [Validators.required],
    class: ['test', 'test2'],
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
