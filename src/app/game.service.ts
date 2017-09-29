import {Injectable} from '@angular/core';
import {Button} from './models/button.model';

@Injectable()
export class GameService {

  private _buttons: Button[];
  private _steps: number[];

  constructor() {
    this._buttons = [];
    this._steps = [];
  }

  initializeGame() {
    this._buttons.push(new Button('yellow', 'sound1'));
    this._buttons.push(new Button('green', 'sound2'));
    this._buttons.push(new Button('red', 'sound3'));
    this._buttons.push(new Button('blue', 'sound4'));

    for (let i = 0; i < 20; i++) {
      this._steps.push(Math.floor(Math.random() * 4));
    }
  }

  get buttons(): Button[] {
    return this._buttons;
  }

  get steps(): number[] {
    return this._steps;
  }
}
