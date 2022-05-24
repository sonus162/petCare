$(document).ready(function () {
    $('.slick-opinion').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        dots: true,
    });
});
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
$(document).ready(function () {
    $('.faq .faq-title').click(function (e) { 
        e.preventDefault();
        var $this = $(this);
        if($this.parent().hasClass('is-active')){
            $this.parent().removeClass('is-active');
            $this.children().removeClass('fas fa-minus');
            $this.children().addClass('fas fa-plus');
        }else {
            $this.parent().siblings().removeClass('is-active');
            $this.parent().addClass('is-active');
            $this.next().slideToggle('slow');
            $this.children().removeClass('fas fa-plus');
            $this.children().addClass('fas fa-minus');
        };
        
    });
});