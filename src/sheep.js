import {Animal} from './animal.js';

export class Sheep extends Animal {
    constructor() {
        super();
        this.initiative = 4;
        this.strength = 3;
    }
}