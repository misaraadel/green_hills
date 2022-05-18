$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });

    var swiper = new Swiper('.header-swiper', {
        loop: true,
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 15,
        effect: 'fade',
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.popular-product', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

    var swiper = new Swiper('.top-category-swiper', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 6,
            },
        }
    });

    var swiper = new Swiper('.brands', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 5,
            },
        }
    });

    $('.add-cart').on('click', function () {
        var cart = $('.cart-list');
        var imgtodrag = $(this).closest('.product-box').find("img").first();
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    
                top: imgtodrag.offset().top ,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'border-radius': '50%',
                    'z-index': '9999'
            })
            .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
               
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    }); 

    var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
        spaceBetween: 10,
        
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0:{
                slidesPerView: 2,
            },
            700:{
                slidesPerView: 2,
            },
            1050:{
                slidesPerView: 4,
            }
        }
    });
    
    var swiper2 = new Swiper(".prodcutDetailsSwiper", {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });

    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });
});