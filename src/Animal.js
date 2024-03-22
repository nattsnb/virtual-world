import {Organism} from './organism.js';

export class Animal extends Organism {
    constructor() {
        super();
        this.strenght = 0;
    }

    mate() {}

    fight() {}
}