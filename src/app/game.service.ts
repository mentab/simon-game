import {Injectable} from '@angular/core';
import {Button} from './models/button.model';

@Injectable()
export class GameService {

  private _buttons: Button[];
  private _steps: number[];

  constructor() {
  }

  initializeGame() {
    this._steps = [];
    this._buttons = [];
    this._buttons.push(new Button(0, 'yellow', 'sound1'));
    this._buttons.push(new Button(1, 'green', 'sound2'));
    this._buttons.push(new Button(2, 'red', 'sound3'));
    this._buttons.push(new Button(3, 'blue', 'sound4'));
    this.addStep();
  }

  addStep() {
    this._steps.push(Math.floor(Math.random() * 4));
  }

  get buttons(): Button[] {
    return this._buttons;
  }

  get steps(): number[] {
    return this._steps;
  }
}
