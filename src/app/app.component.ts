import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
// import { AppState } from './core/services/app.service';
import { PageTitleService } from './core/services/page-title/page-title.service';
// import { ApiMapper } from './core/services/api-services/index';
import { ApiConstants } from './core/constants/app.api.constants';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'core-app',
  encapsulation: ViewEncapsulation.None,
  // providers: [AppState],
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public appVersion: string = process.env.APP_VS;
  public appProject: string = process.env.PROJECT;
  public isCollapsed: boolean;
  public name = 'Demo';

  public notiOptions = {
    timeOut: 5000,
    position: ['top', 'right'],
    showProgressBar: true,
    lastOnBottom: true
  };

  constructor(
    // public appState: AppState,
    private pt: PageTitleService
  ) {}

  public ngOnInit() {
    console.log('Initial App State');

    // this.cache.set('cached', true);

    // console.log(this.apiMapper.get('profile'));
  }

  public toggleCollapse() {
    return this.isCollapsed = this.isCollapsed ? false : true;
  }

}
