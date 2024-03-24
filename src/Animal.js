import { Organism } from './organism.js';

export class Animal extends Organism {
    constructor() {
        super();
        this.strength = 0;
    }

    mate() {}

    fight() {}
}