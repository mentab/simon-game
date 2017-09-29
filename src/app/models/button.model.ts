export class Button {
  private _color: string;
  private _sound: string;

  constructor(color: string, sound: string) {
    this._color = color;
    this._sound = sound;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get sound(): string {
    return this._sound;
  }

  set sound(value: string) {
    this._sound = value;
  }
}
