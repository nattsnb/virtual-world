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

  animalEatsPlant = (organism) => {
    // console.log(organism);
    // console.log(organism.x, organism.y);
    // console.log(`I ate berry`)
    organism.death();
    this.death();
    // console.log(this.board.tiles[organism.x][organism.y].currentOrganism)
    // console.log(organism)

    return true;
  };
}
