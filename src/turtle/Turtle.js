import { Animal } from '../Animal';
import turtleImage from './turtle.jpg';
import { findNearestTiles } from '../findNearestTiles';
import { findRandomTileInArray } from '../findRandomTileInArray';

export class Turtle extends Animal {
  static startParameters = {
    strength: 2,
    age: 0,
    numberOfSteps: 1,
    initiative: 1,
    image: turtleImage,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
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
    if (newTile.currentOrganism) {
      this.shouldMate(newTile, organism);
      this.shouldFight(newTile, organism);
      this.shouldEat(newTile, organism);
    } else {
      // console.log(`from: ${organism.x}, ${organism.y}`);
      let odds = Math.random();
      if (odds < 0.25) {
        newTile.setOrganism(organism);
      }
      // console.log(`to ${organism.x}, ${organism.y}`);
    }
  }
  fight(newTile, organism) {
    // console.log(organism.constructor.name);
    // console.log(newTile.currentOrganism.constructor.name);
    // console.log("it's a fight!");
    if (organism.strength > newTile.currentOrganism.strength) {
      // console.log(`first wins`);
      newTile.currentOrganism.death();
      newTile.setOrganism(organism);
      // console.log(newTile.currentOrganism);
      return false;
    }
    if (organism.strength < newTile.currentOrganism.strength && newTile.currentOrganism.strength > 5) {
      // console.log(`second wins`);
      // console.log(organism);
      // console.log(organism.x, organism.y);
      // console.log(newTile.currentOrganism);
      // console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
      organism.death();
      // console.log(newTile.currentOrganism);
      return true;
    }
    // console.log(`draw`);
    return true;
  }
}
