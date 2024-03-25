export class Organism {
  constructor() {
    this.age = 0;
    this.initiative = 0;
    this.element = document.createElement('span');
    this.element.innerText = "organism";
    this.numberOfSteps = 0;
    this.isRoundPlayed = false;
  }

  createElement() {
    this.element = document.createElement('img');
    this.element.classList.add('organism-image')
  }
  action() {}
}

