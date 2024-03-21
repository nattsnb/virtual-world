export class Tile {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.render();
    }
    render(){
        this.tileContainer = document.createElement('div');
        this.tileContainer.classList.add('tileContainer');
    }
}
