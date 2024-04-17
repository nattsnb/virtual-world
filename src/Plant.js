import { Organism } from './Organism';
import { findNearestTiles } from './findNearestTiles';
import { findRandomTileInArray } from './findRandomTileInArray';

export class Plant extends Organism {
  constructor(board) {
    super(board);
    this.chancesToSpread = 0.1;
  }

  async action() {
    this.spread(this);
  }

  spread(organism) {
    let odds = Math.random();
    if (odds < this.chancesToSpread) {
      const parentSurroundingTiles = findNearestTiles(
        this.board.tiles,
        organism,
        this.board.width,
        this.board.height,
        this.numberOfSteps,
      );
      let surroundingEmptyTiles = [];
      for (let i = 0; i < parentSurroundingTiles.length; i++) {
        if (!parentSurroundingTiles[i].currentOrganism) {
          surroundingEmptyTiles.push(parentSurroundingTiles[i]);
        }
      }
      if (surroundingEmptyTiles.length > 0) {
        const tileForChild = findRandomTileInArray(surroundingEmptyTiles);
        const child = Object.create(organism);
        child.createElement();
        child.age = 0;
        tileForChild.addOrganism(child);
        return true;
      }
    }
  }

  itAteMe(organism) {}
}
