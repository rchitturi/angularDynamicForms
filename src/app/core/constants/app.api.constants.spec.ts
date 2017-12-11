import { TestBed, inject } from '@angular/core/testing';

import { ApiConstants } from './app.api.constants';

describe('APIConstants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConstants]
    });
  });

  it('should be created', inject([ApiConstants], (service: ApiConstants) => {
    expect(service).toBeTruthy();
  }));

  it('should call _ENDPOINT', inject([], () => {
    const endpoint = ApiConstants._ENDPOINT('login');
    console.log(endpoint);
  }));
});
