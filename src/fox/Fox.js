import { Animal } from '../Animal';
import foxImage from './fox.jpg';

export class Fox extends Animal {
  static startParameters = {
    strength: 4,
    age: 0,
    numberOfSteps: 1,
    initiative: 7,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.initiative = 7;
    this.strength = 4;
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = foxImage;
  }
}
