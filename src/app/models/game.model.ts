import {Button} from './button.model';

export class Game {
  private _steps: number[];
  private _strictMode: boolean;
  private _currentStep: number;
  private _buttons: Button[];

  get steps(): number[] {
    return this._steps;
  }

  set steps(value: number[]) {
    this._steps = value;
  }

  get buttons(): Button[] {
    return this._buttons;
  }

  set buttons(value: Button[]) {
    this._buttons = value;
  }

  get strictMode(): boolean {
    return this._strictMode;
  }

  set strictMode(value: boolean) {
    this._strictMode = value;
  }

  get currentStep(): number {
    return this._currentStep;
  }

  set currentStep(value: number) {
    this._currentStep = value;
  }
}
