import { Animal } from '../Animal';
import playerImage from './player.jpg';
import { findNearestTiles } from '../findNearestTiles';

export class Player extends Animal {
  constructor(board) {
    super(board);
    this.initializeEventListener();
    this.initiative = 5;
    this.strength = 4;
    this.createElement();
    this.x = 0;
    this.y = 0;
    this.tilesForAction = [];
    this.activeTile = [];
  }

  createElement() {
    super.createElement();
    this.element.src = playerImage;
  }

  action() {
    this.activeTile = this.board.tiles[this.x][this.y];
    this.tilesForAction = findNearestTiles(
      this.board.tiles,
      this,
      this.board.width,
      this.board.height,
      this.numberOfSteps,
    );
    this.tilesForAction.push(this.board.tiles[this.x][this.y]);
    console.log(this.activeTile);
    console.log(this.tilesForAction[1]);
    const currentTileDiv = this.board.tiles[this.x][this.y].tileContainer;
    currentTileDiv.setAttribute('id', 'activeTile');
    return this.move();
  }

  initializeEventListener = () => {
    window.addEventListener('keyup', (event) => {
      this.checkKeyPressed(event);
    });
  };

  moveIfPossible = (coordinates) => {
    if (
      this.tilesForAction.includes(
        this.board.tiles[coordinates.x][coordinates.y],
      )
    ) {
      this.activeTile.tileContainer.removeAttribute('id');
      this.activeTile = this.board.tiles[coordinates.x][coordinates.y];
      console.log(this.activeTile);
      console.log(this.tilesForAction[1]);
      const activeTileDiv = this.activeTile.tileContainer;
      activeTileDiv.setAttribute('id', 'activeTile');
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
      const newY = this.activeTile.y - 1;
      if (
        newY < this.board.height &&
        newY >= 0 &&
        newY >= this.activeTile.y - 1 &&
        newY <= this.activeTile.y + 1
      ) {
        const coordinates = { x: this.activeTile.x, y: newY };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyA') {
      console.log('KeyA');
      const newX = this.activeTile.x - 1;
      if (newX < this.board.width && newX >= 0) {
        const coordinates = { x: newX, y: this.activeTile.y };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyS') {
      console.log('KeyS');
      const newY = this.activeTile.y + 1;
      if (newY < this.board.height && newY >= 0) {
        const coordinates = { x: this.activeTile.x, y: newY };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'KeyD') {
      console.log('KeyD');
      const newX = this.activeTile.x + 1;
      if (newX < this.board.width && newX >= 0) {
        const coordinates = { x: newX, y: this.activeTile.y };
        this.moveIfPossible(coordinates);
      }
    }
    if (evt.code === 'Enter') {
      console.log('Enter');
      this.tilesForAction = [];
      this.activeTile.addOrganism(this);
      this.resolveMovement();
    }
  }
}
