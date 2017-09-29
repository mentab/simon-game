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
  public displayedSteps: number[];

  constructor(gameService: GameService) {
    this._gameService = gameService;
    this.displayedSteps = [];
  }

  ngOnInit() {
    this._gameService.initializeGame();
    this.playSounds();
  }

  setActivated(button: Button) {
    const audioPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById(button.sound);
    audioPlayer.play();
  }

  delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
  }

  async playSounds(): Promise<void> {
    for (const step of this._gameService.steps) {
      const sound = this.setActivated(this._gameService.buttons[step]);
      this.displayedSteps.push(step);
      const count: number = await this.delay(1000, this._gameService.steps.length);
    }
  }

  getButtons(): Button[] {
    return this._gameService.buttons;
  }

  getSteps(): number[] {
    return this._gameService.steps;
  }
}
