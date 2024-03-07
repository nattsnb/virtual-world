export class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.render()
    }
    render(){
        const boardContainer = document.querySelector("#board-container")
        for (let i = 0; i < this.width; i++){
            const tile = document.createElement("div")
            tile.classList.add(`column-${i}`)
            boardContainer.append(tile)
        }

    }
}

