import { Organism } from './Organism';
import { findNearestTiles } from './findNearestTiles';
import { findRandomTileInArray } from './findRandomTileInArray';

export class Plant extends Organism {
  constructor(board) {
    super(board);
    this.chancesToSpread = 0.1;
  }

  async action() {
    this.spread();
  }

  spread() {
    let odds = Math.random();
    // console.log(odds)
    // console.log(this.chancesToSpread)
    if (odds < this.chancesToSpread) {
      const parentSurroundingTiles = findNearestTiles(
        this.board.tiles,
        this,
        this.board.width,
        this.board.height,
        this.numberOfSteps,
      );
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
        child.createElement();
        child.age = 0;
        tileForChild.addOrganism(child);
        // console.log(`I spread!`)
        // console.log(child)
        return true;
      }
    }
    // console.log(`I didn't spread!`)
  }

  itAteMe(organism) {}
}
