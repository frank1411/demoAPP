import { Observable } from '@nativescript/core';

export class Counter extends Observable {
  private _value: number;

  constructor(initialValue: number = 0) {
    super();
    this._value = initialValue;
  }

  get value(): number {
    return this._value;
  }

  increment(): void {
    this._value++;
    this.notifyPropertyChange('value', this._value);
  }

  decrement(): void {
    this._value--;
    this.notifyPropertyChange('value', this._value);
  }

  reset(value: number = 0): void {
    this._value = value;
    this.notifyPropertyChange('value', this._value);
  }
}