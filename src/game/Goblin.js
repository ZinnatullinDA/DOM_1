import goblinUrl from '../assets/goblin.png';
import { getRandomInt, getNextIndex } from '../helper/move';

export default class Goblin {
  constructor(board) {
    this.board = board;
    this.img = null;

    this.currentIndex = -1;
    this.isVisible = false;
    this.wasHit = false;
  }

  init() {
    const img = document.createElement('img');
    img.classList.add('goblin');
    img.src = goblinUrl;
    img.alt = 'goblin';
    this.img = img;
  }

  spawnRandom() {
    const total = this.board.totalCells;
    const next = getRandomInt(total);
    this.currentIndex = next;

    this.wasHit = false;
    this.isVisible = true;

    this.board.getCell(next).append(this.img);
  }

  moveRandomNoSame() {
    const total = this.board.totalCells;

    if (this.currentIndex < 0) {
      this.spawnRandom();
      return;
    }

    const next = getNextIndex(this.currentIndex, total);
    this.currentIndex = next;

    this.wasHit = false;
    this.isVisible = true;

    this.board.getCell(next).append(this.img);
  }

  hide() {
    if (this.img) this.img.style.display = 'none';
    this.isVisible = false;
  }

  show() {
    if (this.img) this.img.style.display = 'block';
    this.isVisible = true;
  }

  hit() {
    this.wasHit = true;
    this.hide();
  }
}
