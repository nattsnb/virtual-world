export class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.render()
    }
    render(){
        const boardContainer = document.querySelector("#board-container");
        for (let i = 0; i < this.width; i++){
            const column = document.createElement("div")
            column.classList.add(`column-${i}`);
            boardContainer.append(column);
            for (let j = 0; j < this.height; j++) {
                const tile = document.createElement("div")
                tile.classList.add(`x-${i}`, `y-${j}`)
                column.append(tile)
            }
        }
    }
}

