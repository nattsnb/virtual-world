import { Animal } from '../animal.js';
import playerImage from './player.jpg';

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
            console.log("keyW")
            resolve();
        }
        if (evt.code === "KeyA") {
            console.log("KeyA")
            resolve();
        }
        if (evt.code === "KeyS") {
            console.log("KeyS")
            resolve();
        }
        if (evt.code === "KeyD") {
            console.log("KeyD")
            resolve();
        }
    }
}