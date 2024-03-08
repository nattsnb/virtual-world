class Organism {
    constructor() {
        this.age = 0
        this.initiative = 0
    }

    action() {
    }
}

class Animal extends Organism {
    constructor() {
        super();
        this.strenght = 0
    }

    mate() {
    }

    fight(){
    }
}

export class Wolf extends Animal{
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 9;
    }
}

export class Sheep extends Animal{
    constructor() {
        super();
        this.initiative = 4;
        this.strenght = 3;
    }
}

export class Fox extends Animal{
    constructor() {
        super();
        this.initiative = 7;
        this.strenght = 4;
    }
}

export class Antelope extends Animal{
    constructor() {
        super();
        this.initiative = 4;
        this.strenght = 4;
    }
}

export class Turtle extends Animal{
    constructor() {
        super();
        this.initiative = 1;
        this.strenght = 2;
    }
}

export class Wolf extends Animal{
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 9;
    }
}

export class Player extends Animal{
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 4;
    }
}

class Plant extends Organism {
    constructor() {
        super();
    }

    spread() {
    }
}

export class Grass extends Plant{
    constructor() {
        super();
    }
}

export class Guarana extends Plant{
    constructor() {
        super();
    }
}

export class PoisonBerry extends Plant{
    constructor() {
        super();
    }
}

export class SowThistle extends Plant{
    constructor() {
        super();
    }
}