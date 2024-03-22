import {Plant} from '../plant.js';
import guaranaImage from "./guarana.jpg";

export class Guarana extends Plant {
    constructor() {
        super();
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = guaranaImage;
    }
}