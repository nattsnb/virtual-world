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

  animalEatsPlant(organism) {
    super.animalEatsPlant(organism);
    console.log(organism);
    console.log(organism.x, organism.y);
    console.log(`I ate berry`)
    organism.death()
    this.death()

    return true
  }
}
