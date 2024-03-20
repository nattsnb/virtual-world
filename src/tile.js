export class Tile {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.render()
    }
    render(){
        const tileContainer = document.createElement('div');
        tileContainer.classList.add('tileContainer');

    }
}