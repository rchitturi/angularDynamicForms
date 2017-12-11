import { Injectable } from '@angular/core';
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import { MessageEvent } from '../../event-listeners/app.events.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServerURLInterceptor implements Interceptor {
  private processor: number = 0;
  constructor(
    public messageEvent: MessageEvent,
    private modal: Modal,
  ) {}

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    this.processor++;
    // console.log(request);
    this.messageEvent.fire(`Loader_On`);
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    // console.log(response);
    const results = response.response;
    if (--this.processor === 0) {
      this.messageEvent.fire(`Loader_Off`);
    }

    // console.log(response, response.response);
    if (results.ok === true && results.status === 200) {
      return response;
    } else {
      // console.log(response, this._getErrorMsg(response.response));
      const msg = this._getErrorMsg(response.response);
      this.modal.alert()
        .size('lg')
        .isBlocking(true)
        .showClose(true)
        .keyboard(27)
        .title('API Error')
        .body(`
            <div class="test" style="height: 200px;">
              <p>
                  <b>Endpoint:</b> ${results.url}
              </p>
              <p>
                  <b>Message:</b> ${msg}
              </p>
            </div>
         `)
        .open();

    }
  }

  private _getErrorMsg( msg: any ) {
    if (typeof msg === 'string') {
      // console.log(1);
      return msg;
    } else if (typeof msg === 'object') {
      // console.log(2, msg);
      return `${msg.status}: ${msg.statusText}`;
    }
  }
}
