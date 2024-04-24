import {findNearestTiles} from "./findNearestTiles";

export function findEmptyTilesSurroundingParents(board, parent1, parent2) {
  const parent1SurroundingTiles = findNearestTiles(
      this.board.tiles,
      parent1,
      this.board.width,
      this.board.height,
      parent1.numberOfSteps,
  );
  const parent2SurroundingTiles = findNearestTiles(
      this.board.tiles,
      parent2.currentOrganism,
      this.board.width,
      this.board.height,
      parent2.numberOfSteps,
  );
  let surroundingEmptyTiles = [];
  for (let i = 0; i < parent1SurroundingTiles.length; i++) {
    if (!parent1SurroundingTiles[i].currentOrganism) {
      surroundingEmptyTiles.push(parent1SurroundingTiles[i]);
    }
  }
  for (let i = 0; i < parent2SurroundingTiles.length; i++) {
    if (
      !parent2SurroundingTiles[i].currentOrganism &&
      !surroundingEmptyTiles.includes(parent2SurroundingTiles[i])
    ) {
      surroundingEmptyTiles.push(parent2SurroundingTiles[i]);
    }
  }
  return surroundingEmptyTiles;
}
