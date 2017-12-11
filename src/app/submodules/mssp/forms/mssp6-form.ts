import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp6Form = [
  {
    label: 'Section 6',
    name: 'section6',
    type: 'title',
    html: `
        <h2>Section 6 - Information About Your ACO's Leadership and Management
        
        </h2>
      `
  },
  {
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <h3>I certify that my ACO’s operations are managed by an executive,
         officer, manager, general partner, or similar party whose appointment
          and removal are under the control of your ACO’s governing body, and
           whose leadership team has demonstrated the ability to influence or
            direct clinical practice to improve efficiency, processes and outcomes.</h3>
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section6-aco-managed',
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
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <h3>I certify that my ACO’s clinical management and oversight
         are managed by a senior-level medical director, who is a 
         board-certified physician and licensed in a State in which your
          ACO operates, and who is physically present on a regular basis at
           any clinic, office or other location participating in the ACO, ACO
            participant or ACO provider/supplier.</h3>
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section6-aco-managed-senior-level',
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
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <h3>I certify that my ACO has a compliance plan that includes at least the following elements:</h3>
        <ul>
        <li>A designated compliance official or individual who is not legal counsel to your ACO and reports directly to the ACO’s governing body;</li>
         <li>
          Mechanisms for identifying and addressing compliance problems related to your ACO’s operations and performance;</li>
        <li>A method for employees or 
        contractors of your ACO, ACO participants, ACO providers/suppliers,
         or for other entities performing functions or services related to
          ACO activities, to anonymously report suspected problems related 
          to your ACO to the compliance officer;</li>
        <li>Compliance training for your ACO, ACO participants, and ACO providers/suppliers; and</li>
        <li>A requirement for your ACO to report probable violations of law to an appropriate law enforcement agency.</li>
      </ul>
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section6-aco-compliance-plan',
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
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
    <div class="alert alert-warning">
    <span class="required"><strong>Note:</strong></span>
     Your Compliance Plan is not required to be submitted with your application, however it must be
made available to CMS upon request at any time.
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
