import { TestBed, inject } from '@angular/core/testing';
import { MessageEvent, EventBroadcast } from '../../event-listeners/app.events.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay, OverlayRenderer } from 'angular2-modal';
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';

import { ServerURLInterceptor } from './app-interceptor.service';

describe('ServerURLInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServerURLInterceptor,
        MessageEvent,
        EventBroadcast,
        Modal,
        Overlay,
        OverlayRenderer
      ]
    });
  });

  it('should be created', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    expect(service).toBeTruthy();
  }));

  it('intercept before', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    const response: any = {
      response: {
        ok: true,
        status: 200,
        statusText: 'ok'
      }
    };
    console.log('SERVICE', service.interceptBefore(response));
  }));

  it('intercept after', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    const response: any = {
      response: {
        ok: true,
        status: 200,
        statusText: 'ok'
      }
    };
    console.log('SERVICE', service.interceptAfter(response));
  }));

  it('intercept after error: object', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    // spyOn(service, '_getErrorMsg').and.callFake({msg: 'error'});
    const response: any = {
      response: {
        ok: true,
        status: 100,
        statusText: 'ok'
      }
    };
    console.log('SERVICE', service.interceptAfter(response));
  }));

  it('intercept after error: string', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    // spyOn(service, '_getErrorMsg').and.callFake({msg: 'error'});
    const response: any = {
      response: 'error'
    };
    console.log('SERVICE', service.interceptAfter(response));
  }));

  it('intercept after ', inject([ServerURLInterceptor], (service: ServerURLInterceptor) => {
    const response: any = {
      response: {
        ok: true,
        status: 200,
        statusText: 'ok'
      }
    };
    console.log('SERVICE', service.interceptBefore(response));
    console.log('SERVICE', service.interceptAfter(response));
  }));
});
