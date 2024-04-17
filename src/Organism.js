export class Organism {
  constructor(board) {
    this.age = 0;
    this.initiative = 0;
    this.element = document.createElement('span');
    this.element.innerText = 'organism';
    this.board = board;
    this.numberOfSteps = 1;
  }

  createElement() {
    this.element = document.createElement('img');
    this.element.classList.add('organism-image');
  }
  async action() {}
}
