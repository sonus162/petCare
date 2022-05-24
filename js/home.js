$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
});
$('.slick-gallery').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [{
      breakpoint: 992,
      settings: { slidesToShow: 4 },
      },{
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
      },{
          breakpoint: 360,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
      }]
});
$('.partner .partner-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
  responsive: [{
    breakpoint: 992,
    settings: { slidesToShow: 4 },
    },{
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
    },{
        breakpoint: 360,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
    }]
});
$('.slick-customer').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
});
$('.slick-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
});
$('.b-card-5 ').click(function() {
  var src = $(this).attr('datasrc');
  $("#myVideo .c_body").html('<iframe width="100%" height="500" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('#myVideo [ht-close="c-modal"]').click(function() {
   $("#myVideo .c_body iframe").remove();
});
 $('body').on('click', '[ht-trigger="c-modal"]', function() {
        $('body').append('<div class="c-modal-backdrop show"></div>');
        $('body').addClass('c-modal-open');
        $target = $($(this).attr('ht-target'));
        $target.css('display', 'block');
        $close = $(this).attr('ht-target-close');
        if ($close !== undefined) {
            $($close).removeClass('show');
            $($close).removeAttr('style');
            $('body').find('.c-modal-backdrop:last').remove();
        }
        setTimeout(function() { $target.addClass('show'); }, 200);
    });
    $('body').on('click', '[ht-close="c-modal"]', function() {
        var $close = $(this).attr('ht-target-close');
        var $reload = $(this).attr('ht-reload');
        if ($close) {
            $($close).removeClass('show');
            $('body').find('.c-modal-backdrop:last').removeClass('show');
            setTimeout(function() {
                $($close).removeAttr('style');
                $('body').find('.c-modal-backdrop:last').remove();
            }, 200);
        } else {
            $('.c-modal-backdrop').removeClass('show');
            $('.c-modal').removeClass('show');
            setTimeout(function() {
                $('.c-modal').removeAttr('style');
                $('body').removeClass('c-modal-open');
                $('.c-modal-backdrop').remove();
            }, 200);
        }
        if ($reload === 'true') {
            $redirect = ($(this).attr('ht-redirect') === 'false') ? '' : $(this).attr('ht-redirect');
            window.location.href = $redirect;
        }
});
    $('body').on('click', '[ht-skip]', function(e) { e.stopPropagation(); });
$(document).ready(function () {
    $('.b-card-5 ').click(function() {
        var src = $(this).attr('datasrc');
        console.log(src);
        $("#myVideo .c_body").html('<iframe width="100%" height="500" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
     });
     $('#myVideo [ht-close="c-modal"]').click(function() {
         console.log(123);
         $("#myVideo .c_body iframe").remove();
     });
});
/* BEGIN c-select-single */
$(document).ready(function() {
    $('.c-select .c-radio').find('.c_tick').remove();
    $('body').on('click', '[ht-trigger="c-select"]', function() {
        var focused = $(this).parent().hasClass('is-focused');
        $('[ht-close="c-select"]').click();
        if (!focused) {
            $(this).parent().addClass('is-focused');
            $('body').append('<div class="overlay-transparent" ht-close="c-select"></div>');
        }
    });
    $('body').on('click', '.c-select .c-radio', function() {
        var el_select = $(this).closest('.c-select');
        el_select.find('div.c_input').text($(this).find('span').text());
        el_select.find('div.c_input').removeClass('text--icon');
        el_select.find('.c-radio').removeClass('is-selected');
        $(this).addClass('is-selected');
        $('[ht-close="c-select"]').click();
    });
    $('body').on('click', '[ht-close="c-select"]', function() {
        $('.c-select').removeClass('is-focused');
        $('.overlay-transparent').remove();
    });
});
/* END c-select-single */