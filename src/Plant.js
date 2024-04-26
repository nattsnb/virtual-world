import { Organism } from './Organism';
import { findRandomTileInArray } from './findRandomTileInArray';

export class Plant extends Organism {
  constructor(board, startParameters) {
    super(board, startParameters);
    this.chancesToSpread = startParameters.chancesToSpread;
  }

  action = async () => {
    this.spread();
  }

  spread = () => {
    let odds = Math.random();
    // console.log(odds)
    // console.log(this.chancesToSpread)
    if (odds < this.chancesToSpread) {
      const parentSurroundingTiles = this.findNearestTilesForPlant(this);
      // console.log(parentSurroundingTiles)
      let surroundingEmptyTiles = [];
      for (let i = 0; i < parentSurroundingTiles.length; i++) {
        if (!parentSurroundingTiles[i].currentOrganism) {
          surroundingEmptyTiles.push(parentSurroundingTiles[i]);
        }
      }
      if (surroundingEmptyTiles.length > 0) {
        const tileForChild = findRandomTileInArray(surroundingEmptyTiles);
        const child = Object.create(this);
        tileForChild.setOrganism(child);
        // console.warn(`I spread!`)
        // console.log(child)
        return true;
      }
    }
    // console.log(`I didn't spread!`)
  }

  animalEatsPlant(organism) {
    // console.log(this);
    // console.log(this.x, this.y);
    this.death();
    this.board.tiles[this.x][this.y].setOrganism(organism);
    this.board.tiles[this.x][this.y].refresh();
  }
  findNearestTilesForPlant = (plant) => {
    const x = plant.x;
    const y = plant.y;
    const xMax = this.width - 1;
    const yMax = this.height - 1;
    let arrayOfNearestTiles = [];
    // move left.up
    if (x > 0 && y > 0) {
      arrayOfNearestTiles.push(
          this.board.tiles[x - 1][y - 1],
      );
    }
    //move straight.up
    if (y > 0) {
      arrayOfNearestTiles.push(this.board.tiles[x][y - 1]);
    }
    // move right.up
    if (x < xMax && y > 0) {
      arrayOfNearestTiles.push(
          this.board.tiles[x + 1][y - 1],
      );
    }
    // move right.straight
    if (x < xMax) {
      arrayOfNearestTiles.push(this.board.tiles[x + 1][y]);
    }
    // move right.down
    if (x < xMax && y < yMax) {
      arrayOfNearestTiles.push(
          this.board.tiles[x + 1][y + 1],
      );
    }
    //move straight.down
    if (y < yMax) {
      arrayOfNearestTiles.push(this.board.tiles[x][y + 1]);
    }
    // move left.down
    if (x > 0 && y < yMax) {
      arrayOfNearestTiles.push(
          this.board.tiles[x - 1][y + 1],
      );
    }
    // move left.straight
    if (x > 0) {
      arrayOfNearestTiles.push(this.board.tiles[x - 1][y]);
    }
    return arrayOfNearestTiles;
  };
}
