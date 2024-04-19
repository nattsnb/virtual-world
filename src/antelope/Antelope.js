import { Animal } from '../Animal';
import antelopeImage from './antelope.jpg';

export class Antelope extends Animal {
  static startParameters = {
    strength: 4,
    age: 0,
    numberOfSteps: 2,
    initiative: 4,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.initiative = 4;
    this.strength = 4;
    this.createElement();
    this.numberOfSteps = 2;
  }

  createElement() {
    super.createElement();
    this.element.src = antelopeImage;
  }
}
