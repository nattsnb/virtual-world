import { findNearestTiles } from './findNearestTiles';

export function moveOrganism (tiles, organism, width, height) {
    if (organism.numberOfSteps === 0){
        return false
    }
    const nearestTiles = findNearestTiles(tiles, organism, width, height, organism.numberOfSteps);
    const randomTileNumber = Math.floor(Math.random() * nearestTiles.length);
    const newTile = nearestTiles[randomTileNumber]
    console.log(organism.x, organism.y)
    newTile.addOrganism(organism)
    newTile.refresh()
    console.log(organism.x, organism.y)
}