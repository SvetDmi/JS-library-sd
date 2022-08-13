import sd from "../core";

sd.prototype.modal = function (created) {
  function _calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.visibility = "hidden";
    div.style.overflowY = "scroll";
    document.body.appendChild(div);
    let scrollWight = div.offsetWidth - div.clientWidth;

    div.remove();
    return scrollWight;
  }

  const scroll = _calcScroll();

  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");

    sd(this[i]).click((e) => {
      e.preventDefault();
      sd(target).fadeIn(500);
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach((elem) => {
      sd(elem).click(() => {
        sd(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    sd(target).click((e) => {
      if (e.target.classList.contains("modal")) {
        sd(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

sd(".btn_open-modal").modal();
// sd('[data-toggle="modal"]').modal();

sd.prototype.createModal = function ({ text: { title, body }, count, btns }) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

    // btns = {count: num, settings: [[name, classNames=[], close, cb]]}

    const buttons = [];

    for (let j = 0; j < count; j++) {
      let btn = document.createElement("button");

      // btn.classList.add("btn", ...classNames[j]);
      // btn.textContent = name[j];
      // if (close[j]) {
      //   btn.setAttribute("data-close", "true");
      // }
      // if (cb[j] && typeof cb[j] === "function") {
      //   btn.addEventListener("click", cb[j]);
      // }

      btn.classList.add("btn", ...btns[j][1]);
      btn.textContent = btns[j][0];
      if (btns[j][2]) {
        btn.setAttribute("data-close", "true");
      }
      if (btns[j][3] && typeof btns[j][3] === "function") {
        btn.addEventListener("click", btns[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
        <div class="modal__dialog">
        <div class="modal__content">
          <button class="btn_close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal__header">
            <h4 class="modal__title">${title}</h4>
          </div>
          <div class="modal__body">
            ${body}
          </div>
          <div class="modal__footer">

          </div>        
        </div>
      </div>
      `;

    modal.querySelector(".modal__footer").append(...buttons);
    document.body.appendChild(modal);
    sd(this[i]).modal(true);
    sd(this[i].getAttribute("data-target")).fadeIn(500);
  }
};
