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

  render = () => {
    const boardContainer = document.querySelector('#board-container');
    for (let i = 0; i < this.height; i++) {
      this.tiles[i] = [];
    }
    for (let i = 0; i < this.height; i++) {
      const row = document.createElement('div');
      row.classList.add(`row`);
      boardContainer.append(row);
      for (let j = 0; j < this.width; j++) {
        this.tiles[j][i] = new Tile(j, i, this);
        row.append(this.tiles[j][i].tileContainer);
      }
    }
  };
  createInitialCharacters = () => {
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
  };
  round = async () => {
    const organismsOnBoard = this.getOrganisms();
    const sortedOrganismsOnBoard = this.sortOrganisms(organismsOnBoard);
    // console.log(sortedOrganismsOnBoard);
    for (let i = 0; i < sortedOrganismsOnBoard.length; i++) {
      // console.log(sortedOrganismsOnBoard[i])
      await sortedOrganismsOnBoard[i].action();
    }
    const organismsAfterRound = this.getOrganisms();
    console.log(`is alive?`);
    console.log(organismsAfterRound.find(Board.isOrganismAPlayer))
    return organismsAfterRound.find(Board.isOrganismAPlayer);
  };

  getOrganisms = () => {
    const organismsOnBoard = [];
    for (let y = 0; y < this.tiles.length; y++) {
      for (let x = 0; x < this.tiles.length; x++) {
        if (this.tiles[x][y].currentOrganism) {
          organismsOnBoard.push(this.tiles[x][y].currentOrganism);
        }
      }
    }
    return organismsOnBoard;
  };
  findRandomTileOnBoard = () => {
    const randomX = Math.floor(Math.random() * this.width);
    const randomY = Math.floor(Math.random() * this.height);
    const foundTile = this.tiles[randomX][randomY];
    if (!isTileEmpty(foundTile)) {
      return this.findRandomTileOnBoard();
    }
    return foundTile;
  };
  sortOrganisms(organismsOnBoard) {
    organismsOnBoard.sort(function (leftOrganism, rightOrganism) {
      if (leftOrganism.initiative === rightOrganism.initiative) {
        return rightOrganism.age - leftOrganism.age;
      }
      return rightOrganism.initiative - leftOrganism.initiative;
    });
    return organismsOnBoard;
  }
  static isOrganismAPlayer(organism) {
    return organism instanceof Player;
  }

  findNearestTiles = (organism) => {
    const minimalStep = organism.numberOfSteps - 1;
    const x = organism.x;
    const y = organism.y;
    const xMax = this.width - organism.numberOfSteps;
    const yMax = this.height - organism.numberOfSteps;
    let arrayOfNearestTiles = [];
    // move left.up
    if (x > minimalStep && y > minimalStep) {
      arrayOfNearestTiles.push(
        this.tiles[x - organism.numberOfSteps][y - organism.numberOfSteps],
      );
    }
    //move straight.up
    if (y > minimalStep) {
      arrayOfNearestTiles.push(this.tiles[x][y - organism.numberOfSteps]);
    }
    // move right.up
    if (x < xMax && y > minimalStep) {
      arrayOfNearestTiles.push(
        this.tiles[x + organism.numberOfSteps][y - organism.numberOfSteps],
      );
    }
    // move right.straight
    if (x < xMax) {
      arrayOfNearestTiles.push(this.tiles[x + organism.numberOfSteps][y]);
    }
    // move right.down
    if (x < xMax && y < yMax) {
      arrayOfNearestTiles.push(
        this.tiles[x + organism.numberOfSteps][y + organism.numberOfSteps],
      );
    }
    //move straight.down
    if (y < yMax) {
      arrayOfNearestTiles.push(this.tiles[x][y + organism.numberOfSteps]);
    }
    // move left.down
    if (x > minimalStep && y < yMax) {
      arrayOfNearestTiles.push(
        this.tiles[x - organism.numberOfSteps][y + organism.numberOfSteps],
      );
    }
    // move left.straight
    if (x > minimalStep) {
      arrayOfNearestTiles.push(this.tiles[x - organism.numberOfSteps][y]);
    }
    return arrayOfNearestTiles;
  };
  findEmptyTilesSurroundingParents = (parent1, parent2) => {
    const parent1SurroundingTiles = this.findNearestTiles(parent1);
    const parent2SurroundingTiles = this.findNearestTiles(parent2);
    let surroundingEmptyTiles = [];
    for (let i = 0; i < parent1SurroundingTiles.length; i++) {
      if (!parent1SurroundingTiles[i].currentOrganism) {
        surroundingEmptyTiles.push(parent1SurroundingTiles[i]);
      }
    }
    for (let i = 0; i < parent2SurroundingTiles.length; i++) {
      if (
        !parent2SurroundingTiles[i].currentOrganism &&
        !surroundingEmptyTiles.includes(parent2SurroundingTiles[i])
      ) {
        surroundingEmptyTiles.push(parent2SurroundingTiles[i]);
      }
    }
    return surroundingEmptyTiles;
  };
}
