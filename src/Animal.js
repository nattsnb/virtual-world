import { Organism } from './Organism';
import { findNearestTiles } from './findNearestTiles';
import { classesList } from './classesList';
import { findRandomTileInArray } from './findRandomTileInArray';
import { findEmptyTilesSurroundingParents } from './findEmptyTilesSurroundingParents';

export class Animal extends Organism {
  constructor(board) {
    super(board);
    this.strength = 0;
  }

  mate(newTile, organism) {
    if (!newTile.currentOrganism) {
      return false;
    }
    if (organism.constructor === newTile.currentOrganism.constructor) {
      console.log(newTile.currentOrganism.constructor.name);
      const parent1SurroundingTiles = findNearestTiles(
        this.board.tiles,
        organism,
        this.board.width,
        this.board.height,
        this.numberOfSteps,
      );
      const parent2SurroundingTiles = findNearestTiles(
        this.board.tiles,
        newTile.currentOrganism,
        this.board.width,
        this.board.height,
        this.numberOfSteps,
      );
      const surroundingEmptyTiles = findEmptyTilesSurroundingParents(
        parent1SurroundingTiles,
        parent2SurroundingTiles,
      );

      if (surroundingEmptyTiles.length > 0) {
        const tileForChild = findRandomTileInArray(surroundingEmptyTiles);
        const child = Object.create(organism);
        child.createElement();
        child.age = 0;
        tileForChild.addOrganism(child);
        console.log(`it's  a match!`);
        console.log(child);
        return true;
      }
    }
  }

  fight(newTile, organism) {
    if (newTile.currentOrganism === null) {
      return false;
    }
    console.log(organism.constructor.name);
    if (
      organism.constructor !== newTile.currentOrganism.constructor &&
      newTile.currentOrganism instanceof Animal
    ) {
      console.log(newTile.currentOrganism.constructor.name);
      console.log("it's a fight!");
      if (organism.strength > newTile.currentOrganism.strength) {
        console.log(`first wins`);
        newTile.currentOrganism = null;
        newTile.tileContainer.innerHTML = '';
        console.log(newTile.currentOrganism);
        return false;
      }
      if (organism.strength < newTile.currentOrganism.strength) {
        console.log(`second wins`);
        console.log(organism);
        console.log(organism.x, organism.y);
        console.log(newTile.currentOrganism);
        console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
        console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
        this.board.tiles[organism.x][organism.y].currentOrganism = null;
        this.board.tiles[organism.x][organism.y].tileContainer.innerHTML = '';
        console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
        console.log(newTile.currentOrganism);
        return true;
      }
      console.log(`draw`);
      return true;
    }
    console.log('I ate it!');
    return newTile.currentOrganism.animalEatsPlant(organism);
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
    // console.log(organism)
    const newTile = findRandomTileInArray(nearestTiles);
    if (this.mate(newTile, this)) {
      return;
    }
    if (this.fight(newTile, this)) {
      return;
    }
    // console.log(`from: ${organism.x}, ${organism.y}`);
    newTile.addOrganism(organism);
    // console.log(`to ${organism.x}, ${organism.y}`);
  }
}
