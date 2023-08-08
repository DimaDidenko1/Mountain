var swiper = new Swiper(".mySwiper", {
    
    effect: "coverflow",
    slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1, 
  coverflowEffect: {
    rotate: 0, 
    stretch: 0.4, 
    depth: 100, 
    modifier: 1, 
    slideShadows: false,
  },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    }
    
  });