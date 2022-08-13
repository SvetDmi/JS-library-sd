import sd from "../core";

sd.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    sd(this[i]).click(() => {
      sd(`[data-id="${id}"]`).fadeToggle(300);
    });
  }
};

sd(".dropdown__btn").dropdown();
