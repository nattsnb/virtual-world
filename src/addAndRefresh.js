export function addAndRefresh(tile, organism) {
    tile.addOrganism(organism);
    tile.refresh();
}