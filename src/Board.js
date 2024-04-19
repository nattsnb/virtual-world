import { classesList } from './classesList';
import { Player } from './player/Player';
import { Tile } from './Tile';
import { isTileEmpty } from './isTileEmpty';

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
        this.tiles[j][i] = new Tile(j, i);
        row.append(this.tiles[j][i].tileContainer);
      }
    }
  }
  createInitialCharacters() {
    const numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for (let i = 0; i < numberOfCharacters; i++) {
      let RandomOrganismClass =
        classesList[Math.floor(Math.random() * classesList.length)];
      const organism = new RandomOrganismClass(
        this,
        RandomOrganismClass.startParameters,
      );
      const tileForNewOrganism = this.findRandomTileOnBoard();
      tileForNewOrganism.setOrganism(organism);
      // console.log(organism);
    }
    const player = new Player(this, Player.startParameters);
    // console.log(player);
    const tileForPlayer = this.findRandomTileOnBoard();
    tileForPlayer.setOrganism(player);
  }
  async round() {
    const organismsOnBoard = this.getOrganisms();
    const sortedOrganismsOnBoard = this.sortOrganisms(organismsOnBoard);
    console.log(sortedOrganismsOnBoard);
    for (let i = 0; i < sortedOrganismsOnBoard.length; i++) {
      await sortedOrganismsOnBoard[i].action();
    }
    const organismsAfterRound = this.getOrganisms();
    console.log(organismsAfterRound.find(this.isPlayerAlive));
  }
  getOrganisms() {
    const organismsOnBoard = [];
    for (let y = 0; y < this.tiles.length; y++) {
      for (let x = 0; x < this.tiles.length; x++) {
        if (this.tiles[x][y].currentOrganism) {
          organismsOnBoard.push(this.tiles[x][y].currentOrganism);
        }
      }
    }
    return organismsOnBoard;
  }
  findRandomTileOnBoard() {
    const randomX = Math.floor(Math.random() * this.width);
    const randomY = Math.floor(Math.random() * this.height);
    const foundTile = this.tiles[randomX][randomY];
    if (!isTileEmpty(foundTile)) {
      return this.findRandomTileOnBoard();
    }
    return foundTile;
  }
  sortOrganisms(organismsOnBoard) {
    organismsOnBoard.sort(function (leftOrganism, rightOrganism) {
      if (leftOrganism.initiative === rightOrganism.initiative) {
        return rightOrganism.age - leftOrganism.age;
      }
      return rightOrganism.initiative - leftOrganism.initiative;
    });
    return organismsOnBoard;
  }
  isPlayerAlive(organism) {
    console.log(`is alive?`);
    return organism.constructor === Player;
  }
}
