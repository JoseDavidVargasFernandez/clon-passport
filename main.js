  var swiper = new Swiper(".plan-promo", {
   slidesPerview:3,
   spaceBetween:10,
     loop:true,
     centeredSlides: true,
      autoplay:{
          delay:9500,
          disableOnInteraction:false,
      },

 pagination: {
      el: '.swiper-pagination',
    },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
       breakpoints:{
          1024:{
           slidesPerview:3,
          },
        },
    });

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });