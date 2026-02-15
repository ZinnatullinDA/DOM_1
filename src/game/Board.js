export default class Board {
  constructor(container, size = 4) {
    if (!container) throw new Error('Board: container is required');

    this.container = container;
    this.size = size;
    this.cells = [];
  }

  init() {
    this.container.innerHTML = '';
    this.cells = [];

    const total = this.size * this.size;
    for (let i = 0; i < total; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = String(i);
      this.container.append(cell);
      this.cells.push(cell);
    }
  }

  getCell(index) {
    return this.cells[index];
  }

  get totalCells() {
    return this.cells.length;
  }
}
