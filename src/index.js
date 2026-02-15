import './css/style.css';

import Board from './game/Board';
import Goblin from './game/Goblin';
import Score from './game/Score';
import Game from './game/Game';

document.addEventListener('DOMContentLoaded', () => {
  const gameEl = document.getElementById('game');
  if (!gameEl) {
    console.log('Элемент с id "game" не найден');
    return;
  }

  const board = new Board(gameEl, 4);
  const score = new Score(gameEl);
  const goblin = new Goblin(board);

  const game = new Game(board, goblin, score);
  game.start();
});
