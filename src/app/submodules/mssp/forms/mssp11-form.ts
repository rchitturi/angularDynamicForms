import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const Mssp11Form = [
  {
    label: 'Section 11',
    name: 'section11',
    type: 'title',
    html: `
        <h2>Section 11 – Information About Your Clinical Processes and Patient Centeredness</h2>
        <h3>Accontabilities for Beneficiaries</h3>
        <h4 class="stack-space">You certify that your ACO, your ACO participants, and your ACO providers/suppliers agree to become
        accountable for the quality, cost, and overall care of the Medicare fee-for-service beneficiaries assigned to
                        the ACO.</h4>
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'section11-aco-clinical-process',
    checkboxes: [
      {
        label: 'Yes,I certify',
        value: 'Yes'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
    // value: [2]
  },
  {
    label: 'Section 11',
    name: 'section11',
    type: 'title',
    html: `
    <h3>Providing A Quality Assurance and Improvement Program</h3>
    <h4 class="stack-space">You have a qualified healthcare professional responsible for the ACO’s quality
     assurance and improvement program that encompasses all four (4) of the following processes:</h4>
     <ul>
     <li>Promoting evidence-based medicine;</li>
     <li>Promoting beneficiary engagement;</li>
     <li>Reporting internally on quality and cost metrics; and</li>
     <li>Coordinating care.</li>
   </ul>
      `
  },
  {
    type: 'checkbox',
    label: '',
    name: 'section11-aco-quality-assurance',
    checkboxes: [
      {
        label: 'Yes,I certify',
        value: 'Yes'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
    // value: [2]
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h4 class="stack-space"> Submit a narrative describing how your ACO will require ACO participants and ACO providers/suppliers to
    comply with and implement a quality assurance and improvement program including, but not limited to,
    your ACO’s processes to promote evidence-based medicine, beneficiary engagement, coordination of
    care, and internal reporting on cost and quality. Please include a description of remedial processes and
    penalties (including the potential for expulsion) that would apply for non-compliance.</h4>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section11-aco-require-1',
    placeholder: 'Enter Context Here',
    validation: [Validators.required, Validators.minLength(4)],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      },
      {
        label: 'min-length',
        error: 'minlength',
        msg: 'min-length'
      }
    ],
    class: ['test', 'test2']
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h4 class="stack-space"> Submit a narrative describing how your ACO will require ACO participants and ACO providers/suppliers to
    comply with and implement a quality assurance and improvement program including, but not limited to,
    your ACO’s processes to promote evidence-based medicine, beneficiary engagement, coordination of
    care, and internal reporting on cost and quality. Please include a description of remedial processes and
    penalties (including the potential for expulsion) that would apply for non-compliance.</h4>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section11-aco-require-2',
    placeholder: 'Enter Context Here',
    validation: [Validators.required, Validators.minLength(4)],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      },
      {
        label: 'min-length',
        error: 'minlength',
        msg: 'min-length'
      }
    ],
    class: ['test', 'test2']
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h4 class="stack-space"> Submit a narrative describing how your ACO will require ACO participants and ACO providers/suppliers to
    comply with and implement a quality assurance and improvement program including, but not limited to,
    your ACO’s processes to promote evidence-based medicine, beneficiary engagement, coordination of
    care, and internal reporting on cost and quality. Please include a description of remedial processes and
    penalties (including the potential for expulsion) that would apply for non-compliance.</h4>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section11-aco-require-3',
    placeholder: 'Enter Context Here',
    validation: [Validators.required, Validators.minLength(4)],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      },
      {
        label: 'min-length',
        error: 'minlength',
        msg: 'min-length'
      }
    ],
    class: ['test', 'test2']
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h4 class="stack-space"> Submit a narrative describing how your ACO will require ACO participants and ACO providers/suppliers to
    comply with and implement a quality assurance and improvement program including, but not limited to,
    your ACO’s processes to promote evidence-based medicine, beneficiary engagement, coordination of
    care, and internal reporting on cost and quality. Please include a description of remedial processes and
    penalties (including the potential for expulsion) that would apply for non-compliance.</h4>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section11-aco-require-4',
    placeholder: 'Enter Context Here',
    validation: [Validators.required, Validators.minLength(4)],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      },
      {
        label: 'min-length',
        error: 'minlength',
        msg: 'min-length'
      }
    ],
    class: ['test', 'test2']
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
    <h4 class="stack-space"> Submit a narrative describing how your ACO will require ACO participants and ACO providers/suppliers to
    comply with and implement a quality assurance and improvement program including, but not limited to,
    your ACO’s processes to promote evidence-based medicine, beneficiary engagement, coordination of
    care, and internal reporting on cost and quality. Please include a description of remedial processes and
    penalties (including the potential for expulsion) that would apply for non-compliance.</h4>
      `
  },
  {
    type: 'textarea',
    label: '',
    name: 'section11-aco-require-5',
    placeholder: 'Enter Context Here',
    validation: [Validators.required, Validators.minLength(4)],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'this is required'
      },
      {
        label: 'min-length',
        error: 'minlength',
        msg: 'min-length'
      }
    ],
    class: ['test', 'test2']
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
