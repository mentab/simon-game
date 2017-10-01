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

  constructor(gameService: GameService) {
    this._gameService = gameService;
    this._currentStep = 0;
  }

  ngOnInit() {
    this._gameService.initializeGame();
  }

  verifyButton(button: Button) {
    this.playSound(button);
    if (button.id === this._gameService.steps[this._currentStep]) {
      if (this._currentStep === this._gameService.steps.length - 1) {
        this._currentStep = 0;
        this.addStep();
        this.playSounds();
      } else {
        this._currentStep++;
      }
    } else {
      this._currentStep = 0;
      this.playSounds();
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

  getButtons(): Button[] {
    return this._gameService.buttons;
  }

  getSteps(): number[] {
    return this._gameService.steps;
  }
}
