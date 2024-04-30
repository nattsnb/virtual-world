import { isTileEmpty } from './isTileEmpty';

export function findRandomTileOnBoard(width, height, tiles) {
  const randomX = Math.floor(Math.random() * width);
  const randomY = Math.floor(Math.random() * height);
  const foundTile = tiles[randomX][randomY];
  if (!isTileEmpty(foundTile)) {
    return findRandomTileOnBoard(width, height, tiles);
  }
  return foundTile;
}
