import { Plant } from '../Plant';
import berryImage from './berry.jpg';

export class Berry extends Plant {
  constructor(board) {
    super(board);
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = berryImage;
  }
}
