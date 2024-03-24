import {Animal} from './animal.js';

export class Turtle extends Animal {
    constructor() {
        super();
        this.initiative = 1;
        this.strenght = 2;
    }
}