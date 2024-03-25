import { Animal } from '../animal.js';
import playerImage from './player.jpg';
import { checkKeyPressed } from '../checkKeyPressed';

export class Player extends Animal {
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 4;
        this.createElement()
        this.addEventListeners()
        this.x = 0;
        this.y = 0;
    }

    createElement() {
        super.createElement();
        this.element.src = playerImage;
    }

    addEventListeners() {
        window.addEventListener("keydown", checkKeyPressed);
    }
}