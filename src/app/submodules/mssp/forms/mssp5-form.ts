import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp5Form = [
  {
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <h2>Section 5 - Information About Your ACO's Governing Body</h2>
      `
  },
  {
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <h3>I certify that my ACO has an identifiable 
        governing body with ultimate authority to execute
         the functions of your ACO as defined in the Medicare 
         Shared Savings Program regulations at 42 CFR Part 425.</h3>
        
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section5-aco-authority',
    checkboxes: [
      {
        label: 'Yes',
        value: 'Yes'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Note',
    name: 'Note',
    type: 'title',
    html: `
    <div class="alert alert-warning">By selecting <strong>YES</strong>, you certify that:
    <p></p>
    <ul>
      <li>The governing body is the same as the governing body of the legal entity that is the ACO; </li>
      <li>The governing body is separate and unique to the ACO and must not be the same as the governing
        body of any ACO participant in the case of an ACO that comprises two or more ACO participants; </li>
      <li>The governing body has responsibility for oversight and strategic direction of the ACO, holding ACO
        management accountable for the ACO’s activities as described in 42 CFR Part 425; </li>
      <li>The governing body has a transparent governing process; </li>
      <li>The governing body members have a fiduciary duty to the ACO, including the duty of loyalty, and must
        act consistent with that fiduciary duty. </li>
    </ul>
  </div>
        
      `
  },
  {
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>Do any other individuals or entities
         have input or influence into decisions
          made by your ACO’s governing body?</h3>
        
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section5-aco-influence',
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
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <h3>I certify that my ACO established a mechanism for
         shared governance among the ACO participants that formed 
         the ACO and that my ACO provides for meaningful participation 
         in the composition and control of the ACO’s governing body for 
         ACO participants or their designated representatives .</h3>
        
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section5-aco-mechanism',
    checkboxes: [
      {
        label: 'Yes',
        value: 'Yes'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>Your ACO participants have at least 75% control of your ACO’s governing body.
        
        </h3>
        
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section5-aco-conrol',
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
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>Your governing body includes one or more 
        Medicare fee-for-service beneficiaries who is served by the ACO,
         who is not an ACO provider/supplier, who do not have a conflict of interest
         with your ACO, and who have no immediate family member with a conflict of interest with your ACO.
        </h3>
        
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section5-aco-fee-for-service',
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
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <h3>I certify that my ACO’s
         governing body has a conflict of interest policy that
          applies to members of the governing body.</h3>
        
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section5-aco-conflict',
    checkboxes: [
      {
        label: 'Yes',
        value: 'Yes'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'note',
    name: 'note',
    type: 'title',
    html: `
    <div class="alert alert-warning"> By selecting <strong>YES</strong>, you certify that your conflict of interest policy:
    <ul>
      <li>Requires each member of the governing body to disclose relevant financial interests;</li>
      <li>Provides a procedure to determine whether a conflict of interest exists, and sets forth a process to
        address any conflicts that arise; and</li>
      <li> Addresses remedial action for members of the governing body that fail to comply with the policy. </li>
    </ul>
  </div>
      `
  },
  {
    label: 'note',
    name: 'note',
    type: 'title',
    html: `
    <div class="col-xs-12 stack-space-lg">
    <h3>Submit the <a href="docs/Governing-Body-Template.zip"
     data-toggle="tooltip" target="_blank" title="Click to download
      a zip file with an XLS and CSV version of the template.">
      Governing Body Template</a> to identify the following:</h3>
    <ul>
      <li>All governing body members;</li>
      <li>Position each member holds on the governing body;</li>
      <li>Voting power of each governing body member; and</li>
      <li>Indicate which ACO participant the governing body member represents;
       or indicate if the governing body member is a Medicare beneficiary representative, community stakeholder representative, or other</li>
    </ul>
  </div>
      `
  },
  {
    type: 'file',
    label: 'Upload Governing Body Template:',
    name: 'section5-aco-governing-body-template',
    validation: [Validators.required],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],

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
