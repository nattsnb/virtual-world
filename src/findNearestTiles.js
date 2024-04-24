export function findNearestTiles(tiles, organism, width, height, steps) {
  const minimalStep = steps - 1;
  const x = organism.x;
  const y = organism.y;
  const xMax = width - steps;
  const yMax = height - steps;
  let arrayOfNearestTiles = [];
  // move left.up
  if (x > minimalStep && y > minimalStep) {
    arrayOfNearestTiles.push(tiles[x - steps][y - steps]);
  }
 //move straight.up
  if (y >= minimalStep) {
    arrayOfNearestTiles.push(tiles[x][y - steps]);
  }
  // move right.up
  if (x < xMax && y > minimalStep) {
    arrayOfNearestTiles.push(tiles[x + steps][y - steps]);
  }
  // move right.straight
  if (x < xMax) {
    arrayOfNearestTiles.push(tiles[x + steps][y]);
  }
  // move right.down
  if (x < xMax && y < yMax) {
    arrayOfNearestTiles.push(tiles[x + steps][y + steps]);
  }
  //move straight.down
  if (y < yMax) {
    arrayOfNearestTiles.push(tiles[x][y + steps]);
  }
  // move left.down
  if (x > minimalStep && y < yMax) {
    arrayOfNearestTiles.push(tiles[x - steps][y + steps]);
  }
  // move left.straight
  if (x > minimalStep) {
    arrayOfNearestTiles.push(tiles[x - steps][y]);
  }
  return arrayOfNearestTiles;
}

// const possibleSteps = {
//   left: {
//     up: tiles[x - steps][y - steps],
//     down: tiles[x - steps][y + steps],
//     straight: tiles[x - steps][y]
//   },
//   right: {
//     up: tiles[x + steps][y - steps],
//     down: tiles[x + steps][y + steps],
//     straight: tiles[x + steps][y]
//   },
//   straight: {
//     up: tiles[x][y - steps],
//     down: tiles[x][y + steps],
//   }
// }