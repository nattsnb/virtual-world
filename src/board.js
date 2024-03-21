import {organismsList} from './organismsList.js';
import {Player} from "./player";
import {Tile} from "./tile.js"

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.render();
    this.createInitialCharacters();
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
        row.append(this.tiles[i][j].tileContainer)
      }
    }
    console.log(this.tiles[1][3])
    console.log(this.tiles)
  }
  createInitialCharacters() {
    const numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for (let i = 0; i < numberOfCharacters; i++) {
      const RandomOrganismClass = organismsList[Math.floor(Math.random() * organismsList.length)];
      const organism = new RandomOrganismClass();
      console.log("organism: " + organism);
      const randomX = Math.floor(Math.random() * this.width);
      const randomY = Math.floor(Math.random() * this.height);
      console.log("x: " + randomX + " y: " + randomY)
      const tileForNewOrganism = this.tiles[randomX][randomY];
      tileForNewOrganism.addOrganism(organism);
      tileForNewOrganism.refresh();
    }
    const player = new Player();
    console.log("organism: " + player.name);
    }
}
