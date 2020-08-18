$(function () {


//back to top

    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });

        $('#hoop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
              scrollTop: $("#blah").offset().top - 95
  }, 700);
        });

        $('#hoop2').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
              scrollTop: $("#blah2").offset().top - 95
  }, 700);
        });

        $('#hoop3').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
              scrollTop: $("#blah3").offset().top - 95
  }, 700);
        });
  }


//Isotope filter (skill sets icons, portfolio images)
    $(document).ready(function ()
    {
      if ($('.filter-row').length)
      {
        var $galleryFilter = $('.filter-row').isotope(
        {
          itemSelector: '.filter-item',
          masonry: {columnWidth: '.filter-item'}
        });
        $('.filter-list').on('click', 'li', function ()
        {
          var filterValue = $(this).attr('data-filter');
          $('.filter-list').find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
          $galleryFilter.isotope({filter: filterValue});
        });
        $galleryFilter.imagesLoaded().progress(function ()
        {
          $galleryFilter.isotope('layout');
        });
      }
    });

//Easing animations
    $("#btn1").click(function()
    {
        $("#box").animate({height: "300px"}, 2000, "easeOutBounce");
    }
                    );
    $("#btn2").click(function()
    {
        $("#box").animate({height: "100px"});
    }
                    );

//Sticky navbar
    $(".sticky").sticky({topSpacing: 0});

//Textillate animations
    $('.tlt').textillate(
      {
        loop: true
      }
                        );

//WOW animation (skill sets popups, text-over-video popup)
    wow = new WOW(
      {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      }
                );
    wow.init();

// end function
  });
