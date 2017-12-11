import { TestBed, inject } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

import { HttpModule, Http, ConnectionBackend, RequestOptions, Response, ResponseOptions, XHRBackend } from '@angular/http';

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerService]
    });
  });

  it('should be created', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));

  it('should call', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    expect(service.handleError).toBeTruthy();
  }));

  it('should call handleError', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    const response: any = {
      response: {
        ok: true,
        status: 200,
        statusText: 'ok'
      }
    };
    service.handleError(response);
  }));

  it('should call handleError', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    const response = new Response(new ResponseOptions({
      body: '{"name":"Jeff"}'
    }));
    service.handleError(response);
  }));
});
