$(document).ready(function(){
  $('.main_menu_ul .nav-item').click(function(){
    $('.main_menu_ul .nav-item').removeClass('active');
    $(this).addClass('active');
  })

  // our product carosuel 
  jQuery("#carousel_our_products").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    // nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
  
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
  
      1024: {
        items: 4,
        nav: true,
        dots: false,
      },
  
      1366: {
        items: 4,
        nav: true,
        dots: false,
	      
      }
    },
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  });
  // testimonila carosuel 
  // jQuery("#carousel_testimonial").owlCarousel({
  //   autoplay: false,
  //   lazyLoad: true,
  //   loop: true,
  //   margin: 20,
  //    /*
  //   animateOut: 'fadeOut',
  //   animateIn: 'fadeIn',
  //   */
  //   responsiveClass: true,
  //   autoHeight: true,
  //   autoplayTimeout: 7000,
  //   smartSpeed: 800,
  //   // nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: true,
  //       dots: false,
  //     },
  
  //     600: {
  //       items: 1,
  //       nav:  true,
  //       dots: false,
  //     },
  
  //     1024: {
  //       items: 1,
  //       nav: true,
  //       dots: false,
  //     },
  
  //     1366: {
  //       items: 1,
  //       nav: true,
  //       dots: false,
	      
  //     }
  //   },
  //   navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  // });


  $('#client-review-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed:1500,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            
        },
        600:{
            items:1,
            nav:true,
            loop:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true,
            

        }
    },
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],

})

 // carosual 5
 jQuery("#carousel_5").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 3,
      nav:false,
      dots: true,
    },

    600: {
      items: 3,
      nav:true,
      dots: true,
    },

    1024: {
      items: 6,
      nav:true,
      dots: false,
    },

    1366: {
      items: 6,
      nav:true,
      dots: false,
    }
  },
  navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],

});

  // photo Gallery
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // select 2
  $('.s_form').select2();

  $('.fc-datepicker').datepicker({
    format: 'dd-mm-yyyy',
    
    todayHighlight: true,
    widgetPositioning: {
    horizontal: "bottom",
    vertical: "auto"
    }
  });
  $('.s_form_1_1').select2();
  $('.s_form_1_2').select2();
  $('.s_form_2_1').select2();
  $('.s_form_2_2').select2();
  $('.s_form_3_1').select2();
  $('.s_form_3_2').select2();

  $('.fc-datepicker_1_3').datepicker({
    format: 'dd-mm-yyyy',
    
    todayHighlight: true,
    widgetPositioning: {
    horizontal: "bottom",
    vertical: "auto"
    }
  });


  $('.fc-datepicker_2_3').datepicker({
    format: 'dd-mm-yyyy',
    
    todayHighlight: true,
    widgetPositioning: {
    horizontal: "bottom",
    vertical: "auto"
    }
  });
  $('.fc-datepicker_3_3').datepicker({
    format: 'dd-mm-yyyy',
    
    todayHighlight: true,
    widgetPositioning: {
    horizontal: "bottom",
    vertical: "auto"
    }
  });
})
