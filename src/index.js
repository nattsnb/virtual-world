import './styles.css';
import {Board} from './board.js'
import {Wolf} from './organism.js'

const paragraph = document.createElement('p');
paragraph.innerText = 'Hello!';
document.body.append(paragraph);

const board = new Board(5,5)

console.log(board)

const wolf = new Wolf()

console.log(wolf)