import { findNearestTiles } from './findNearestTiles';

export function moveOrganism (tiles, organism, width, height) {
    if (organism.numberOfSteps === 0){
        console.log('organism doesnt move')
        return
    }
    if (organism.isRoundPlayed === true){
        return
    }
    const nearestTiles = findNearestTiles(tiles, organism, width, height, organism.numberOfSteps);
    const randomTileNumber = Math.floor(Math.random() * nearestTiles.length);
    const newTile = nearestTiles[randomTileNumber]
    console.log(`from: ${organism.x}, ${organism.y}`)
    newTile.addOrganism(organism)
    newTile.refresh()
    console.log(`to ${organism.x}, ${organism.y}`)
    organism.isRoundPlayed = true
    console.log(organism.isRoundPlayed)
}