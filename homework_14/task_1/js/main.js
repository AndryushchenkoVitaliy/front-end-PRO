'use strict';

class Slider {
  constructor(root) {
    this.root = root;
    this.slides = [...root.querySelectorAll('.slides img')];
    this.prevBtn = root.querySelector('[data-prev]');
    this.nextBtn = root.querySelector('[data-next]');
    this.dotsBox = root.querySelector('[data-dots]');
    this.index = 0;

    this.init();
  }

  init() {
    this.createDots();
    this.update();

    this.nextBtn.addEventListener('click', () => this.next());
    this.prevBtn.addEventListener('click', () => this.prev());
  }

  createDots() {
    this.dots = this.slides.map((_, i) => {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => {
        this.index = i;
        this.update();
      });
      this.dotsBox.appendChild(dot);
      return dot;
    });
  }

  update() {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.slides[this.index].classList.add('active');
    this.dots[this.index].classList.add('active');

    this.prevBtn.hidden = this.index === 0;
    this.nextBtn.hidden = this.index === this.slides.length - 1;
  }

  next() {
    if (this.index < this.slides.length - 1) {
      this.index++;
      this.update();
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
      this.update();
    }
  }
}

document.querySelectorAll('[data-slider]')
  .forEach(slider => new Slider(slider));