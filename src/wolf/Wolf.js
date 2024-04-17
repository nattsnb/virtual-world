import { Animal } from '../Animal';
import wolfImage from './wolf.jpg';

export class Wolf extends Animal {
  constructor(board) {
    super(board);
    this.initiative = 5;
    this.strength = 9;
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = wolfImage;
  }
}
