import { isTileEmpty } from './isTileEmpty';

export function findRandomTile(width, height, tiles) {
  const randomX = Math.floor(Math.random() * width);
  const randomY = Math.floor(Math.random() * height);
  const foundTile = tiles[randomX][randomY];
  if (!isTileEmpty(foundTile)) {
    return findRandomTile(width, height, tiles);
  }
  return foundTile;
}
