const sd = function (selector) {
  return new sd.prototype.init(selector);
};

sd.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

sd.prototype.init.prototype = sd.prototype;

window.sd = sd;

export default sd;
