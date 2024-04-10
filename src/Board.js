import { classesList } from './classesList.js';
import { Player } from './player/Player.js';
import { Tile } from './Tile.js';
import { findRandomTile } from './findRandomTile';
import { moveOrganism } from './moveOrganism';
import {addAndRefresh} from "./addAndRefresh";

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.organisms = [];
    this.render();
    this.createInitialCharacters();
  }

  render() {
    const boardContainer = document.querySelector('#board-container');
    for (let i = 0; i < this.height; i++) {
      this.tiles[i] = [];
    }
    for (let i = 0; i < this.height; i++) {
      const row = document.createElement('div');
      row.classList.add(`row`);
      boardContainer.append(row);
      for (let j = 0; j < this.width; j++) {
        this.tiles[j][i] = new Tile(j,i);
        row.append(this.tiles[j][i].tileContainer)
      }
    }

  }
  createInitialCharacters() {
    const numberOfCharacters = Math.round(this.width * this.height * 0.3);
    for (let i = 0; i < numberOfCharacters; i++) {
      const RandomOrganismClass = classesList[Math.floor(Math.random() * classesList.length)];
      const organism = new RandomOrganismClass();
      const tileForNewOrganism = findRandomTile(this.width, this.height, this.tiles)
      addAndRefresh(tileForNewOrganism, organism);
      this.organisms.push(organism);
    }
    const player = new Player();
    const tileForPlayer = findRandomTile(this.width, this.height, this.tiles)
    addAndRefresh(tileForPlayer, player);
    this.organisms.push(player);
  }

  round(){
    console.log(this.organisms);
    this.organisms.sort((a, b) => b.initiative - a.initiative)
    // this.organisms.sort(
    //     function (a, b) {
    //       if (a.initiative === b.initiative) {
    //         return b.age - a.age
    //       }
    //       return (b.initiative > a.initiative)
    //     })
    console.log(this.organisms);
    this.organisms.forEach(async function(organism){
      await organism.action();
    })
  }

}









