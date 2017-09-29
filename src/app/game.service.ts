import {Injectable} from '@angular/core';
import {Button} from "./models/button.model";
import {Color} from "./color.enum";

@Injectable()
export class GameService {

  private _buttons: Button[];
  private _steps: number[];

  constructor() {
    this._buttons = [];
    this._steps = [];
  }

  initializeGame() {
    for (let i = 0; i < 4; i++) {
      this._buttons.push(new Button(Color.Blue, 'sound'));
    }
    for (let i = 0; i < 20; i++) {
      this._steps.push(Math.floor(Math.random() * 4));
    }
  }

  get buttons(): any {
    return this._buttons;
  }

  get steps(): number[] {
    return this._steps;
  }
}
