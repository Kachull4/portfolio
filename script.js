var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var menuLinks = document.querySelectorAll(".main-menu__link");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    var linkHref = menuLink.getAttribute("href");
    document.querySelector(linkHref).scrollIntoView({ behavior: "smooth" });
  });
});
