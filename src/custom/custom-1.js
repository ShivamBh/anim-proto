import { TweenMax } from 'gsap';

class AnimationController1 {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    console.log('inside Controller init, el is:', this.el);
  }
}

export { AnimationController1 }

