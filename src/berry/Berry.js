import {Plant} from '../plant.js';
import berryImage from "./berry.jpg";

export class Berry extends Plant {
    constructor() {
        super();
        this.createElement()
    }

    createElement() {
        super.createElement()
        this.element.src = berryImage;
    }
}