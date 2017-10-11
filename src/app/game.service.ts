import {Injectable} from '@angular/core';
import {Button} from './models/button.model';

@Injectable()
export class GameService {

  private _buttons: Button[];
  private _steps: number[];
  private _on: boolean;
  private _started: boolean;

  constructor() {
    this._on = false;
    this._started = false;
  }

  initializeSteps() {
    this._steps = [];
    this.addStep();
  }

  initializeButtons() {
    this._buttons = [];
    this._buttons.push(new Button(0, 'yellow', 'sound1'));
    this._buttons.push(new Button(1, 'green', 'sound2'));
    this._buttons.push(new Button(2, 'red', 'sound3'));
    this._buttons.push(new Button(3, 'blue', 'sound4'));
  }

  addStep() {
    this._steps.push(Math.floor(Math.random() * 4));
  }

  stopGame() {
    this._steps = null;
  }

  get buttons(): Button[] {
    return this._buttons;
  }

  get steps(): number[] {
    return this._steps;
  }

  get on(): boolean {
    return this._on;
  }

  set on(value: boolean) {
    this._on = value;
  }

  get started(): boolean {
    return this._started;
  }

  set started(value: boolean) {
    this._started = value;
  }
}
