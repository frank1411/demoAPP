import { Observable } from '@nativescript/core';
import { Counter } from '~/shared/models/counter.model';
import { getCounterMessage } from '~/shared/utils/message.util';

export class HomeViewModel extends Observable {
  private counter: Counter;
  private _message: string;

  constructor() {
    super();
    this.counter = new Counter(42);
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onTap() {
    this.counter.decrement();
    this.updateMessage();
  }

  onReset() {
    this.counter.reset(42);
    this.updateMessage();
  }

  private updateMessage() {
    this.message = getCounterMessage(this.counter.value);
    console.log(this.message);
  }
}