import './styles.css';
import { Board } from './Board';

const paragraph = document.createElement('p');
paragraph.innerText = 'Hello!';
document.body.append(paragraph);

const board = new Board(10, 10);

// for (let i = 0; i<20 ; i++) {
//     try {
//         console.log(`ROUND ${i}`)
//         board.round();
//     } catch (Error) {
//         break;
//     }
// }

board.round();