export function findNearestTiles (tiles, organism) {
    const x = organism.x;
    const y = organism.y;
    let arrayOfNearestTiles = [];
    if (tiles[x-1][y-1]) {
        arrayOfNearestTiles.push(tiles[x-1][y-1]);
    }
    if (tiles[x][y-1]) {
        arrayOfNearestTiles.push(tiles[x][y-1]);
    }
    if (tiles[x+1][y-1]) {
        arrayOfNearestTiles.push(tiles[x+1][y-1]);
    }
    if (tiles[x+1][y]) {
        arrayOfNearestTiles.push(tiles[x+1][y]);
    }
    if (tiles[x+1][y+1]) {
        arrayOfNearestTiles.push(tiles[x+1][y+1]);
    }
    if (tiles[x][y+1]) {
        arrayOfNearestTiles.push(tiles[x][y+1]);
    }
    if (tiles[x-1][y+1]) {
        arrayOfNearestTiles.push(tiles[x-1][y+1]);
    }
    if (tiles[x-1][y]) {
        arrayOfNearestTiles.push(tiles[x-1][y]);
    }
    return arrayOfNearestTiles





}