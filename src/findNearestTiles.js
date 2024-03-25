export function findNearestTiles (tiles, organism, width, height) {
    const x = organism.x;
    const y = organism.y;
    const xMax = width-1;
    const yMax = height-1;
    let arrayOfNearestTiles = [];
    console.log(`x:${x}  y:${y}`)
    if (x!==0 && y!==0) {
        arrayOfNearestTiles.push(tiles[x-1][y-1]);
    }
    if (y!==0) {
        arrayOfNearestTiles.push(tiles[x][y-1]);
        console.log(1)
    }
    if (x!==xMax && y!==0) {
        arrayOfNearestTiles.push(tiles[x+1][y-1]);
    }
    if (x!==xMax) {
        arrayOfNearestTiles.push(tiles[x+1][y]);
        console.log(2)
    }
    if (x!==xMax && y!==yMax) {
        arrayOfNearestTiles.push(tiles[x+1][y+1]);
    }
    if (y!==yMax) {
        arrayOfNearestTiles.push(tiles[x][y+1]);
        console.log(3)
    }
    if (x!==0 && y!==yMax) {
        arrayOfNearestTiles.push(tiles[x-1][y+1]);
    }
    if (x!==0) {
        arrayOfNearestTiles.push(tiles[x-1][y]);
        console.log(4)
    }
    return arrayOfNearestTiles





}