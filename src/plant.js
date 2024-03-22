import {Organism} from './organism.js';

export class Plant extends Organism {
    constructor() {
        super();
        this.name = "plant";
    }

    spread() {}
}