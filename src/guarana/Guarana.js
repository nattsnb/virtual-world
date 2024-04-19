import { Plant } from '../Plant';
import guaranaImage from './guarana.jpg';

export class Guarana extends Plant {
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
    this.element.src = guaranaImage;
  }

  animalEatsPlant(organism) {
    super.animalEatsPlant(organism);
    organism.strength = organism.strength + 3;
    // console.log('I ate guarana:');
    // console.log(organism);
  }
}
