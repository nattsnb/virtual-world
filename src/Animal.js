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
    const surroundingEmptyTiles = findEmptyTilesSurroundingParents(this.board, this, newTile.currentOrganism);
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
      newTile.currentOrganism.death();
      newTile.setOrganism(this);
      // console.log(newTile.currentOrganism);
      return false;
    }
    if (this.strength < newTile.currentOrganism.strength) {
      // console.log(`second wins`);
      // console.log(this);
      // console.log(this.x, this.y);
      // console.log(newTile.currentOrganism);
      // console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
      this.death();
      // console.log(newTile.currentOrganism);
      return true;
    }
    // console.log(`draw`);
    return true;
  }

  async action() {
    const tiles = this.board.tiles;
    const organism = this;
    const width = this.board.width;
    const height = this.board.height;
    const numberOfSteps = this.numberOfSteps;
    const nearestTiles = this.board.findNearestTiles(organism);
    // console.log(organism)
    const newTile = findRandomTileInArray(nearestTiles);
    if (newTile.currentOrganism) {
      if (this.shouldMate(newTile, organism)) {
        this.mate(newTile, organism)
      }
      if (this.shouldFight(newTile, organism)) {
        this.fight(newTile, organism);
      } if (this.shouldEat(newTile, organism)) {
        newTile.currentOrganism.animalEatsPlant(organism);
      } else {
        // console.log(`from: ${organism.x}, ${organism.y}`);
        newTile.setOrganism(organism);
        // console.log(`to ${organism.x}, ${organism.y}`);
      }
    }
  }
  shouldMate(newTile, organism) {
    return organism.constructor === newTile.currentOrganism.constructor
  }

  shouldFight(newTile, organism) {
    return newTile.currentOrganism instanceof Animal
  }

  shouldEat(newTile, organism) {
    return newTile.currentOrganism instanceof Plant
  }
}
