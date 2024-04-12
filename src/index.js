import './styles.css';
import { Board } from './Board';

const paragraph = document.createElement('p');
paragraph.innerText = 'Hello!';
document.body.append(paragraph);

const board = new Board(10, 10);
board.round();
