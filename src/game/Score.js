export default class Score {
  constructor(container) {
    this.container = container;
    this.points = 0;
    this.misses = 0;

    this.scoreEl = null;
    this.missEl = null;
  }

  init() {
    if (this.scoreEl && this.missEl) {
        this.render();
        return;
    }
    const panel = document.createElement('div');
    panel.classList.add('panel');

    this.scoreEl = document.createElement('div');
    this.missEl = document.createElement('div');

    this.scoreEl.classList.add('panel__item');
    this.missEl.classList.add('panel__item');

    panel.append(this.scoreEl, this.missEl);

    this.container.parentElement?.insertBefore(panel, this.container);

    this.render();
  }

  addPoint() {
    this.points += 1;
    this.render();
  }

  addMiss() {
    this.misses += 1;
    this.render();
  }

  render() {
    if (this.scoreEl) this.scoreEl.textContent = `Очки: ${this.points}`;
    if (this.missEl) this.missEl.textContent = `Промахи: ${this.misses} / 5`;
  }
}
