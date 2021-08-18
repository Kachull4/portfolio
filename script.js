var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
  scroll(loop);
}
loop();
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
  on: {
    createSlide: (carousel, slide) => {
      slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
        panOnlyZoomed: true,
        resizeParent: true,
      });
    },
    deleteSlide: (carousel, slide) => {
      if (slide.Panzoom) {
        slide.Panzoom.destroy();
        slide.Panzoom = null;
      }
    },
  },
});
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  infinite: false,
});
