export default class Modal {
  constructor() {
    this.overlay = null;
    this.titleEl = null;
    this.textEl = null;
    this.primaryBtn = null;
    this.onPrimary = null;
  }

  init() {
    if (this.overlay) return;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay hidden';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const title = document.createElement('h2');
    title.className = 'modal__title';

    const text = document.createElement('p');
    text.className = 'modal__text';

    const actions = document.createElement('div');
    actions.className = 'modal__actions';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'modal__btn';
    btn.textContent = 'Начать заново';

    actions.append(btn);
    modal.append(title, text, actions);
    overlay.append(modal);
    document.body.append(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.hide();
    });

    btn.addEventListener('click', () => {
      this.hide();
      if (typeof this.onPrimary === 'function') this.onPrimary();
    });

    this.overlay = overlay;
    this.titleEl = title;
    this.textEl = text;
    this.primaryBtn = btn;
  }

  show({ title, text, buttonText, onPrimary }) {
    this.init();

    this.titleEl.textContent = title ?? '';
    this.textEl.textContent = text ?? '';
    this.primaryBtn.textContent = buttonText ?? 'Ок';
    this.onPrimary = onPrimary ?? null;

    this.overlay.classList.remove('hidden');
  }

  hide() {
    if (!this.overlay) return;
    this.overlay.classList.add('hidden');
  }
}