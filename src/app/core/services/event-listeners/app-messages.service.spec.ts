import { TestBed, inject } from '@angular/core/testing';

import { MessageEvent } from './app-messages.service';
import { EventBroadcast } from './app-broadcast.service';

describe('MessageEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageEvent, EventBroadcast]
    });
  });

  it('should be created', inject([MessageEvent], (service: MessageEvent) => {
    expect(service).toBeTruthy();
  }));

  it('should call on', inject([MessageEvent, EventBroadcast], (service: MessageEvent, broadcaster) => {
    spyOn(service, 'on').and.returnValue({ subscribe: () => {} });
    spyOn(broadcaster, 'on');

    service.on();
    expect(service.on).toHaveBeenCalled();
    // expect(broadcaster.on).toHaveBeenCalled();
  }));
});
