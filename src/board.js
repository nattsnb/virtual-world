import {organismsList} from './organismsList.js';
import {Player} from "./player";
import {Tile} from "./tile.js"

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.render();
  }

  render() {
    const boardContainer = document.querySelector('#board-container');
    for (let i = 0; i < this.width; i++) {
      this.tiles[i] = [];
    }
    for (let i = 0; i < this.width; i++) {
      const row = document.createElement('div');
      row.classList.add(`row`);
      boardContainer.append(row);
      for (let j = 0; j < this.height; j++) {
        this.tiles[i][j] = new Tile(i,j);
        row.append(Tile.tileContainer)
      }
    }
    console.log(this.tiles[1][3])
    console.log(this.tiles)
  }
  // createInitialCharacters() {
  //   let numberOfCharacters = Math.round(this.width * this.height * 0.3);
  //   for (numberOfCharacters; numberOfCharacters > 0; numberOfCharacters--) {
  //     let organism = new organismsList[Math.floor(Math.random() * organismsList.length)]();
  //     console.log("organism: " + organism.name);
  //     const randomWidth = Math.floor(Math.random() * this.width);
  //     const randomHeight = Math.floor(Math.random() * this.height);
  //     console.log("x: " + randomWidth + " y: " + randomHeight)
  //     let tileForNewOrganism = document.querySelector('.x-${randomWidth}.y-${randomHeight}');
  //     tileForNewOrganism.innerText = "lalala"
  //   }
  //   const player = new Player();
  //   console.log("organism: " + player.name);
  //   }
}
