import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBroadcast } from './app-broadcast.service';
import { MessageEvent } from './app-messages.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    EventBroadcast,
    MessageEvent
  ]
})
export class MessengerModule {}
