var swiper = new Swiper(".mySwiper", {
    
    effect: "coverflow",
    
  centeredSlides: true,
  initialSlide: 1, 
  coverflowEffect: {
    rotate: 0, 
    stretch: 0.4, 
    depth: 100, 
    modifier: 1, 
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    992: {
      slidesPerView: 2,
      
      
    },
    1300: {
      slidesPerView: 3, 
      
    },
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