import {Wolf, Sheep, Fox, Antelope, Turtle, Grass, Guarana, PoisonBerry, SowThistle, Player} from './organism.js';
import {organismsList} from './organism.js';

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.render();
  }
  render() {
    const boardContainer = document.querySelector('#board-container');
    for (let i = 0; i < this.width; i++) {
      const column = document.createElement('div');
      column.classList.add(`column-${i}`);
      boardContainer.append(column);
      for (let j = 0; j < this.height; j++) {
        const tile = document.createElement('div');
        tile.classList.add(`x-${i}`, `y-${j}`);
        column.append(tile);
      }
    }
    let numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for(numberOfCharacters; numberOfCharacters > 0; numberOfCharacters--){
      let organism = new organismsList[Math.floor(Math.random() * organismsList.length)]();
      console.log("organism: " + organism);
      console.log(organism.initiative);
      const randomWidth = Math.floor(Math.random() * this.width);
      const randomHeight = Math.floor(Math.random() * this.height);
      console.log("x: " + randomWidth + " y: " + randomHeight)
      let tileForNewOrganism = document.querySelector('.x-${randomWidth}.y-${randomHeight}');
      tileForNewOrganism.innerText = "lalala"
    }
    const player = new Player();
    console.log("organism: " + player);
    console.log(player.initiative);

  }
}
