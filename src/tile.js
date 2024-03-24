export class Tile {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.currentOrganism = null;
        this.createTileElement();
    }
    createTileElement(){
        this.tileContainer = document.createElement('div');
        this.tileContainer.classList.add('tileContainer');
    }

    addOrganism(organism) {
        this.currentOrganism = organism;
    }

    refresh() {
        this.tileContainer.append(this.currentOrganism.element)
    }
}
