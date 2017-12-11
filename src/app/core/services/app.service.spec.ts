import { TestBed, inject } from '@angular/core/testing';

import { AppState } from './app.service';

describe('AppState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppState]
    });
  });

  it('should be created', inject([AppState], (service: AppState) => {
    expect(service).toBeTruthy();
  }));

  it('should call get', inject([AppState], (service: AppState) => {
    service._state = {
      test: 1
    };
    const state = service.get();
    expect(state).toEqual({
      test: 1
    });
    const state1 = service.get('test');
    expect(state1).toEqual(1);
  }));

  it('should set state', inject([AppState], (service: AppState) => {
    service.set('test', 1);
    const state = service.get();
    expect(state).toEqual({
      test: 1
    });
  }));

  it('should set state', inject([AppState], (service: AppState) => {
    expect(() => {service.state = {test: 1}; }).toThrow();
  }));
});
