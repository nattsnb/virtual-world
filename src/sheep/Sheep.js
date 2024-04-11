import { Animal } from '../animal.js';
import sheepImage from './sheep.jpg';

export class Sheep extends Animal {
    constructor(board) {
        super(board);
        this.initiative = 4;
        this.strength = 3;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = sheepImage;
    }
}