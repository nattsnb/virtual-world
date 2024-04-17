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

  itAteMe(organism) {
    super.itAteMe(organism);
    organism.strength = organism.strength + 3;
    console.log('I ate guarana:');
    console.log(organism);
  }
}
