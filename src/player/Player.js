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
            window.addEventListener("keydown", (event) => {
                this.checkKeyPressed(event, resolve)
            })

        }
        return new Promise(waitForAction)
    }

    checkKeyPressed(evt, resolve) {
        if (evt.keyCode === 87) {
            console.log("87")
            resolve();
        }
        if (evt.keyCode === 65) {
            console.log("65")
            resolve();
        }
        if (evt.keyCode === 83) {
            console.log("83")
            resolve();
        }
        if (evt.keyCode === 68) {
            console.log("68")
            resolve();
        }
    }
}