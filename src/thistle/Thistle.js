import { Plant } from '../plant.js';
import thistleImage from './thistle.jpg';

export class SowThistle extends Plant {
    constructor(board) {
        super(board);
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = thistleImage;
    }
}