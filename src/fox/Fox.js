import { Animal } from '../animal.js';
import foxImage from './fox.jpg'

export class Fox extends Animal {
    constructor(board) {
        super(board);
        this.initiative = 7;
        this.strength = 4;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = foxImage;
    }
}