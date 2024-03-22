import {Animal} from '../animal.js';
import sheepImage from "./sheep.jpg";

export class Sheep extends Animal {
    constructor() {
        super();
        this.initiative = 4;
        this.strenght = 3;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = sheepImage;
    }
}