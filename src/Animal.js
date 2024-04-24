import { Organism } from './Organism';
import { findRandomTileInArray } from './findRandomTileInArray';
import { findEmptyTilesSurroundingParents } from './findEmptyTilesSurroundingParents';
import { Plant } from './Plant';

export class Animal extends Organism {
  constructor(board, startParameters) {
    super(board, startParameters);
    this.initiative = startParameters.initiative;
    this.numberOfSteps = startParameters.numberOfSteps;
    this.strength = startParameters.strength;
  }

  mate(newTile) {
    const surroundingEmptyTiles = findEmptyTilesSurroundingParents(
      this.board,
      this,
      newTile.currentOrganism,
    );
    if (surroundingEmptyTiles.length > 0) {
      const tileForChild = findRandomTileInArray(surroundingEmptyTiles);
      const child = new this.constructor(
        this,
        this.constructor.startParameters,
      );
      tileForChild.setOrganism(child);
      // console.log(`it's  a match!`);
      // console.log(child);
      return true;
    }
  }

  fight(newTile) {
    // console.log(this.constructor.name);
    // console.log(newTile.currentOrganism.constructor.name);
    // console.log("it's a fight!");
    if (this.strength > newTile.currentOrganism.strength) {
      // console.log(`first wins`);
      this.board.tiles[this.x][this.y].currentOrganism = null;
      newTile.currentOrganism.death();
      newTile.setOrganism(this);

      // console.log(newTile.currentOrganism);
    }
    if (this.strength < newTile.currentOrganism.strength) {
      // console.log(`second wins`);
      // console.log(this);
      // console.log(this.x, this.y);
      // console.log(newTile.currentOrganism);
      // console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
      this.death();
      // console.log(newTile.currentOrganism);
    }
    // console.log(`draw`);
  }

  async action() {
    const nearestTiles = this.board.findNearestTiles(this);
    // console.log(this)
    const newTile = findRandomTileInArray(nearestTiles);
    if (newTile.currentOrganism) {
      if (this.shouldMate(newTile)) {
        this.mate(newTile);
      }
      if (this.shouldFight(newTile)) {
        this.fight(newTile);
      }
      if (this.shouldEat(newTile)) {
        newTile.currentOrganism.animalEatsPlant(this, newTile);
      }
    } else {
      // console.log(`from: ${organism.x}, ${organism.y}`);
      this.board.tiles[this.x][this.y].currentOrganism = null;
      newTile.setOrganism(this);
      // console.log(`to ${organism.x}, ${organism.y}`);
    }
  }
  shouldMate(newTile) {
    return this.constructor === newTile.currentOrganism.constructor;
  }

  shouldFight(newTile) {
    return newTile.currentOrganism instanceof Animal;
  }

  shouldEat(newTile) {
    return newTile.currentOrganism instanceof Plant;
  }
}
