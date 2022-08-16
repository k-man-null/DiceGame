import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  total!: number;
  game!: Game;
  images!: string[];

  constructor() {

  }

  ngOnInit(): void {
    this.images = [];
    this.updateTotal()

  }

  onSelected(value: number) {
    this.game = new Game(value)
    console.log('game' + this.game.dice)
  }

  rollDice(): void {
    this.game.rollDice()
    this.insertImages()
    this.total = this.game.total
    console.log(this.total)
    this.updateTotal()
  }

  updateTotal() {
    this.total = this.game?.total
  }

  dieImageSrc(side: number) {
    return `/../assets/dice/side_${side}.png`;
  }

  insertImages() {
    this.images = []
    for (let die of this.game.dice) {
      let side = die.side;
      let src = this.dieImageSrc(side);
      this.images.push(src)
    }
  }

}
