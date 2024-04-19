import { Plant } from '../Plant';
import grassImage from './grass.jpg';

export class Grass extends Plant {
  static startParameters = {
    age: 0,
    chancesToSpread: 0.1,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = grassImage;
  }
}
