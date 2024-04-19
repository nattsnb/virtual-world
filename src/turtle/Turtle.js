import { Animal } from '../Animal';
import turtleImage from './turtle.jpg';

export class Turtle extends Animal {
  static startParameters = {
    strength: 2,
    age: 0,
    numberOfSteps: 1,
    initiative: 1,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.initiative = 1;
    this.strength = 2;
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = turtleImage;
  }
}
