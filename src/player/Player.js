import { Animal } from '../Animal';
import playerImage from './player.jpg';
import {findNearestTiles} from "../findNearestTiles";

export class Player extends Animal {
  constructor(board) {
    super(board);
    this.initializeEventListener();
    this.initiative = 5;
    this.strength = 4;
    this.createElement();
    this.x = 0;
    this.y = 0;
    this.tilesForAction = []
    this.activeTile = []
  }

  createElement() {
    super.createElement();
    this.element.src = playerImage;
  }

  action() {
    this.tilesForAction = findNearestTiles(this.board.tiles, this, this.board.width, this.board.height, this.numberOfSteps);
    this.tilesForAction.push(this.board.tiles[this.x][this.y])
    const currentTileDiv = this.board.tiles[this.x][this.y].tileContainer;
    currentTileDiv.setAttribute('id','activeTile');
    return this.move();
  }

  initializeEventListener = () => {
    window.addEventListener('keyup', (event) => {
      this.checkKeyPressed(event);
    });
  };

  moveIfPossible = (coordinates) => {
    this.activeTile = this.board.tiles[coordinates.x][coordinates.y];
    const activeTileDiv = this.activeTile.tileContainer;
    if (this.tilesForAction.includes(this.activeTile)){
      this.board.tiles[this.x][this.y].tileContainer.removeAttribute('id');
      activeTileDiv.setAttribute('id','activeTile');
    }
  };

  move = () => {
    return new Promise((resolve, reject) => {
      this.resolveMovement = resolve;
    });
  };

  checkKeyPressed(evt) {
    if (evt.code === 'KeyW') {
      console.log('keyW');
      const newY = this.y - 1;
      if (newY < this.board.height && newY >= 0 && newY >= this.y -1 && newY <= this.y + 1) {
        const coordinates = { x: this.x, y: newY };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyA') {
      console.log('KeyA');
      const newX = this.x - 1;
      if (newX < this.board.width && newX >= 0) {
        const coordinates = { x: newX, y: this.y };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyS') {
      console.log('KeyS');
      const newY = this.y + 1;
      if (newY < this.board.height && newY >= 0) {
        const coordinates = { x: this.x, y: newY };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyD') {
      console.log('KeyD');
      const newX = this.x + 1;
      if (newX < this.board.width && newX >= 0) {
        const coordinates = { x: newX, y: this.y };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'Enter') {
      console.log('Enter');
      this.activeTile.addOrganism(this);
      this.resolveMovement();
    }
  }
}
