import { findNearestTiles } from './findNearestTiles';

export function moveOrganism (tiles, organism, width, height) {
    const nearestTiles = findNearestTiles(tiles, organism, width, height, organism.numberOfSteps);
    const randomTileNumber = Math.floor(Math.random() * nearestTiles.length);
    const newTile = nearestTiles[randomTileNumber]
    console.log(`from: ${organism.x}, ${organism.y}`)
    newTile.addOrganism(organism)
    newTile.refresh()
    console.log(`to ${organism.x}, ${organism.y}`)
}