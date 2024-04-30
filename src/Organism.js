export class Organism {
  constructor(board, startParameters) {
    this.age = startParameters.age;
    this.image = startParameters.image;
    this.initiative = startParameters.initiative;
    this.element = document.createElement('span');
    this.element.innerText = 'organism';
    this.board = board;
    this.x = null;
    this.y = null;
  }

  createElement = () => {
    this.element = document.createElement('img');
    this.element.classList.add('organism-image');
    this.element.src = this.image;
  };
  action = async () => {};

  death = () => {
    // console.log(this.board.tiles[this.x][this.y].currentOrganism);
    this.board.tiles[this.x][this.y].deleteOrganism();
    // console.log(this.board.tiles[this.x][this.y].currentOrganism);
    const index = this.board.sortedOrganismsOnBoard.indexOf(this);
    // console.log(index)
    const x = this.board.sortedOrganismsOnBoard.splice(index, 1);
    console.log(this.board.sortedOrganismsOnBoard)
  };
}
