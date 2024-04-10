import {addAndRefresh} from "./addAndRefresh";
export function movePlayer (x, y, tile, player) {
    console.log(`from: ${player.x}, ${player.y}`)
    addAndRefresh(tile, player);
    console.log(`from: ${player.x}, ${player.y}`)
}