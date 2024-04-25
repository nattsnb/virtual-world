import { Animal } from '../Animal';
import antelopeImage from './antelope.jpg';

export class Antelope extends Animal {
  static startParameters = {
    strength: 4,
    age: 0,
    numberOfSteps: 2,
    initiative: 4,
    image: antelopeImage,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }
  fight = (newTile) => {
    // console.log(this.constructor.name);
    // console.log(newTile.currentOrganism.constructor.name);
    // console.log("it's a fight!");
    if (this.strength > newTile.currentOrganism.strength) {
      // console.log(`first wins`);
      newTile.currentOrganism.death();
      // console.log(newTile.currentOrganism);
      return false;
    }
    if (this.strength < newTile.currentOrganism.strength) {
      let odds = Math.random();
      if (odds < 0.5) {
        // console.log(`antelope flies`)
        this.action();
      } else {
        this.death();
        // console.log(newTile.currentOrganism);
        return true;
      }
      // console.log(`draw`);
      return true;
    }
  };
}
