import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventBroadcast } from './app-broadcast.service';

@Injectable()
export class MessageEvent {
  constructor(
    private broadcaster: EventBroadcast
  ) {}

  public fire(data: string, pkg?: any): void {
    this.broadcaster.broadcast(MessageEvent, data, pkg);
  }

  public on(): Observable<any> {
    return this.broadcaster.on<any>(MessageEvent).map((res) => {
      return res;
    });
  }
}
