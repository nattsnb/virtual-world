import { classesList } from './classesList';

export class Tile {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.currentOrganism = null;
    this.createTileElement();
    this.initializeEventListener();
    this.board = board;
  }
  createTileElement = () => {
    this.tileContainer = document.createElement('div');
    this.tileContainer.classList.add('tileContainer');
  };

  setOrganism = (organism) => {
    this.currentOrganism = organism;
    this.setCoordinates(this.x, this.y);
    this.refresh();
  };

  refresh = () => {
    this.tileContainer.innerHTML = '';
    this.tileContainer.append(this.currentOrganism.element);
  };

  deleteOrganism = () => {
    this.tileContainer.innerHTML = '';
    this.currentOrganism = null;
  };

  setCoordinates = (x, y) => {
    this.currentOrganism.x = x;
    this.currentOrganism.y = y;
  };

  initializeEventListener = () => {
    this.tileContainer.addEventListener('click', this.checkClick);
  };

  checkClick = () => {
    if (!this.currentOrganism) {
      let RandomOrganismClass =
        classesList[Math.floor(Math.random() * classesList.length)];
      const organism = new RandomOrganismClass(
        this.board,
        RandomOrganismClass.startParameters,
      );
      console.log(organism);
      this.setOrganism(organism);
    }
  };
}
