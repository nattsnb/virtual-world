import { Animal } from '../animal.js';
import playerImage from './player.jpg';

export class Player extends Animal {
    constructor(board) {
        super(board);
        this.initializeEventListener()
        this.initiative = 5;
        this.strength = 4;
        this.createElement()
        this.x = 0;
        this.y = 0;
    }

    createElement() {
        super.createElement();
        this.element.src = playerImage;
    }


    action(){
        return this.move()
    }

    initializeEventListener = () => {
        window.addEventListener("keyup", (event) => {
            this.checkKeyPressed(event)
        })
    }

    moveIfPossible = (coordinates) => {
        const tile = this.board.tiles[coordinates.x][coordinates.y]
        console.log(tile.y)
        tile.addOrganism(this)
        this.resolveMovement();
    }

    move = () => {
        return new Promise((resolve, reject) => {
            this.resolveMovement = resolve;
        })
    }

    checkKeyPressed(evt) {
        if (evt.code === "KeyW") {
            console.log("keyW");
            const newY = this.y - 1;
            if (newY < this.board.height && newY >= 0) {
                const coordinates = {x: this.x, y: newY};
                this.moveIfPossible(coordinates);
            }

        }
        if (evt.code === "KeyA") {
            console.log("KeyA");
            const newX = this.x - 1;
            if (newX < this.board.width && newX >= 0) {
                const coordinates = {x: newX, y: this.y};
                this.moveIfPossible(coordinates);
            }
        }
        if (evt.code === "KeyS") {
            console.log("KeyS");
            const newY = this.y + 1;
            if (newY < this.board.height && newY >= 0) {
                const coordinates = {x: this.x, y: newY};
                this.moveIfPossible(coordinates);
            }
        }
        if (evt.code === "KeyD") {
            console.log("KeyD");
            const newX = this.x + 1;
            if (newX < this.board.width && newX >= 0) {
                const coordinates = {x: newX, y: this.y};
                this.moveIfPossible(coordinates);
            }
        }
    }
}