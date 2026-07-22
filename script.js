if (
  typeof Swiper !== "undefined" &&
  document.querySelector(".mySwiper") &&
  document.querySelector(".mySwiper2")
) {
  const certificateThumbnails = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: certificateThumbnails,
    },
  });
}
