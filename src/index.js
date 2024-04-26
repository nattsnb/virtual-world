import './styles.css';
import { Board } from './Board';

const board = new Board(10, 10);

// for (let i = 0; i<20 ; i++) {
//     try {
//         console.log(`ROUND ${i}`)
//         board.round();
//     } catch (Error) {
//         break;
//     }
// }

let isPlayerAlive = true;

while (isPlayerAlive) {
  isPlayerAlive = await board.round();
}



