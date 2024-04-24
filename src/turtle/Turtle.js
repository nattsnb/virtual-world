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
    if (this.strength < newTile.currentOrganism.strength && newTile.currentOrganism.strength > 5) {
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
}
