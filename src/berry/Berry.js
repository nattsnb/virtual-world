import { Plant } from '../Plant';
import berryImage from './berry.jpg';

export class Berry extends Plant {
  static startParameters = {
    age: 0,
    initiative: 0,
    chancesToSpread: 0.1,
    image: berryImage,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }

  animalEatsPlant(organism) {
    super.animalEatsPlant(organism);
    // console.log(organism);
    // console.log(organism.x, organism.y);
    // console.log(`I ate berry`)
    organism.death();
    this.death();

    return true;
  }
}
