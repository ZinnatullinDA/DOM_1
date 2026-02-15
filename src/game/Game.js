export default class Game {
  constructor(board, goblin, score) {
    this.board = board;
    this.goblin = goblin;
    this.score = score;

    this.intervalId = null;
    this.durationMs = 1000;
    this.maxMisses = 5;

    this.onBoardClick = this.onBoardClick.bind(this);
  }

  start() {
    this.stop();
    this.board.init();
    this.goblin.init();
    this.score.init();

    this.goblin.spawnRandom();
    this.goblin.show();

    this.board.container.addEventListener('click', this.onBoardClick);

    this.intervalId = setInterval(() => {
      if (this.goblin.isVisible && !this.goblin.wasHit) {
        this.score.addMiss();

        if (this.score.misses >= this.maxMisses) {
          this.gameOver();
          return;
        }
      }

      this.goblin.show();
      this.goblin.moveRandomNoSame();
    }, this.durationMs);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.board?.container) {
      this.board.container.removeEventListener('click', this.onBoardClick);
    }
  }

  onBoardClick(event) {
    const cell = event.target.closest('.cell');
    if (!cell) return;

    const idx = Number(cell.dataset.index);

    if (this.goblin.isVisible && idx === this.goblin.currentIndex) {
      this.goblin.hit();
      this.score.addPoint();
    }
  }

  gameOver() {
    this.stop();
    this.goblin.hide();
    alert(`Game Over!\nОчки: ${this.score.points}`);
    this.restart();
  }

  restart() {
    this.score.points = 0;
    this.score.misses = 0;
    this.score.render();
    this.start();
  }
}
