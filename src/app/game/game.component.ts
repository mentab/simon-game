import {Component, OnInit} from '@angular/core';
import {Button} from "../models/button.model";
import {GameService} from "../game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private _gameService: GameService;

  constructor(gameService: GameService) {
    this._gameService = gameService;
  }

  ngOnInit() {
    this._gameService.initializeGame();
  }

  getButtons(): Button[] {
    return this._gameService.buttons;
  }

  getSteps(): string[] {
    return this._gameService.steps;
  }
}
