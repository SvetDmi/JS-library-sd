import sd from "../core";

sd.prototype.carousel = function ({ autoplay = "false" }) {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector(".carousel__inner")
    ).width;
    const slides = this[i].querySelectorAll(".carousel__slide");
    const slidesField = this[i].querySelector(".carousel__slides");
    const dots = this[i].querySelectorAll(".carousel__indicator");
    const sliderId = this[i].getAttribute("id");

    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;

    const _nextSlide = function () {
      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
    };

    const _activeDot = function () {
      dots.forEach((dot) => dot.classList.remove("carousel__indicator_active"));
      dots[slideIndex].classList.add("carousel__indicator_active");
    };

    if (autoplay == "true") {
      setInterval(() => {
        _nextSlide();
        _activeDot();
      }, 5000);
    }

    sd(this[i].querySelector(".carousel__btn_next")).click((e) => {
      e.preventDefault();
      _nextSlide();
      _activeDot();
    });

    sd(this[i].querySelector(".carousel__btn_prev")).click((e) => {
      e.preventDefault();
      if (offset == 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      _activeDot();
    });

    sd(`#${sliderId} .carousel__indicator`).click((e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;

      slidesField.style.transform = `translateX(-${offset}px)`;
      _activeDot();
    });
  }
};

sd(".carousel").carousel({ autoplay: "true" });
