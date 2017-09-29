import {Color} from "../color.enum";

export class Button {
  private _color: Color;
  private _sound: string;

  constructor(color: Color, sound: string) {
    this._color = color;
    this._sound = sound;
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
  }

  get sound(): string {
    return this._sound;
  }

  set sound(value: string) {
    this._sound = value;
  }
}
