export class Button {
  private _id: number;
  private _color: string;
  private _sound: string;
  private _opacity: number;

  constructor(id: number, color: string, sound: string) {
    this._id = id;
    this._color = color;
    this._sound = sound;
    this._opacity = 1;
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

  get opacity(): number {
    return this._opacity;
  }

  set opacity(value: number) {
    this._opacity = value;
  }
}
