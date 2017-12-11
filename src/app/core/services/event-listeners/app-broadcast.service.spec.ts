import { TestBed, inject } from '@angular/core/testing';

import { EventBroadcast } from './app-broadcast.service';

describe('EventBroadcast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBroadcast]
    });
  });

  it('should be created', inject([EventBroadcast], (service: EventBroadcast) => {
    expect(service).toBeTruthy();
  }));

  it('should call on', inject([EventBroadcast], (service: EventBroadcast) => {
    spyOn(service, 'on');

    service.on('key');
    expect(service.on).toHaveBeenCalled();
  }));
});
