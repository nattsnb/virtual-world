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
        organism.x = this.x;
        organism.y = this.y;
    }

    refresh() {
        this.tileContainer.append(this.currentOrganism.element) // co jest z tym elementem?
    }
}
