$(function(){

  $('.project__content').slick({
    dots: true,
    prevArrow: '<button type="button" class="project-arrow-prev"><img src="" alt=""></button>',
    nextArrow: '<button type="button" class="project-arrow-next"><img src="" alt=""></button>',
    infinite: false,

    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $('.credit').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="credit__arrow-prev"></button>',
    nextArrow: '<button type="button" class="credit__arrow-next"></button>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, 
    ]
  });


  $('.partners__slider').slick({
    prevArrow: '<button type="button" class="partners__arrow-prev"></button>',
    nextArrow: '<button type="button" class="partners__arrow-next"></button>',
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    ]
  });

});

