export class Organism {
  constructor(board, strength) {
    this.age = 0;
    this.strength = strength;
    this.element = document.createElement('span');
    this.element.innerText = 'organism';
    this.board = board;
    this.numberOfSteps = 1;
    this.x = null;
    this.y = null;
  }

  createElement() {
    this.element = document.createElement('img');
    this.element.classList.add('organism-image');
  }
  async action() {}

  death(){
    // console.log(this.board.tiles[this.x][this.y].currentOrganism);
    this.board.tiles[this.x][this.y].deleteOrganism()
    // console.log(this.board.tiles[this.x][this.y].currentOrganism);
  }

  // setCoordinates(){
  //
  // }
}
