import { Plant } from '../Plant';
import thistleImage from './thistle.jpg';

export class SowThistle extends Plant {
  constructor(board) {
    super(board);
    this.createElement();
    this.chancesToSpread = this.chancesToSpread * 3;
  }

  createElement() {
    super.createElement();
    this.element.src = thistleImage;
  }
}
