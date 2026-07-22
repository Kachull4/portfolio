import Swiper from "swiper";
import { A11y, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const certificateThumbnailsElement =
  document.querySelector<HTMLElement>(".mySwiper");
const certificatesElement = document.querySelector<HTMLElement>(".mySwiper2");

if (certificateThumbnailsElement && certificatesElement) {
  const certificateThumbnails = new Swiper(certificateThumbnailsElement, {
    modules: [FreeMode],
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(certificatesElement, {
    modules: [A11y, Navigation, Thumbs],
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: certificateThumbnails,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Předchozí certifikát",
      nextSlideMessage: "Následující certifikát",
      firstSlideMessage: "Toto je první certifikát",
      lastSlideMessage: "Toto je poslední certifikát",
      containerMessage: "Galerie certifikátů",
      containerRoleDescriptionMessage: "Karusel",
      itemRoleDescriptionMessage: "Certifikát",
      slideLabelMessage: "{{index}} z {{slidesLength}}",
    },
  });
}
