import { Plant } from '../Plant';
import guaranaImage from './guarana.jpg';

export class Guarana extends Plant {
  constructor(board) {
    super(board);
    this.createElement();
  }

  createElement() {
    super.createElement();
    this.element.src = guaranaImage;
  }
}
