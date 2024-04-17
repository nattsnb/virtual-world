import { Animal } from '../Animal';
import turtleImage from './turtle.jpg';

export class Turtle extends Animal {
  constructor(board) {
    super(board);
    this.initiative = 1;
    this.strength = 2;
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = turtleImage;
  }
}
