import Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const certificateThumbnailsElement = document.querySelector<HTMLElement>(
  ".mySwiper",
);
const certificatesElement =
  document.querySelector<HTMLElement>(".mySwiper2");

if (certificateThumbnailsElement && certificatesElement) {
  const certificateThumbnails = new Swiper(certificateThumbnailsElement, {
    modules: [FreeMode],
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(certificatesElement, {
    modules: [Navigation, Thumbs],
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
