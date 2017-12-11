import { Component, OnInit } from '@angular/core';

import { Contacts } from '../../interfaces/contacts';

@Component({
  selector: 'sd-contacts-menu',
  templateUrl: './contacts-menu.component.html',
  styleUrls: ['./contacts-menu.component.scss']
})
export class ContactsMenuComponent implements OnInit {

  public contactTypes: Contacts = [
    {
      title: 'ACO Executive',
      path: ['/mssp/section-1', { outlets: { Contact: ['executive'] } } ]
    },
    {
      title: 'CMS Liaison',
      path: ['/mssp/section-1', { outlets: { Contact: ['cms-liaison'] } } ]
    },
    {
      title: 'Application Contact',
      path: ['/mssp/section-1', { outlets: { Contact: ['application'] } } ]
    },
    {
      title: 'IT',
      path: ['/mssp/section-1', { outlets: { Contact: ['it'] } } ]
    },
    {
      title: 'Financial',
      path: ['/mssp/section-1', { outlets: { Contact: ['financial'] } } ]
    },
    {
      title: 'Compliance',
      path: ['/mssp/section-1', { outlets: { Contact: ['compliance'] } } ]
    },
    {
      title: 'Authorized to Sign',
      path: ['/mssp/section-1', { outlets: { Contact: ['authorized-to-sign'] } } ]
    },
    {
      title: 'DUA Requestor',
      path: ['/mssp/section-1', { outlets: { Contact: ['dua-requestor'] } } ]
    },
    {
      title: 'DUA Custodian',
      path: ['/mssp/section-1', { outlets: { Contact: ['dua-custodian'] } } ]
    },
    {
      title: 'Medical Director',
      path: ['/mssp/section-1', { outlets: { Contact: ['medical-director'] } } ]
    },
  ];

  // constructor() { }

  public ngOnInit() {
    console.log('contacts menu...');
  }

}
