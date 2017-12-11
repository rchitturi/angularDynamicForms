import { Response } from '@angular/http';
import { CustomConfig } from 'ng2-ui-auth';

export class CoreAuthConfig extends CustomConfig {
  public defaultHeaders = {'Content-Type': 'application/json'};
  public tokenPrefix    = '';
  public tokenRoot      = null;
  public tokenName      = 'token';
  public userRole: any  = () => {
    console.log('userRole');
  }
  public resolveToken = (response) => {
    // console.log('RESPONSE:', response.json());
    let /** @type {?} */ tokenObj = response;
    if (response instanceof Response) {
      tokenObj = response.json();
    }
    this.userRole();
    const /** @type {?} */ accessToken = tokenObj &&
      (tokenObj['access_token'] || tokenObj['token'] || tokenObj['data']);
    console.log('TOKEN:', tokenObj, (tokenObj['access_token'] || tokenObj['token'] || tokenObj['data']));
    if (!accessToken) {
      console.warn('No token found');
      return null;
    }
    if (typeof accessToken === 'string') {
      return accessToken;
    }
    if (typeof accessToken !== 'object') {
      console.warn('No token found');
      return null;
    }
    const /** @type {?} */ tokenRootData = this.tokenRoot &&
      this.tokenRoot.split('.').reduce((o, x) => {
        return o[x];
      }, accessToken);
    const /** @type {?} */ token = tokenRootData ? tokenRootData[this.tokenName] : accessToken[this.tokenName];
    if (token) {
      console.log(token, response.json());
      return token;
    }
    let /** @type {?} */ tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
    console.warn('Expecting a token named "' + tokenPath);
    return null;
  }

}
