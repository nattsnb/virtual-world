import { Organism } from './organism.js';

export class Animal extends Organism {
    constructor() {
        super();
        this.strength = 0;
        this.numberOfSteps = 1;
    }

    mate() {}

    fight() {}
}