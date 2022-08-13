import sd from "../core";

//служебные функции для появление и исчезновение через opacity

sd.prototype._animateOverTime = function (duration, callback, final) {
  let timeStart;

  function animateOverTime(time) {
    if (!timeStart) {
      timeStart = 0;
    }
    let timeChanged = time - timeStart;
    let complection = Math.min(timeChanged / duration, 1); //вычисление для opacity от 0 до 1

    callback(complection);

    if (timeChanged < duration) {
      requestAnimationFrame(animateOverTime);
    } else {
      if (typeof final === "function") {
        final();
      }
    }
  }
  return animateOverTime;
};

sd.prototype._fadeIn = function (i, duration, display = "block", final) {
  this[i].style.display = display;
  const inn = (complection) => {
    this[i].style.opacity = complection;
  };
  const animated = this._animateOverTime(duration, inn, final);
  requestAnimationFrame(animated);
};

sd.prototype._fadeOut = function (i, duration, final) {
  const out = (complection) => {
    this[i].style.opacity = 1 - complection;
    if (complection === 1) {
      this[i].style.display = "none";
    }
  };
  const animated = this._animateOverTime(duration, out, final);
  requestAnimationFrame(animated);
};

// появление через через opacity

sd.prototype.fadeIn = function (duration, display = "block", final) {
  for (let i = 0; i < this.length; i++) {
    this._fadeIn(i, duration, (display = "block"), final);
  }
  return this;
};

//  исчезновение через opacity

sd.prototype.fadeOut = function (duration, final) {
  for (let i = 0; i < this.length; i++) {
    this._fadeOut(i, duration, final);
  }
  return this;
};
// появление-исчезновение через opacity

sd.prototype.fadeToggle = function (duration, display = "block", final) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this._fadeIn(i, duration, (display = "block"), final);
    } else {
      this._fadeOut(i, duration, final);
    }
  }
  return this;
};
