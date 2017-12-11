import { TestBed, inject } from '@angular/core/testing';

import { MsspState } from './mssp.state';

describe('MsspState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsspState]
    });
  });

  it('should be created', inject([MsspState], (service: MsspState) => {
    expect(service).toBeTruthy();
  }));

  it('should call get', inject([MsspState], (service: MsspState) => {
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

  it('should set state', inject([MsspState], (service: MsspState) => {
    service.set('test', 1);
    const state = service.get();
    expect(state).toEqual({
      test: 1
    });
  }));

  it('should set state', inject([MsspState], (service: MsspState) => {
    expect(() => {service.state = {test: 1}; }).toThrow();
  }));
});
