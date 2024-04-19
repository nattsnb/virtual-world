export class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.currentOrganism = null;
    this.createTileElement();
  }
  createTileElement() {
    this.tileContainer = document.createElement('div');
    this.tileContainer.classList.add('tileContainer');
  }

  setOrganism(organism) {
    this.currentOrganism = organism;
    // setCoordinates
    organism.x = this.x;
    organism.y = this.y;
    this.refresh();
  }

  refresh() {
    this.tileContainer.innerHTML = '';
    this.tileContainer.append(this.currentOrganism.element);
  }

  deleteOrganism(){
    this.tileContainer.innerHTML = '';
    this.currentOrganism = null;
  }
}
