import {Animal} from '../animal.js';
import foxImage from './fox.jpg'

export class Fox extends Animal {
    constructor() {
        super();
        this.initiative = 7;
        this.strength = 4;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = foxImage;
    }
}