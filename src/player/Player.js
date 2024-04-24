import { Animal } from '../Animal';
import playerImage from './player.jpg';

export class Player extends Animal {
  static startParameters = {
    strength: 5,
    age: 0,
    numberOfSteps: 1,
    initiative: 4,
    image: playerImage,
  };

  constructor(board, startParameters) {
    super(board, startParameters);
    this.initializeEventListener();
    this.createElement();
    this.x = 0;
    this.y = 0;
    this.tilesForAction = [];
    this.activeTile = [];
  }

  action() {
    this.activeTile = this.board.tiles[this.x][this.y];
    this.tilesForAction = this.board.findNearestTiles(this);
    this.tilesForAction.push(this.board.tiles[this.x][this.y]);
    console.log(this.activeTile);
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
    const nearestTiles = this.board.findNearestTiles(this)
    if (evt.code === 'KeyW') {
      console.log('keyW');
      const newY = this.activeTile.y - 1;
      const coordinates = {x: this.activeTile.x, y: newY};
      for (let i = 0; i > nearestTiles.length; i++) {
        const iElementCoordinates = {x: nearestTiles[i].x, y: nearestTiles[i].y};
        if (iElementCoordinates === coordinates) {
          this.moveIfPossible(coordinates);
        }
      }
    }
    if (evt.code === 'KeyA') {
      console.log('KeyA');
      const newX = this.activeTile.x - 1;
      const coordinates = {x: newX, y: this.activeTile.y};
      for (let i = 0; i > nearestTiles.length; i++) {
        const iElementCoordinates = {x: nearestTiles[i].x, y: nearestTiles[i].y};
        if (iElementCoordinates === coordinates) {
          this.moveIfPossible(coordinates);
        }
      }
    }
    if (evt.code === 'KeyS') {
      console.log('KeyS');
      const newY = this.activeTile.y + 1;
      const coordinates = {x: this.activeTile.x, y: newY};
      for (let i = 0; i > nearestTiles.length; i++) {
        const iElementCoordinates = {x: nearestTiles[i].x, y: nearestTiles[i].y};
        if (iElementCoordinates === coordinates) {
          this.moveIfPossible(coordinates);
        }
      }
    }
    if (evt.code === 'KeyD') {
      console.log('KeyD');
      const newX = this.activeTile.x + 1;
      const coordinates = {x: newX, y: this.activeTile.y};
      for (let i = 0; i > nearestTiles.length; i++) {
        const iElementCoordinates = {x: nearestTiles[i].x, y: nearestTiles[i].y};
        if (iElementCoordinates === coordinates) {
          this.moveIfPossible(coordinates);
        }
      }
    }
    if (evt.code === 'Enter') {
      console.log('Enter');
      this.tilesForAction = [];
      if (this.activeTile.currentOrganism) {
        if (this.shouldFight(this.activeTile, this)) {
          this.fight(this.activeTile, this);
        }
        if (this.shouldEat(this.activeTile, this)) {
          this.activeTile.currentOrganism.animalEatsPlant(this);
        } else {
          // console.log(`from: ${organism.x}, ${organism.y}`);
          this.activeTile.setOrganism(this);
          // console.log(`to ${organism.x}, ${organism.y}`);
        }
        this.resolveMovement();
      }
    }
  }
}

  // fight(newTile, organism) {
  //   console.log(organism.constructor.name);
  //   if (newTile.currentOrganism !== null) {
  //     console.log(newTile.currentOrganism.constructor.name);
  //     if (
  //       organism.constructor.name !==
  //         newTile.currentOrganism.constructor.name &&
  //       newTile.currentOrganism instanceof Animal
  //     ) {
  //       console.log("it's a fight!");
  //       if (organism.strength > newTile.currentOrganism.strength) {
  //         console.log(`first wins`);
  //         newTile.currentOrganism = null;
  //         newTile.tileContainer.innerHTML = '';
  //         console.log(newTile.currentOrganism);
  //         return false;
  //       }
  //       if (organism.strength < newTile.currentOrganism.strength) {
  //         console.log(`second wins`);
  //         console.log(organism);
  //         console.log(organism.x, organism.y);
  //         console.log(newTile.currentOrganism);
  //         console.log(newTile.currentOrganism.x, newTile.currentOrganism.y);
  //         console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
  //         this.board.tiles[organism.x][organism.y].currentOrganism = null;
  //         this.board.tiles[organism.x][organism.y].tileContainer.innerHTML = '';
  //         console.log(this.board.tiles[organism.x][organism.y].currentOrganism);
  //         alert('You lose!');
  //         throw new Error();
  //       }
  //       console.log(`it's a draw`);
  //       return true;
  //     }
  //     console.log('I ate it!');
  //     newTile.currentOrganism.animalEatsPlant(organism);
  //   }
  // }

