import { organismsList } from './organismsList.js';
import { Player } from './player/Player.js';
import { Tile } from './Tile.js';
import { findRandomTile } from './findRandomTile';
import { moveOrganism } from './moveOrganism';

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
    for (let i = 0; i < this.height; i++) {
      this.tiles[i] = [];
    }
    for (let i = 0; i < this.height; i++) {
      const row = document.createElement('div');
      row.classList.add(`row`);
      boardContainer.append(row);
      for (let j = 0; j < this.width; j++) {
        this.tiles[j][i] = new Tile(j,i);
        row.append(this.tiles[j][i].tileContainer)
      }
    }

  }
  createInitialCharacters() {
    const numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for (let i = 0; i < numberOfCharacters; i++) {
      const RandomOrganismClass = organismsList[Math.floor(Math.random() * organismsList.length)];
      const organism = new RandomOrganismClass();
      const tileForNewOrganism = findRandomTile(this.width, this.height, this.tiles)
      tileForNewOrganism.addOrganism(organism);
      tileForNewOrganism.refresh();
      console.log("cic")
    }
    const player = new Player();
    const tileForPlayer = findRandomTile(this.width, this.height, this.tiles)
    tileForPlayer.addOrganism(player);
    tileForPlayer.refresh();
    }
  moveAllOrganisms() {
    console.log("all organisms to be moved")
    for (let i=0; i <= this.width; i++) {
      for (let j = 0; j <= this.width; j++) {
        console.log(`x: ${i}, y: ${j}`)
        if (this.tiles[i][j].currentOrganism === null) {
          console.log('no organism')
        } else {
          moveOrganism(this.tiles, this.tiles[i][j].currentOrganism, this.width, this.height)
          console.log('one organism moved')
        }
      }
    }
    console.log("all organisms moved")

  }
}





