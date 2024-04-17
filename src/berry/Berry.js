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
    console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
    this.board.tiles[organism.x][organism.y].currentOrganism = null;
    this.board.tiles[organism.x][organism.y].tileContainer.innerHTML = '';
    console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
    console.log(this.board.tiles[this.x][this.y].currentOrganism);
    this.board.tiles[this.x][this.y].currentOrganism = null;
    this.board.tiles[this.x][this.y].tileContainer.innerHTML = '';
    console.log(this.board.tiles[this.x][this.y].currentOrganism);

    return true
  }
}
