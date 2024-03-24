import {Animal} from './animal.js';

export class Player extends Animal {
    constructor() {
        super();
        this.initiative = 5;
        this.strength = 4;
    }
}