import sd from "../core";

sd.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    sd(this[i]).on("click", () => {
      sd(this[i])
        .addClasses("tab__item_active")
        .findSiblings()
        .removeClasses("tab__item_active")
        .findClosest(".tab")
        .findBySelector(".tab__content")
        .removeClasses("tab__content_active")
        .findByIndex(sd(this[i]).findInd())
        .addClasses("tab__content_active");
    });
  }
};

// sd("[data-tabpanel] .tab__item").tab();
sd(".tab__panel .tab__item").tab();
