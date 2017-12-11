import { TestBed, inject } from '@angular/core/testing';

import { MsspContactsState } from './mssp-contacts.state';

describe('MsspContactsState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsspContactsState]
    });
  });

  it('should be created', inject([MsspContactsState], (service: MsspContactsState) => {
    expect(service).toBeTruthy();
  }));

  it('should call get', inject([MsspContactsState], (service: MsspContactsState) => {
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

  it('should set state', inject([MsspContactsState], (service: MsspContactsState) => {
    service.set('test', 1);
    const state = service.get();
    expect(state).toEqual({
      test: 1
    });
  }));

  it('should set state', inject([MsspContactsState], (service: MsspContactsState) => {
    expect(() => {service.state = {test: 1}; }).toThrow();
  }));
});
