import { Animal } from '../animal.js';
import antelopeImage from '../antelope/antelope.jpg';

export class Antelope extends Animal {
    constructor() {
        super();
        this.initiative = 4;
        this.strenght = 4;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = antelopeImage;
    }
}