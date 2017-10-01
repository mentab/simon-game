export class Button {
  private _id: number;
  private _color: string;
  private _sound: string;

  constructor(id: number, color: string, sound: string) {
    this._id = id;
    this._color = color;
    this._sound = sound;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
