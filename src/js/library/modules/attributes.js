import sd from "../core";

// добавить аттрибут и его значение
sd.prototype.addAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name) && !this[i].getAttribute(value)) {
      this[i].setAttribute(name, value);
    }
  }
  return this;
};

// удалить аттрибут и его значение
sd.prototype.removeAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name) && this[i].getAttribute(value)) {
      this[i].removeAttribute(name, value);
    }
  }
  return this;
};

// добавлять-удалять аттрибут и его значение
sd.prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name) && !this[i].getAttribute(value)) {
      this[i].setAttribute(name, value);
    } else {
      this[i].removeAttribute(name, value);
    }
  }
  return this;
};
