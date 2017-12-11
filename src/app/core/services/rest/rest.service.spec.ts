import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { HttpModule, Http, ConnectionBackend, RequestOptions, Response, ResponseOptions, XHRBackend } from '@angular/http';

import { RestService } from './rest.service';
import { ErrorHandlerService } from '../error-handler.service';

describe('RestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MockBackend,
        RestService,
        ErrorHandlerService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));

  it('should call get', inject([RestService], (service: RestService) => {
    spyOn(service, 'get');
  }));

  it('get should return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: mockResponse
      })));
    });

    service.get('url').subscribe((r) => {
      console.log(r);
    });
  }));

  it('get should FAIL return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 100,
        body: mockResponse
      })));
    });

    expect(() => {
      service.get('url').subscribe((r) => {
        console.log(r);
      });
    }).toThrow();
  }));

  it('get should return an Observable for params', inject([RestService], (service: RestService) => {
    service.get('url', {
      obj: 1
    }).subscribe((r) => {
      console.log(r);
    });
  }));

  it('should call post', inject([RestService], (service: RestService) => {
    spyOn(service, 'post');
  }));

  it('post should return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: mockResponse
      })));
    });

    service.post('url', {
      obj: 1
    }).subscribe((r) => {
      console.log(r);
    });
  }));

  it('post should FAIL return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 100,
        body: mockResponse
      })));
      console.log(connection);
    });

    expect(() => {
      service.post('url', {
        obj: 1
      }).subscribe((r) => {
        console.log(r);
      });
    }).toThrow();

  }));

  it('should call put', inject([RestService], (service: RestService) => {
    spyOn(service, 'put');
  }));

  it('put should return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: mockResponse
      })));
    });

    service.put('url', {
      obj: 1
    }).subscribe((r) => {
      console.log('RESPONSE', r);
    });
  }));

  it('put should FAIL return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 100,
        body: mockResponse
      })));
    });

    expect(() => {
      service.put('url', {
        obj: 1
      }).subscribe((r) => {
        console.log(r);
      });
    }).toThrow();
  }));

  it('should call delete', inject([RestService], (service: RestService) => {
    spyOn(service, 'delete');
  }));

  it('delete should return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: mockResponse
      })));
    });

    service.delete('url', {
      obj: 1
    }).subscribe((r) => {
      console.log(r);
    });
  }));

  it('delete should FAIL return an Observable', inject([XHRBackend, RestService], (mockBackend, service: RestService) => {
    const mockResponse = {
      data: [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 100,
        body: mockResponse
      })));
    });

    expect(() => {
      service.delete('url', {
        obj: 1
      }).subscribe((r) => {
        console.log(r);
      });
    }).toThrow();
  }));
});
