import {isTileEmpty} from "./isTileEmpty.js";

export function findRandomTile (width, height) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    const foundTile = this.tiles[randomX][randomY];
    if (isTileEmpty(foundTile) !== true) {
        return findRandomTile(width, height);
    }
    return foundTile
}