export function findEmptyTilesSurroundingParents(
  parent1SurroundingTiles,
  parent2SurroundingTiles,
) {
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
