import { Organism } from './organism.js';
import {findNearestTiles} from "./findNearestTiles";

export class Animal extends Organism {
    constructor(board) {
        super(board);
        this.strength = 0;
        this.numberOfSteps = 1;
    }

    mate() {}

    fight() {}

    async action() {
        const tiles = this.board.tiles;
        const organism = this;
        const width = this.board.width;
        const height = this.board.height;
        const numberOfSteps = this.numberOfSteps;
        const nearestTiles = findNearestTiles(tiles, organism, width, height, numberOfSteps);
        const randomTileNumber = Math.floor(Math.random() * nearestTiles.length);
        const newTile = nearestTiles[randomTileNumber];
        console.log(`from: ${organism.x}, ${organism.y}`);
        newTile.addOrganism(organism);
        console.log(`to ${organism.x}, ${organism.y}`);
    }
}