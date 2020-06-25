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

// add input class in focus

$(".md-form input").on("focus", function() {

    if( this.value.trim() == '' ) {
        $(this).next().addClass("active");
    }

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

// remove input class in focus

$(".md-form input").on("blur", function() {

    if( this.value.trim() == '' ) {
        $(this).next().removeClass("active");
    }
    
    // form field validate 

    if( this.value.trim() !== '' ) {
        $(this).parent().addClass("validate_true");
    } else {
        $(this).parent().removeClass("validate_true");
    }

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
