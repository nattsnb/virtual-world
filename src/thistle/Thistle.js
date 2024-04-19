import { Plant } from '../Plant';
import thistleImage from './thistle.jpg';

export class SowThistle extends Plant {
  static startParameters = {
    age: 0,
    chancesToSpread: 0.3,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = thistleImage;
  }
}
