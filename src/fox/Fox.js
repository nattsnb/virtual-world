import { Animal } from '../Animal';
import foxImage from './fox.jpg';
import { findRandomTileInArray } from '../findRandomTileInArray';
import { findNearestTiles } from '../findNearestTiles';

export class Fox extends Animal {
  static startParameters = {
    strength: 4,
    age: 0,
    numberOfSteps: 1,
    initiative: 7,
    image: foxImage,
  };

  constructor(board, startParameters) {
    super(board, startParameters);
    this.createElement();
  }

  fight(newTile, organism) {
    if (newTile.currentOrganism === null) {
      return false;
    }
    // console.log(organism.constructor.name);
    if (
      organism.constructor !== newTile.currentOrganism.constructor &&
      newTile.currentOrganism instanceof Animal
    ) {
      // console.log(newTile.currentOrganism.constructor.name);
      // console.log("it's a fight!");
      if (organism.strength > newTile.currentOrganism.strength) {
        // console.log(`first wins`);
        newTile.currentOrganism.death();
        // console.log(newTile.currentOrganism);
        return false;
      }
      if (organism.strength < newTile.currentOrganism.strength) {
        const tiles = this.board.tiles;
        const organism = this;
        const width = this.board.width;
        const height = this.board.height;
        const numberOfSteps = this.numberOfSteps;
        const nearestTiles = findNearestTiles(
          tiles,
          organism,
          width,
          height,
          numberOfSteps,
        );
        const surroundingPossibleTiles = findRandomTileInArray(nearestTiles);

        return true;
      }
      // console.log(`draw`);
      return true;
    }
    // console.log('I ate it!');
    return newTile.currentOrganism.animalEatsPlant(organism);
  }

  shouldFight(newTile, organism) {
    return newTile.currentOrganism.constructor === Animal && newTile.currentOrganism.strength <= organism.strength
  }
}
