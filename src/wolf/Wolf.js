import { Animal } from '../animal.js';
import wolfImage from './wolf.jpg';

export class Wolf extends Animal {
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 9;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = wolfImage;
    }
}