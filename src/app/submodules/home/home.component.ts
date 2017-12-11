import {
  Component,
  OnInit
} from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // TypeScript public modifiers
  constructor(
    private auth: AuthService,
  ) {}

  public ngOnInit(): void {
    console.log('Home...', this.auth.isAuthenticated(), this.auth.getPayload(), this.auth.getToken());
  }

}
