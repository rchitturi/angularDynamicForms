import { TestBed, inject } from '@angular/core/testing';

import { AuthState } from './auth.state';

describe('AuthState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthState]
    });
  });

  it('should be created', inject([AuthState], (service: AuthState) => {
    expect(service).toBeTruthy();
  }));

  it('should call get', inject([AuthState], (service: AuthState) => {
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

  it('should set state', inject([AuthState], (service: AuthState) => {
    service.set('test', 1);
    const state = service.get();
    expect(state).toEqual({
      test: 1
    });
  }));

  it('should set state', inject([AuthState], (service: AuthState) => {
    expect(() => {service.state = {test: 1}; }).toThrow();
  }));
});
