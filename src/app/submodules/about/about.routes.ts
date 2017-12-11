import { AboutComponent } from './about.component';

export const routes = [
  { path: '', children: [
    { path: '', component: AboutComponent,
      data: {
        title: 'About'
      }
    }
  ]},
];
