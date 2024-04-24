import { Plant } from '../Plant';
import guaranaImage from './guarana.jpg';

export class Guarana extends Plant {
  static startParameters = {
    age: 0,
    initiative: 0,
    chancesToSpread: 0.1,
    image: guaranaImage,
  };
  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }

  animalEatsPlant(organism) {
    this.death();
    this.board.tiles[this.x][this.y].setOrganism(organism)
    this.board.tiles[this.x][this.y].refresh()
    organism.strength = organism.strength + 3;
    // console.log('I ate guarana:');
    // console.log(organism);
  }
}
