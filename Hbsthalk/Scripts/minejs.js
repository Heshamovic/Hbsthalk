var navheight;
$(window).on('load', function () {
    $(".overlay").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
    if ($(window).scrollTop()) {
        $('nav').css("background-color", "#881125");
        $('.navbar').css("height", "90px");
        $('.nav-link').hover(function () {
            $('.nav-link:hover').css("color", "black");
        });
    }
    else {
        $('nav').css("background-color", "transparent");
        $('.navbar').css("height", "111px");
        $('.nav-link').hover(function () {
            $('.nav-link:hover').css("color", "#881125");
            $(".navbar-collapse").css("background-color", "transparent");


        });
    }
    if ($(this).width() <= 991) {
        $(".navbar-collapse").css("background-color", "#881125");
    }
    else {
        $(".navbar-collapse").css("background-color", "transparent");
    }

});
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').css("background-color", "#881125");
        $('.navbar').css("height", "90px");
        $('.nav-link').hover(function () {
            $('.nav-link:hover').css("color", "black");
        });
    }
    else {
        $('nav').css("background-color", "transparent");
        $('.navbar').css("height", "111px");
        $('.nav-link').hover(function () {
            $('.nav-link:hover').css("color", "#881125");
        });
    }
});
$('.nav-link').mouseleave(function () {
    $('.nav-link').css("color", "white");
});
var width = $(window).width();
$(window).on('resize', function () {

    if ($(this).width() <= 991) {
        $(".navbar-collapse").css("background-color", "#881125");
    }
    else {
        $(".navbar-collapse").css("background-color", "transparent");
    }
});
$(".loginBtn").click(function () {
    $('body').css("overflow", "hidden");
    $('.login').addClass("log-active");
});
$('.login').click(function () {
    /*$(this).css("cursor","auto");*/
    $('body').css("overflow", "auto");
    $(this).removeClass("log-active");
});
$('.login .inner').click(function (e) {
    e.stopPropagation();
});

/*start search bar*/
$("#search-btn").click(function () {
    $('body').css("overflow", "hidden");
    $('.search-bar').addClass("search-bar-active");
});
$('.search-bar').click(function () {
    /*$(this).css("cursor","auto");*/
    $('body').css("overflow", "auto");
    $(this).removeClass("search-bar-active");
});
$('.search-bar .search-bar-inner').click(function (e) {
    e.stopPropagation();
});

var signIn = function () {
    $.ajax({
        type: "POST",
        url: "/Home/login",
        data: {
            email: $("#signUserName").val(), password: $("#signPassword").val()
        },
        success: function (response) {
            if (response === "fail") {
                window.location.href = "/Home/Index";
            }
            else {
                window.location.href = "/Home/Index";
            }
        }
    })
}
/*END*/
//Home tutorial js

    /*subFilter*/
$(function () {
    $(".tree span").append($("<i class='fa fa-plus fa-fw'></i>"));
    $(".tree>ul ul").hide();
    $(".tree span").click(function (event) {
        var $this = $(this);
        var $ul = $this.parent().children("ul");

        if ($ul.length > 0) {
            if ($ul.is(":visible")) {
                $ul.slideUp();
                $this.children("i").removeClass("fa-minus").addClass("fa-plus");
            } else {
                $ul.slideDown();
                $this.children("i").removeClass("fa-plus").addClass("fa-minus");
            }
        }
    });
});
/*reg*/
$(".regBtn").click(function () {
    $('body').css("overflow", "hidden");
    $('.register').addClass("reg-active");
});

$('.register').click(function () {
    /*$(this).css("cursor","auto");*/
    $('body').css("overflow", "auto");
    $(this).removeClass("reg-active");
});
$('.register .reg-inner').click(function (e) {
    e.stopPropagation();
});
/*end*//*start counter*/
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = hours;
    document.getElementById("m").innerHTML = minutes;
    document.getElementById("s").innerHTML = seconds;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

/*END*/








/*Start Blogs*/

$("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction === "left") {
                $(".carousel-item")
                    .eq(i)
                    .appendTo(".carousel-inner");
            } else {
                $(".carousel-item")
                    .eq(0)
                    .appendTo($(this).find(".carousel-inner"));
            }
        }
    }
});



/*END*/
/*start blogs*/
$(function () {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});

/*END*/


/*Questions pop*/
$(".popper").click(function () {
    $('body').css("overflow", "hidden");
    $('.Qpop').addClass("Qpop-active");
});
 /*End Questions pop*/