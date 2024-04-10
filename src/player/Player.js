import { Animal } from '../animal.js';
import playerImage from './player.jpg';
import {movePlayer} from "../movePlayer";

export class Player extends Animal {
    constructor() {
        super();
        this.initiative = 5;
        this.strenght = 4;
        this.createElement()
        this.x = 0;
        this.y = 0;
    }

    createElement() {
        super.createElement();
        this.element.src = playerImage;
    }


    action(){
        const waitForAction = (resolve, reject) => {
            window.addEventListener("keyup", (event) => {
                this.checkKeyPressed(event, resolve)
            })

        }
        return new Promise(waitForAction)
    }

    checkKeyPressed(evt, resolve) {
        if (evt.code === "KeyW") {
            console.log("keyW");
            const newY = this.y + 1;
            resolve();
        }
        if (evt.code === "KeyA") {
            console.log("KeyA");
            const newX = this.x - 1;
            resolve();
        }
        if (evt.code === "KeyS") {
            console.log("KeyS");
            const newY = this.y - 1;
            resolve();
        }
        if (evt.code === "KeyD") {
            console.log("KeyD");
            const newX = this.x + 1;
            resolve();
        }
    }
}