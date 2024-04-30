import { Animal } from '../Animal';
import turtleImage from './turtle.jpg';
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
  action = async () => {
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
    } else if (this.shouldMove(newTile)) {
      let odds = Math.random();
      if (odds < 0.25) {
        this.moveOrganism(newTile);
      }
    } else {
      console.log('organism didnt move:');
      console.log(this, this.x, this.y);
    }
    this.age = this.age + 1;
  };
  fight = (newTile) => {
    // console.log(this.constructor.name);
    // console.log(newTile.currentOrganism.constructor.name);
    // console.log("it's a fight!");
    if (this.strength > newTile.currentOrganism.strength) {
      // console.log(`first wins`);
      newTile.currentOrganism.death();
      newTile.setOrganism(this);
      this.board.tiles[this.x][this.y].currentOrganism = null;
      // console.log(newTile.currentOrganism);
    }
    if (
      this.strength < newTile.currentOrganism.strength) {
      // console.log(`second wins`);
      // console.log(this);
      // console.log(this.x, this.y);
      // console.log(newTile.currentOrganism);
      // console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
      if (newTile.currentOrganism.strength > 5) {
        this.death();
        // console.log(newTile.currentOrganism);
      }
    }
    // console.log(`draw`);
  };
}
