import { Animal } from '../Animal';
import turtleImage from './turtle.jpg';
import {findNearestTiles} from "../findNearestTiles";
import {findRandomTileInArray} from "../findRandomTileInArray";

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
    let odds = Math.random();
    if (odds < 0.25){
      // console.log(`turtle moves`)
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
      newTile.setOrganism(organism);
      // console.log(`to ${organism.x}, ${organism.y}`);
    }
  }
}
