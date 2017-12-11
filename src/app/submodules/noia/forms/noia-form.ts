import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/modules/dynamic-form/services/validators.service';

export let validator: ValidatorsService;

// export class Val {
//   constructor(
//     public validator: ValidatorsService
//   ) {}
// }

export const NoiaForm = [
  {
    label: 'Section 1',
    name: 'section1',
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
    label: 'Section 1',
    name: 'section1',
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
    type: 'date',
    label: `What is the ACO’s date of formation? <span class="normal">
            (date noted on the Certificate of Incorporation or other formation documentation)</span>`,
    name: 'aco-date-of-formation',
    placeholder: 'mm/dd/yyyy',
    validation: [
      Validators.required,
      // validator.regEx(/^\d{2}\/\d{2}\/\d{4}$/)
    ],
    validationMsg: [
      {
        label: 'Required',
        error: 'required',
        msg: 'Date is required'
      }
    ],
    class: ['label-left', 'test2'],
    inputConfig: {
      dateFormat: 'MM/DD/YYYY',
      alignment: 'column'
    }
  },
  {
    label: 'Section 2',
    name: 'section2',
    type: 'title',
    html: `
        <label for="aco-type" class="control-label text">
            What type of ACO are you? <span class="normal">(Select all that apply)</span>
        </label>
      `
  },
  {
    type: 'checkbox',
    label: 'Description',
    name: 'aco-type',
    checkboxes: [
      {
        label: 'ACO professionals in a group practice arrangement',
        value: 'ACO professionals in a group practice arrangement'
      },
      {
        label: 'Network of individual practices of ACO professionals',
        value: 'Network of individual practices of ACO professionals'
      },
      {
        label: 'Partnership or joint venture arrangement between hospitals and ACO professionals',
        value: 'Partnership or joint venture arrangement between hospitals and ACO professionals'
      },
      {
        label: 'Hospital employing ACO professionals',
        value: 'Hospital employing ACO professionals'
      },
      {
        label: 'Critical Access Hospital (CAH) billing under Method II',
        value: 'Critical Access Hospital (CAH) billing under Method II'
      },
      {
        label: 'Federally Qualified Health Center (FQHC)',
        value: 'Federally Qualified Health Center (FQHC)'
      },
      {
        label: 'Rural Health Clinic (RHC)',
        value: 'Rural Health Clinic (RHC)'
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
        <label for="aco-legal" class="control-label text">
            What is your ACO’s Type of Legal Entity? <span class="normal">(Only select one)</span>
        </label>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'legal-entity',
    radios: [
      {
        label: 'Sole Proprietorship',
        value: 'Sole Proprietorship'
      },
      {
        label: 'Partnership',
        value: 'Partnership'
      },
      {
        label: 'Publicly-Traded Corporation',
        value: 'Publicly-Traded Corporation'
      },
      {
        label: 'Privately-Held Corporation',
        value: 'Privately-Held Corporation'
      },
      {
        label: 'Limited Liability Company',
        value: 'Limited Liability Company'
      },
      {
        label: 'Other',
        value: 'Other'
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
        <label for="aco-tax-status" class="control-label text">
            What is your ACO’s Tax Status? <span class="normal">(Only select one)</span>
        </label>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'tax-status',
    radios: [
      {
        label: 'For Profit',
        value: 'For Profit'
      },
      {
        label: 'Not-for-Profit',
        value: 'Not-for-Profit'
      }
    ],
    validation: [Validators.required],
    class: ['test', 'test2'],
    inputConfig: {
      alignment: 'left'
    }
  },
  {
    label: 'Section 3',
    name: 'section3',
    type: 'title',
    html: `
        <h2>SECTION 3 - Shared Savings Program Track</h2>
      `
  },
  {
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <label for="app-type" class="control-label text">
            Select the Shared Savings Program track you are applying to.
            <span class="normal">
                (Only select one)
						</span>
				</label>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'shared-savings-program',
    radios: [
      {
        label: 'Track 1 (one-sided model: shared savings)',
        value: 'Track 1-1'
      },
      {
        label: 'Track 1, including the Medicare ACO Track 1+ Model (two-sided model: shared savings/losses)',
        value: 'Track 1-2'
      },
      {
        label: 'Track 2 (two-sided model: shared savings/losses)',
        value: 'Track 2'
      },
      {
        label: 'Track 3 (two-sided model: shared savings/losses)',
        value: 'Track 3'
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
        <div class="alert alert-warning">
          <strong class="required">NOTE:</strong> <br />
          <p>
          If you selected “Track 1, including the Medicare ACO Track 1+ Model” above, you will be
          required to submit a separate Medicare ACO Track 1+ Model application, in addition to the
          Shared Savings Program initial application, for evaluation, and to meet the eligibility
          requirements.
          </p>
          <br />
          <p>
          ACOs who select a two-sided risk model must also demonstrate the establishment
          of an adequate repayment mechanism consistent with the requirements specified under 42 CFR §
          425.204(f).
          </p>
          <br />
          <p>
          You will make your repayment mechanism selection at the time you submit your
          application. For information on the Medicare ACO Track 1+ Model, please refer to the fact sheet.</p>
        </div>
      `
  },
  {
    label: 'Section 4',
    name: 'section4',
    type: 'title',
    html: `
        <h2>SECTION 4 - Skilled Nursing Facility (SNF) 3-Day Rule Waiver</h2>
      `
  },
  {
    label: 'description',
    name: 'description',
    type: 'title',
    html: `
        <label for="app-type" class="control-label text">
            Do you intend to apply for a SNF 3-Day Rule Waiver?
            <span class="normal">
                (Available to Medicare ACO Track 1+ Model and Track 3 Applicants only)
						</span>
				</label>
      `
  },
  {
    type: 'radio',
    label: 'Description',
    name: 'snf-3day-rule-waiver',
    radios: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      },
      {
        label: 'N/A (not applicable to ACOs applying under Shared Savings Program Track 1 only and Track 2)',
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
    label: 'Section 4',
    name: 'section4',
    type: 'title',
    html: `
        <div class="alert alert-warning">
          <strong class="required">NOTE:</strong> <br />
          You will be required to submit a separate SNF 3-Day Rule Waiver Application, in addition to your
          Shared Savings Program initial application, for evaluation and to meet all related requirements.
        </div>
      `
  },
  {
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <h2>SECTION 5 - ACO Contact Information</h2>
      `
  },
  {
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <p class="large">
            <strong>What is your ACO’s full Legal Business Name and location?</strong>
        </p>
      `
  },
  {
    type: 'input',
    label: 'Full Legal Business Name:',
    name: 'aco-legal-business-name',
    placeholder: 'Enter Legal Business Name',
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
    type: 'input',
    label: 'Trade Name/DBA (if applicable):',
    name: 'aco-trade-name',
    placeholder: 'Enter Trade Name',
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
    type: 'input',
    label: 'Address 1 (P.O. Box not accepted):',
    name: 'aco-address1',
    placeholder: 'Enter Street Name',
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
    type: 'input',
    label: 'Address 2 (Optional):',
    name: 'aco-address2',
    placeholder: 'Enter Apt, Suite, Etc...',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'City:',
    name: 'aco-city',
    placeholder: 'Enter City',
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
    type: 'select',
    label: 'State',
    name: 'aco-state',
    options: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL',
      'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
      'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT',
      'WA', 'WI', 'WV', 'WY'],
    placeholder: 'Select an option',
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
    type: 'input',
    label: 'ZIP/Postal Code:',
    name: 'aco-postal-code',
    placeholder: 'Zip/Postal Code',
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
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <p class="large">
            <strong>Who is your primary application contact?</strong>
        </p>
      `
  },
  {
    type: 'input',
    label: 'Prefix:',
    name: 'primary-name-prefix',
    placeholder: 'e.g. Mr./Ms./Dr.',
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
    type: 'input',
    label: 'First Name:',
    name: 'primary-first-name',
    placeholder: 'Enter First Name',
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
    type: 'input',
    label: 'Last Name:',
    name: 'primary-last-name',
    placeholder: 'Enter Last Name',
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
    type: 'input',
    label: 'Title:',
    name: 'primary-title',
    placeholder: 'e.g. CEO, CFO, COO',
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
    type: 'input',
    label: 'Phone Number (Do not include dashes):',
    name: 'primary-phone-number',
    placeholder: 'e.g. xxxxxxxxxx',
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
    type: 'input',
    label: 'Phone Number Extension (Optional):',
    name: 'primary-phone-ext',
    placeholder: 'xxxx',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Address 1 (P.O. Box not accepted):',
    name: 'primary-address1',
    placeholder: 'Enter Street Name',
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
    type: 'input',
    label: 'Address 2 (Optional):',
    name: 'primary-address2',
    placeholder: 'Enter Apt, Suite, Etc...',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'City:',
    name: 'primary-city',
    placeholder: 'Enter City',
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
    type: 'select',
    label: 'State',
    name: 'primary-state',
    options: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL',
      'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
      'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT',
      'WA', 'WI', 'WV', 'WY'],
    placeholder: 'Select an option',
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
    type: 'input',
    label: 'ZIP/Postal Code:',
    name: 'primary-postal-code',
    placeholder: 'Zip/Postal Code',
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
    label: 'Section 5',
    name: 'section5',
    type: 'title',
    html: `
        <p class="large">
            <strong>Who is your secondary application contact?</strong> (Optional)
        </p>
      `
  },
  {
    type: 'input',
    label: 'Prefix:',
    name: 'secondary-name-prefix',
    placeholder: 'e.g. Mr./Ms./Dr.',
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
    type: 'input',
    label: 'First Name:',
    name: 'secondary-first-name',
    placeholder: 'Enter First Name',
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
    type: 'input',
    label: 'Last Name:',
    name: 'secondary-last-name',
    placeholder: 'Enter Last Name',
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
    type: 'input',
    label: 'Title:',
    name: 'secondary-title',
    placeholder: 'e.g. CEO, CFO, COO',
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
    type: 'input',
    label: 'Phone Number (Do not include dashes):',
    name: 'secondary-phone-number',
    placeholder: 'e.g. xxxxxxxxxx',
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
    type: 'input',
    label: 'Phone Number Extension (Optional):',
    name: 'secondary-phone-ext',
    placeholder: 'xxxx',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'Address 1 (P.O. Box not accepted):',
    name: 'secondary-address1',
    placeholder: 'Enter Street Name',
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
    type: 'input',
    label: 'Address 2 (Optional):',
    name: 'secondary-address2',
    placeholder: 'Enter Apt, Suite, Etc...',
    formType: 'text',
    class: ['label-left', 'test2'],
    inputConfig: {
      alignment: 'column'
    }
  },
  {
    type: 'input',
    label: 'City:',
    name: 'secondary-city',
    placeholder: 'Enter City',
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
    type: 'select',
    label: 'State',
    name: 'secondary-state',
    options: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL',
      'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
      'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT',
      'WA', 'WI', 'WV', 'WY'],
    placeholder: 'Select an option',
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
    type: 'input',
    label: 'ZIP/Postal Code:',
    name: 'secondary-postal-code',
    placeholder: 'Zip/Postal Code',
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
    label: 'Submit',
    name: 'submit',
    type: 'button',
    btnConfig: {
      type: 'submit'
    }
  },
];
