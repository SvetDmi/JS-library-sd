import sd from "../core";

// добавить классы (указываются в кавычках каждый, через запятую)

sd.prototype.addClasses = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList && !this[i].classList.contains(...classNames)) {
      this[i].classList.add(...classNames);
    }
  }
  return this;
};

// удалить классы
sd.prototype.removeClasses = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList && this[i].classList.contains(...classNames)) {
      this[i].classList.remove(...classNames);
    }
  }
  return this;
};

// добавлять-удалять ОДИН класс
sd.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }

  return this;
};
