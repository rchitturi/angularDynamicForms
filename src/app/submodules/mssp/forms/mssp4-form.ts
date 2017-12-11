import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp4Form = [
  {
    label: 'Section 4',
    name: 'section4',
    type: 'title',
    html: `
        <h2>Section 4 - Information About Your ACO's Legal Entity</h2>
      `
  },
  {
    label: 'Section 4',
    name: 'section4',
    type: 'title',
    html: `
        <h3>How is your ACO structured? </h3>
        <span class="small normal">(Select One)</span>
      `
  },
  {
    type: 'radio',
    label: '',
    name: 'section4-aco-structured',
    radios: [
      {
        label: 'Scenario 1 - Traditional ACO (ACO TIN and ACO participant TINs are different; multiple ACO participant TINs) ',
        value: 'Scenario 1'
      },
      {
        label: `Scenario 2A - Single TIN Entity
         ACO (ACO TIN and sole ACO Participant TIN are the same;
           all practitioners billing through the ACO TIN are employed) `,
        value: 'Scenario 2A'
      },
      {
        label: `Scenario 2B - Single TIN 
        Entity ACO (ACO TIN and sole ACO Participant
           TIN are the same; all practitioners billing through the ACO TIN are contracted)`,
        value: 'Scenario 2B'
      },
      {
        label: `Scenario 2C - Single TIN Entity ACO (
          ACO TIN and sole ACO Participant TIN are the same;
           practitioners billing through the ACO TIN are both contracted or employed)`,
        value: 'Scenario 2C'
      },
      {
        label: 'Scenario 3 - Single TIN Entity ACO Structured as a Traditional ACO (ACO TIN and sole ACO Participant TIN are different)',
        value: 'Scenario 3'
      },
      {
        label: 'Other',
        value: 'other'
      }
    ],
    validation: [Validators.required],
    class: ['normal'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    type: 'input',
    label: '',
    name: 'section4-aco-structured-other',
    placeholder: '',
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
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>Submit a narrative giving us a brief overview of your
         ACO’s history, mission and organization, including your ACO’s affiliations.</h3>
        
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section4-overview-history',
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
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>I certify that my ACO is a recognized legal entity
         formed under applicable State, Federal, or Tribal law
         and authorized to conduct business in each State in which it operates.</h3>
        
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section4-aco-recognized',
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
    <div class="alert alert-warning">By selecting <strong>YES</strong>, you certify that your ACO legal entity can:
    <p></p>
    <ul>
      <li>Receive and distribute shared savings;</li>
      <li>Repay shared losses or other monies determined to be owed to CMS;</li>
      <li>Establish, report, and ensure provider compliance with health care quality criteria, including quality
        performance standards; and</li>
      <li>Fulfill other ACO functions identified in 42 CFR Part 425.</li>
    </ul>
  </div>
      `
  },
  {
    label: 'Heading',
    name: '',
    type: 'title',
    html: `
        <h3>Is your ACO formed among two or more ACO 
        participants, and has a legal entity separate from any of its ACO participants?</h3>
        
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'section4-aco-recognized-seperate',
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
    label: 'note',
    name: 'note',
    type: 'title',
    html: `
    <div class="alert alert-warning"> <span>(<strong class="required">
    Note:</strong> If your ACO is formed by a subset of the TINs that 
    participate in an organization such as an
    integrated health delivery system or independent physician association
    , we consider your ACO to be
      `
  },
  {
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        <h3>I certify that my ACO has available all documents 
        (e.g., charters, by-laws, articles of incorporation, etc.)
         that effectuate the formation and operation of the ACO.</h3>
        
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section4-aco-documents-available',
    checkboxes: [
      {
        label: 'I agree',
        value: 'I agree'
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
        <h3>Submit your ACO’s organizational chart showing the
         flow of responsibility. Include committees and the name of 
        each committee member, as well as the senior administrative 
        and clinical leaders of your ACO.</h3>
        
      `
  },
  {
    type: 'file',
    label: 'Upload ACO Participants List',
    name: 'section4-aco-organization-charts',
    validation: [Validators.required],
    class: ['test', 'test2'],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
  },
  {
    label: 'Heading',
    name: 'heading',
    type: 'title',
    html: `
        OR
        
      `
  },
  {
    type: 'textarea',
    label: 'Type the information below within the text box.',
    name: 'section4-aco-organization-charts-text',
    validation: [Validators.required],
    class: ['label-left', 'test2'],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      }
    ],
    inputConfig: {
      alignment: 'column'
    }
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
