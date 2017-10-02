import {Component, OnInit} from '@angular/core';
import {Button} from '../models/button.model';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private _gameService: GameService;
  private _currentStep: number;
  private _strictMode: boolean;

  constructor(gameService: GameService) {
    this._gameService = gameService;
    this._currentStep = 0;
    this._strictMode = false;
  }

  ngOnInit() {
    this._gameService.initializeGame();
    this.playSounds();
  }

  verifyButton(button: Button) {
    // If it's the right button
    if (button.id === this._gameService.steps[this._currentStep]) {
      this.playSound(button);
      // If it's the last step
      if (this._currentStep === this._gameService.steps.length - 1) {
        this._currentStep = 0;
        this.addStep();
        this.playSounds();
      } else {
        this._currentStep++;
      }
    } else {
      console.log(this.strictMode);
      if (this.strictMode) {
        this.playError();
        this.restart();
      } else {
        this.playError();
        this.playSounds();
      }
    }
  }

  addStep() {
    this._gameService.addStep();
  }

  delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
  }

  playError() {
    const audioPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById('error');
    audioPlayer.play();
  }

  playSound(button: Button) {
    const audioPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById(button.sound);
    audioPlayer.play();
  }

  async playSounds(): Promise<void> {
    for (const step of this._gameService.steps) {
      const count: number = await this.delay(1000, this._gameService.steps.length);
      const sound = this.playSound(this._gameService.buttons[step]);
    }
  }

  restart() {
    this._gameService.initializeGame();
    this._currentStep = 0;
    this.playSounds();
  }

  getButtons(): Button[] {
    return this._gameService.buttons;
  }

  getSteps(): number[] {
    return this._gameService.steps;
  }

  set strictMode(value: boolean) {
    this._strictMode = value;
  }

  get strictMode(): boolean {
    return this._strictMode;
  }
}
