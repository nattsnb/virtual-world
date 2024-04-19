import { Animal } from '../Animal';
import sheepImage from './sheep.jpg';

export class Sheep extends Animal {
  static startParameters = {
    strength: 3,
    age: 0,
    numberOfSteps: 1,
    initiative: 4,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.initiative = 4;
    this.strength = 3;
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = sheepImage;
  }
}
