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
      const parentSurroundingTiles = this.board.findNearestTiles(this);
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
        console.warn(`I spread!`)
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
}
