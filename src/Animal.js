import { Organism } from './Organism';
import { findNearestTiles } from './findNearestTiles';
import { classesList } from './classesList';
import { findRandomTileInArray } from './findRandomTileInArray';

export class Animal extends Organism {
  constructor(board) {
    super(board);
    this.strength = 0;
    this.numberOfSteps = 1;
  }

  mate(newTile, organism) {
    console.log(organism.constructor.name);
    if (newTile.currentOrganism) {
      console.log(newTile.currentOrganism.constructor.name);
      if (
        organism.constructor.name === newTile.currentOrganism.constructor.name
      ) {
        console.log("it's a match!");
        const parent1SurroundingTiles = findNearestTiles(
          this.board.tiles,
          organism,
          this.board.width,
          this.board.height,
          this.numberOfSteps,
        );
        console.log(parent1SurroundingTiles);
        const parent2SurroundingTiles = findNearestTiles(
          this.board.tiles,
          newTile.currentOrganism,
          this.board.width,
          this.board.height,
          this.numberOfSteps,
        );
        console.log(parent2SurroundingTiles);
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

        if (surroundingEmptyTiles.length > 0) {
          const tileForChild = findRandomTileInArray(surroundingEmptyTiles);
          const child = Object.create(organism);
          child.createElement();
          child.age = 0;
          tileForChild.addOrganism(child);
          console.log(child);
          return true;
        }
      }
    }
  }

  fight(newTile, organism) {
    console.log(organism.constructor.name);
    if (newTile.currentOrganism !== null) {
      console.log(newTile.currentOrganism.constructor.name);
      if (
          organism.constructor.name !== newTile.currentOrganism.constructor.name && newTile.currentOrganism instanceof Animal
      ) {
        console.log("it's a fight!");
        if (organism.strength > newTile.currentOrganism.strength){
          delete newTile.currentOrganism
          console.log(newTile)
          return true
        }
        if (organism.strength < newTile.currentOrganism.strength){
          delete organism.currentOrganism
          console.log(newTile)
          return true
        }
        return true
      }
    }
  }

  async action() {
    const tiles = this.board.tiles;
    const organism = this;
    const width = this.board.width;
    const height = this.board.height;
    const numberOfSteps = this.numberOfSteps;
    const nearestTiles = findNearestTiles(
      tiles,
      organism,
      width,
      height,
      numberOfSteps,
    );
    const newTile = findRandomTileInArray(nearestTiles);
    if (this.mate(newTile, this)) {
      return;
    }
    if (this.fight(newTile, this)) {
      return;
    }
    console.log(`from: ${organism.x}, ${organism.y}`);
    newTile.addOrganism(organism);
    console.log(`to ${organism.x}, ${organism.y}`);
  }
}
