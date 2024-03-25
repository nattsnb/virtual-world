import './styles.css';
import { Board } from './board.js';

const paragraph = document.createElement('p');
paragraph.innerText = 'Hello!';
document.body.append(paragraph);

const board = new Board(10, 10);
board.moveAllOrganisms()


console.log(board.player + 'lalal')

console.log(board);


