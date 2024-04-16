import { classesList } from './classesList';
import { Player } from './player/Player';
import { Tile } from './Tile';
import { findRandomTileOnBoard } from './findRandomTileOnBoard';

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.organisms = [];
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
        this.tiles[j][i] = new Tile(j, i);
        row.append(this.tiles[j][i].tileContainer);
      }
    }
  }
  createInitialCharacters() {
    const numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for (let i = 0; i < numberOfCharacters; i++) {
      const RandomOrganismClass =
        classesList[Math.floor(Math.random() * classesList.length)];
      const organism = new RandomOrganismClass(this);
      const tileForNewOrganism = findRandomTileOnBoard(
        this.width,
        this.height,
        this.tiles,
      );
      tileForNewOrganism.addOrganism(organism);
      this.organisms.push(organism);
    }
    const player = new Player(this);
    const tileForPlayer = findRandomTileOnBoard(
      this.width,
      this.height,
      this.tiles,
    );
    tileForPlayer.addOrganism(player);
    this.organisms.push(player);
  }

  async round() {
    this.organisms.sort(function (leftOrganism, rightOrganism) {
      if (leftOrganism.initiative === rightOrganism.initiative) {
        return rightOrganism.age - leftOrganism.age;
      }
      return rightOrganism.initiative - leftOrganism.initiative;
    });
    for (let i = 0; i < this.organisms.length; i++) {
      await this.organisms[i].action();
    }
  }
}
