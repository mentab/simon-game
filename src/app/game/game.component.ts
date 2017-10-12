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
    this._gameService.initializeButtons();
  }

  toggleGameStatus() {
    this._gameService.gameStatus = !this._gameService.gameStatus;
    if (this._gameService.gameStatus === false) {
      this._gameService.stopGame();
    }
  }

  verifyButton(button: Button) {
    if (this._gameService.gameStatus && !this._gameService.playingSounds) {
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
          this.start();
        } else {
          this.playError();
          this.playSounds();
        }
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

  async playSound(button: Button): Promise<void> {
    button.opacity = 0.5;
    const audioPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById(button.sound);
    audioPlayer.play();
    console.log('1');
    const count1: number = await this.delay(1000, this._gameService.steps.length);
    button.opacity = 1;
  }

  async playSounds(): Promise<void> {
    for (const step of this._gameService.steps) {
      this._gameService.playingSounds = true;
      console.log('2');
      const count2: number = await this.delay(2000, this._gameService.steps.length);
      console.log('3');
      const sound = this.playSound(this._gameService.buttons[step]);
      const count3: number = await this.delay(100, this._gameService.steps.length);
      this._gameService.playingSounds = false;
    }
  }

  start() {
    this._gameService.started = true;
    this._gameService.initializeSteps();
    this._currentStep = 0;
    this.playSounds();
  }

  getButtons(): Button[] {
    return this._gameService.buttons;
  }

  getSteps(): number[] {
    return this._gameService.steps;
  }

  getGameStatus(): boolean {
    return this._gameService.gameStatus;
  }

  getStarted(): boolean {
    return this._gameService.started;
  }

  set strictMode(value: boolean) {
    this._strictMode = value;
  }

  get strictMode(): boolean {
    return this._strictMode;
  }
}
