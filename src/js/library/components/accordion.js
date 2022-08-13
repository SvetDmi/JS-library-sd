import sd from "../core";

sd.prototype.accordion = function (
  headActive = "accordion__head_active",
  contentActive = "accordion__content_active",
  paddings = 40
) {
  for (let i = 0; i < this.length; i++) {
    sd(this[i]).click(() => {
      sd(this[i]).toggleClass(headActive);
      sd(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight =
          this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

sd(".accordion__head").accordion();
