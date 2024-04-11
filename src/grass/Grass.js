import { Plant } from '../plant.js';
import grassImage from './grass.jpg';

export class Grass extends Plant {
    constructor(board) {
        super(board);
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = grassImage;
    }
}