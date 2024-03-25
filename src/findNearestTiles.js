export function findNearestTiles (tiles, organism, width, height, steps) {
    const minimalStep = steps - 1;
    const x = organism.x;
    const y = organism.y;
    const xMax = width-steps;
    const yMax = height-steps;
    let arrayOfNearestTiles = [];
    if (x>minimalStep && y>minimalStep) {
        arrayOfNearestTiles.push(tiles[x-steps][y-steps]);
    }
    if (y>minimalStep) {
        arrayOfNearestTiles.push(tiles[x][y-steps]);
    }
    if (x<xMax && y>minimalStep) {
        arrayOfNearestTiles.push(tiles[x+steps][y-steps]);
    }
    if (x<xMax) {
        arrayOfNearestTiles.push(tiles[x+steps][y]);
    }
    if (x<xMax && y<yMax) {
        arrayOfNearestTiles.push(tiles[x+steps][y+steps]);
    }
    if (y<yMax) {
        arrayOfNearestTiles.push(tiles[x][y+steps]);
    }
    if (x>minimalStep && y<yMax) {
        arrayOfNearestTiles.push(tiles[x-steps][y+steps]);
    }
    if (x>minimalStep) {
        arrayOfNearestTiles.push(tiles[x-steps][y]);
    }
    return arrayOfNearestTiles
}