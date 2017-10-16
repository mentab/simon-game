import {Injectable} from '@angular/core';
import {Button} from './models/button.model';

@Injectable()
export class GameService {

  private _buttons: Button[];
  private _steps: number[];
  private _gameStatus: boolean;
  private _started: boolean;
  private _playingSounds: boolean;

  constructor() {
    this._gameStatus = false;
    this._started = false;
  }

  initializeSteps() {
    this._steps = [];
    this.addStep();
  }

  initializeButtons() {
    this._buttons = [];
    this._buttons.push(new Button(0, '#ffdc00', 'sound1'));
    this._buttons.push(new Button(1, '#2ecc40', 'sound2'));
    this._buttons.push(new Button(2, '#ff4136', 'sound3'));
    this._buttons.push(new Button(3, '#0074d9', 'sound4'));
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

  get gameStatus(): boolean {
    return this._gameStatus;
  }

  set gameStatus(value: boolean) {
    this._gameStatus = value;
  }

  get started(): boolean {
    return this._started;
  }

  set started(value: boolean) {
    this._started = value;
  }

  get playingSounds(): boolean {
    return this._playingSounds;
  }

  set playingSounds(value: boolean) {
    this._playingSounds = value;
  }
}
