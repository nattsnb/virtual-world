import {Animal} from '../animal.js';
import turtleImage from "./turtle.jpg";

export class Turtle extends Animal {
    constructor() {
        super();
        this.initiative = 1;
        this.strenght = 2;
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = turtleImage;
    }
}