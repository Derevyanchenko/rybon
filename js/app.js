jQuery(($) => {

    // input type number buttons

    // Уменьшаем на 1 
    $(document).on('click', '.input-number__minus', function () {
        let total = $(this).closest(".input--hoshi").find(".input-number__input");
        
        $(this).closest(".input--hoshi").addClass("input--filled");
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
        
    });

    // Увеличиваем на 1 
    $(document).on('click', '.input-number__plus', function () {
        let total = $(this).closest(".input--hoshi").find(".input-number__input");

        $(this).closest(".input--hoshi").addClass("input--filled");
        total.val(+total.val() + 1);
    });

    // Запрещаем ввод текста 
    document.querySelectorAll('.input-number__input').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });

});


// hide/show password

$(".md-form.password .md-form__icon").on("click", function() {

    let input = $(this).siblings("input");


    if (input.attr('type') == 'password'){


		$(this).parent().addClass('view');
        input.prop('type', 'text');
        
	} else {

		$(this).parent().removeClass('view');
        input.prop('type', 'password');
        
	}
	return false;

});

// add input class in focus

$(".md-form input, .md-form textarea").on("focus", function() {

    if( this.value.trim() == '' ) {
        $(this).next().addClass("active");
        $(this).addClass("active");
    }

});


// remove input class in focus

$(".md-form input, .md-form textarea").on("blur", function() {

    if( this.value.trim() == '' ) {
        $(this).next().removeClass("active");
        $(this).removeClass("active");
    }
    
    // form field validate 

    if( this.value.trim() !== '' ) {
        $(this).parent().addClass("validate_true");
    } else {
        $(this).parent().removeClass("validate_true");
    }

});

// popup settings


function show_popup()
{
    $(".overlay_popup").fadeIn(200);
    $("body, html").css("overflow-y", "hidden");
}

function close_popup()
{
    $('.overlay_popup').fadeOut(200);
    $("body, html").css("overflow-y", "");
}


$(".add-review-js").on("click", function(e) {
    e.preventDefault();
    show_popup();
});

$(".popup__close").on("click", function() {
    close_popup();
});


$(document).mouseup(function (event) {
    if ($(".popup").is(":visible")) {
        var popup = $(".popup");
        if (!popup.is(event.target) && popup.has(event.target).length === 0) {
            close_popup();
        }
    }
});

// faq

$(".faq__item-top").on("click", function(e) {

    e.preventDefault();

    let
        that = $(this),
        submenu = $(".faq__submnenu"),
        that_submenu = that.siblings(submenu);

    if ( that_submenu.is(":visible") ) {
        $(".faq__item-top").removeClass("active");
        $(".faq__item").removeClass("open");
        that.parent().removeClass("open");
        submenu.slideUp(300)
    } else {
        $(".faq__item-top").removeClass("active");
        $(".faq__item").removeClass("open");
        that.parent().addClass("open");
        that.addClass("active");
        submenu.slideUp(300)
        that.siblings(submenu).slideDown(300);
    }

    return false;

});

// input type tel

$('input[type=tel]').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});




$(window).on("load resize", function () {
    // scheme wrapper
    
    console.log("load resize")

    if($(window).width()<=991.98)
    {

        console.log("true width")

        $('.invest_plan__slider').not('.slick-initialized').slick({
            dots: false,
             appendDots: $(".invest_plan__dots"),
            prevArrow: $(".invest_plan__prev"),
            nextArrow: $(".invest_plan__next"),
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 2500,
                    settings: "unslick"
                },
                {
                    breakpoint: 1199,
                    settings: "unslick"
                },
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: true,
                        dots: true
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    }
    


    
});

// igor scripts

$('.slider_reviews').slick({
    centerMode: true,
    dots: false,
    arrows:true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 529.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            }
        }
    ]
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});


$(document).ready(function(){
    $(".pane_header").click(function(){
        $(this).next(".subitem").slideToggle().siblings(".subitem:visible").slideUp();
        $(this).toggleClass("active");      
        $(".span-minus-plus").toggleClass("minus plus");
        $(this).siblings(".pane_header").removeClass("active");                   
    });
});

$('#menu-toggle').click(function(){
    $(this).toggleClass('open');
})

$("#menu-toggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");

    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('#menu-toggle').removeClass('active');
    $('#menu-toggle').removeClass('open');
});
$(window).scroll(function(){
    $('body').toggleClass('scroll_bar', $(this).scrollTop() > 0);
});

(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }

    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
})();
