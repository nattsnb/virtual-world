import {Animal} from './animal.js';

export class Antelope extends Animal {
    constructor() {
        super();
        this.initiative = 4;
        this.strenght = 4;
        this.name = "antelope";
    }
}