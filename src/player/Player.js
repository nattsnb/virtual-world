import {Animal} from '../animal.js';
import playerImage from "./player.jpg";

export class Player extends Animal {
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 4;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = playerImage;
    }
}