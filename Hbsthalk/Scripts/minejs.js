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

/*SignIn & Register*/
var signIn = function (e) {
    e.preventDefault();
    $("#loginError").css("display", "none");
    $.ajax({
        type: "POST",
        url: "/Home/login",
        data: {
            email: $("#signUserName").val(), password: $("#signPassword").val()
        },
        success: function (response) {
            if (response === "fail") {
                window.location.href = "/Home/Index";
                $("#loginError").css("display", "block");
            }
            else {
                window.location.href = "/Home/Index";
            }
        }
    })
}
var register = function (e) {
    e.preventDefault();
    $("#regUName").css("display", "none");
    $("#regEmail").css("display", "none");
    var regData = $("#regForm").serialize();
    if (!$("#regForm").valid()) {
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/Home/Register",
        data: regData,
        success: function (response) {
            if (response === "success") {
                window.location.href = "/Home/Index";
            }
            else if (response === "exist username") {
                $("#regUName").css("display", "block");
            }
            else {
                $("#regEmail").css("display", "block");
            }
        }
    })
}
var logout = function (ide) {
    $.ajax({
        type: "POST",
        url: "/Home/logout",
        data: { id: ide },
        success: function (response) {
            window.location.href = "/Home/Index";
        }
    })
}
/*END*/

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
/*END*/

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
/*end*/

/*start counter*/
// Set the date we're counting down to
/*var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
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
}, 1000);*/
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


/*Filter*/
 
    $(".nicescroll-box").niceScroll({
        cursorcolor: "#881125",
        background: "white",
        cursorwidth: "16px"
    });


/*select item */
$(".momo1").click(function () {
    "use strict";
    if ($(".test1").hasClass("fa-hand-point-right")) {
        $(".test1").removeClass("far");
        $(".test1").removeClass("fa-hand-point-right");
        $(".test1").addClass("fas");
        $(".test1").addClass("fa-arrow-circle-right");
        $(".momo1").removeClass("cust-time2");
        $(".momo1").addClass("cust-time");
    }
    else {
        $(".test1").removeClass("fas");
        $(".test1").removeClass("fa-arrow-circle-right");
        $(".test1").addClass("far");
        $(".test1").addClass("fa-hand-point-right");
        $(".momo1").removeClass("cust-time");
        $(".momo1").addClass("cust-time2");
        $(".momo1").css('padding', '10px');
        $(".momo1").css('border-radius', '10px');
    }

});
$(".momo2").click(function () {
    "use strict";
    if ($(".test2").hasClass("fa-hand-point-right")) {
        $(".test2").removeClass("far");
        $(".test2").removeClass("fa-hand-point-right");
        $(".test2").addClass("fas");
        $(".test2").addClass("fa-arrow-circle-right");
        $(".momo2").removeClass("cust-time2");
        $(".momo2").addClass("cust-time");
    }
    else {
        $(".test2").removeClass("fas");
        $(".test2").removeClass("fa-arrow-circle-right");
        $(".test2").addClass("far");
        $(".test2").addClass("fa-hand-point-right");
        $(".momo2").removeClass("cust-time");
        $(".momo2").addClass("cust-time2");
        $(".momo2").css('padding', '10px');
        $(".momo2").css('border-radius', '10px');
    }

});
$(".momo3").click(function () {
    "use strict";
    if ($(".test3").hasClass("fa-hand-point-right")) {
        $(".test3").removeClass("far");
        $(".test3").removeClass("fa-hand-point-right");
        $(".test3").addClass("fas");
        $(".test3").addClass("fa-arrow-circle-right");
        $(".momo3").removeClass("cust-time2");
        $(".momo3").addClass("cust-time");
    }
    else {
        $(".test3").removeClass("fas");
        $(".test3").removeClass("fa-arrow-circle-right");
        $(".test3").addClass("far");
        $(".test3").addClass("fa-hand-point-right");
        $(".momo3").removeClass("cust-time");
        $(".momo3").addClass("cust-time2");
        $(".momo3").css('padding', '10px');
        $(".momo3").css('border-radius', '10px');
    }

});
$(".momo4").click(function () {
    "use strict";
    if ($(".test4").hasClass("fa-hand-point-right")) {
        $(".test4").removeClass("far");
        $(".test4").removeClass("fa-hand-point-right");
        $(".test4").addClass("fas");
        $(".test4").addClass("fa-arrow-circle-right");
        $(".momo4").removeClass("cust-time2");
        $(".momo4").addClass("cust-time");
    }
    else {
        $(".test4").removeClass("fas");
        $(".test4").removeClass("fa-arrow-circle-right");
        $(".test4").addClass("far");
        $(".test4").addClass("fa-hand-point-right");
        $(".momo4").removeClass("cust-time");
        $(".momo4").addClass("cust-time2");
        $(".momo4").css('padding', '10px');
        $(".momo4").css('border-radius', '10px');
    }

});
$(".momo5").click(function () {
    "use strict";
    if ($(".test5").hasClass("fa-hand-point-right")) {
        $(".test5").removeClass("far");
        $(".test5").removeClass("fa-hand-point-right");
        $(".test5").addClass("fas");
        $(".test5").addClass("fa-arrow-circle-right");
        $(".momo5").removeClass("cust-time2");
        $(".momo5").addClass("cust-time");
    }
    else {
        $(".test5").removeClass("fas");
        $(".test5").removeClass("fa-arrow-circle-right");
        $(".test5").addClass("far");
        $(".test5").addClass("fa-hand-point-right");
        $(".momo5").removeClass("cust-time");
        $(".momo5").addClass("cust-time2");
        $(".momo5").css('padding', '10px');
        $(".momo5").css('border-radius', '10px');
    }

});
$(".momo6").click(function () {
    "use strict";
    if ($(".test6").hasClass("fa-hand-point-right")) {
        $(".test6").removeClass("far");
        $(".test6").removeClass("fa-hand-point-right");
        $(".test6").addClass("fas");
        $(".test6").addClass("fa-arrow-circle-right");
        $(".momo6").removeClass("cust-time2");
        $(".momo6").addClass("cust-time");
    }
    else {
        $(".test6").removeClass("fas");
        $(".test6").removeClass("fa-arrow-circle-right");
        $(".test6").addClass("far");
        $(".test6").addClass("fa-hand-point-right");
        $(".momo6").removeClass("cust-time");
        $(".momo6").addClass("cust-time2");
        $(".momo6").css('padding', '10px');
        $(".momo6").css('border-radius', '10px');
    }

});
$(".momo7").click(function () {
    "use strict";
    if ($(".test7").hasClass("fa-hand-point-right")) {
        $(".test7").removeClass("far");
        $(".test7").removeClass("fa-hand-point-right");
        $(".test7").addClass("fas");
        $(".test7").addClass("fa-arrow-circle-right");
        $(".momo7").removeClass("cust-time2");
        $(".momo7").addClass("cust-time");
    }
    else {
        $(".test7").removeClass("fas");
        $(".test7").removeClass("fa-arrow-circle-right");
        $(".test7").addClass("far");
        $(".test7").addClass("fa-hand-point-right");
        $(".momo7").removeClass("cust-time");
        $(".momo7").addClass("cust-time2");
        $(".momo7").css('padding', '10px');
        $(".momo7").css('border-radius', '10px');
    }

});
$(".momo8").click(function () {
    "use strict";
    if ($(".test8").hasClass("fa-hand-point-right")) {
        $(".test8").removeClass("far");
        $(".test8").removeClass("fa-hand-point-right");
        $(".test8").addClass("fas");
        $(".test8").addClass("fa-arrow-circle-right");
        $(".momo8").removeClass("cust-time2");
        $(".momo8").addClass("cust-time");
    }
    else {
        $(".test8").removeClass("fas");
        $(".test8").removeClass("fa-arrow-circle-right");
        $(".test8").addClass("far");
        $(".test8").addClass("fa-hand-point-right");
        $(".momo8").removeClass("cust-time");
        $(".momo8").addClass("cust-time2");
        $(".momo8").css('padding', '10px');
        $(".momo8").css('border-radius', '10px');
    }

});
$(".momo9").click(function () {
    "use strict";
    if ($(".test9").hasClass("fa-hand-point-right")) {
        $(".test9").removeClass("far");
        $(".test9").removeClass("fa-hand-point-right");
        $(".test9").addClass("fas");
        $(".test9").addClass("fa-arrow-circle-right");
        $(".momo9").removeClass("cust-time2");
        $(".momo9").addClass("cust-time");
    }
    else {
        $(".test9").removeClass("fas");
        $(".test9").removeClass("fa-arrow-circle-right");
        $(".test9").addClass("far");
        $(".test9").addClass("fa-hand-point-right");
        $(".momo9").removeClass("cust-time");
        $(".momo9").addClass("cust-time2");
        $(".momo9").css('padding', '10px');
        $(".momo9").css('border-radius', '10px');
    }

});
$(".momo10").click(function () {
    "use strict";
    if ($(".test10").hasClass("fa-hand-point-right")) {
        $(".test10").removeClass("far");
        $(".test10").removeClass("fa-hand-point-right");
        $(".test10").addClass("fas");
        $(".test10").addClass("fa-arrow-circle-right");
        $(".momo10").removeClass("cust-time2");
        $(".momo10").addClass("cust-time");
    }
    else {
        $(".test10").removeClass("fas");
        $(".test10").removeClass("fa-arrow-circle-right");
        $(".test10").addClass("far");
        $(".test10").addClass("fa-hand-point-right");
        $(".momo10").removeClass("cust-time");
        $(".momo10").addClass("cust-time2");
        $(".momo10").css('padding', '10px');
        $(".momo10").css('border-radius', '10px');
    }

});
$(".momo11").click(function () {
    "use strict";
    if ($(".test11").hasClass("fa-hand-point-right")) {
        $(".test11").removeClass("far");
        $(".test11").removeClass("fa-hand-point-right");
        $(".test11").addClass("fas");
        $(".test11").addClass("fa-arrow-circle-right");
        $(".momo11").removeClass("cust-time2");
        $(".momo11").addClass("cust-time");
    }
    else {
        $(".test11").removeClass("fas");
        $(".test11").removeClass("fa-arrow-circle-right");
        $(".test11").addClass("far");
        $(".test11").addClass("fa-hand-point-right");
        $(".momo11").removeClass("cust-time");
        $(".momo11").addClass("cust-time2");
        $(".momo11").css('padding', '10px');
        $(".momo11").css('border-radius', '10px');
    }

});
$(".momo12").click(function () {
    "use strict";
    if ($(".test12").hasClass("fa-hand-point-right")) {
        $(".test12").removeClass("far");
        $(".test12").removeClass("fa-hand-point-right");
        $(".test12").addClass("fas");
        $(".test12").addClass("fa-arrow-circle-right");
        $(".momo12").removeClass("cust-time2");
        $(".momo12").addClass("cust-time");
    }
    else {
        $(".test12").removeClass("fas");
        $(".test12").removeClass("fa-arrow-circle-right");
        $(".test12").addClass("far");
        $(".test12").addClass("fa-hand-point-right");
        $(".momo12").removeClass("cust-time");
        $(".momo12").addClass("cust-time2");
        $(".momo12").css('padding', '10px');
        $(".momo12").css('border-radius', '10px');
    }

});
$(".momo13").click(function () {
    "use strict";
    if ($(".test13").hasClass("fa-hand-point-right")) {
        $(".test13").removeClass("far");
        $(".test13").removeClass("fa-hand-point-right");
        $(".test13").addClass("fas");
        $(".test13").addClass("fa-arrow-circle-right");
        $(".momo13").removeClass("cust-time2");
        $(".momo13").addClass("cust-time");
    }
    else {
        $(".test13").removeClass("fas");
        $(".test13").removeClass("fa-arrow-circle-right");
        $(".test13").addClass("far");
        $(".test13").addClass("fa-hand-point-right");
        $(".momo13").removeClass("cust-time");
        $(".momo13").addClass("cust-time2");
        $(".momo13").css('padding', '10px');
        $(".momo13").css('border-radius', '10px');
    }

});
$(".momo14").click(function () {
    "use strict";
    if ($(".test14").hasClass("fa-hand-point-right")) {
        $(".test14").removeClass("far");
        $(".test14").removeClass("fa-hand-point-right");
        $(".test14").addClass("fas");
        $(".test14").addClass("fa-arrow-circle-right");
        $(".momo14").removeClass("cust-time2");
        $(".momo14").addClass("cust-time");
    }
    else {
        $(".test14").removeClass("fas");
        $(".test14").removeClass("fa-arrow-circle-right");
        $(".test14").addClass("far");
        $(".test14").addClass("fa-hand-point-right");
        $(".momo14").removeClass("cust-time");
        $(".momo14").addClass("cust-time2");
        $(".momo14").css('padding', '10px');
        $(".momo14").css('border-radius', '10px');
    }

});
$(".momo15").click(function () {
    "use strict";
    if ($(".test15").hasClass("fa-hand-point-right")) {
        $(".test15").removeClass("far");
        $(".test15").removeClass("fa-hand-point-right");
        $(".test15").addClass("fas");
        $(".test15").addClass("fa-arrow-circle-right");
        $(".momo15").removeClass("cust-time2");
        $(".momo15").addClass("cust-time");
    }
    else {
        $(".test15").removeClass("fas");
        $(".test15").removeClass("fa-arrow-circle-right");
        $(".test15").addClass("far");
        $(".test15").addClass("fa-hand-point-right");
        $(".momo15").removeClass("cust-time");
        $(".momo15").addClass("cust-time2");
        $(".momo15").css('padding', '10px');
        $(".momo15").css('border-radius', '10px');
    }

});
$(".momo16").click(function () {
    "use strict";
    if ($(".test16").hasClass("fa-hand-point-right")) {
        $(".test16").removeClass("far");
        $(".test16").removeClass("fa-hand-point-right");
        $(".test16").addClass("fas");
        $(".test16").addClass("fa-arrow-circle-right");
        $(".momo16").removeClass("cust-time2");
        $(".momo16").addClass("cust-time");
    }
    else {
        $(".test16").removeClass("fas");
        $(".test16").removeClass("fa-arrow-circle-right");
        $(".test16").addClass("far");
        $(".test16").addClass("fa-hand-point-right");
        $(".momo16").removeClass("cust-time");
        $(".momo16").addClass("cust-time2");
        $(".momo16").css('padding', '10px');
        $(".momo16").css('border-radius', '10px');
    }

});
$(".momo17").click(function () {
    "use strict";
    if ($(".test17").hasClass("fa-hand-point-right")) {
        $(".test17").removeClass("far");
        $(".test17").removeClass("fa-hand-point-right");
        $(".test17").addClass("fas");
        $(".test17").addClass("fa-arrow-circle-right");
        $(".momo17").removeClass("cust-time2");
        $(".momo17").addClass("cust-time");
    }
    else {
        $(".test17").removeClass("fas");
        $(".test17").removeClass("fa-arrow-circle-right");
        $(".test17").addClass("far");
        $(".test17").addClass("fa-hand-point-right");
        $(".momo17").removeClass("cust-time");
        $(".momo17").addClass("cust-time2");
        $(".momo17").css('padding', '10px');
        $(".momo17").css('border-radius', '10px');
    }

});
$(".momo18").click(function () {
    "use strict";
    if ($(".test18").hasClass("fa-hand-point-right")) {
        $(".test18").removeClass("far");
        $(".test18").removeClass("fa-hand-point-right");
        $(".test18").addClass("fas");
        $(".test18").addClass("fa-arrow-circle-right");
        $(".momo18").removeClass("cust-time2");
        $(".momo18").addClass("cust-time");
    }
    else {
        $(".test18").removeClass("fas");
        $(".test18").removeClass("fa-arrow-circle-right");
        $(".test18").addClass("far");
        $(".test18").addClass("fa-hand-point-right");
        $(".momo18").removeClass("cust-time");
        $(".momo18").addClass("cust-time2");
        $(".momo18").css('padding', '10px');
        $(".momo18").css('border-radius', '10px');
    }

});
$(".momo19").click(function () {
    "use strict";
    if ($(".test19").hasClass("fa-hand-point-right")) {
        $(".test19").removeClass("far");
        $(".test19").removeClass("fa-hand-point-right");
        $(".test19").addClass("fas");
        $(".test19").addClass("fa-arrow-circle-right");
        $(".momo19").removeClass("cust-time2");
        $(".momo19").addClass("cust-time");
    }
    else {
        $(".test19").removeClass("fas");
        $(".test19").removeClass("fa-arrow-circle-right");
        $(".test19").addClass("far");
        $(".test19").addClass("fa-hand-point-right");
        $(".momo19").removeClass("cust-time");
        $(".momo19").addClass("cust-time2");
        $(".momo19").css('padding', '10px');
        $(".momo19").css('border-radius', '10px');
    }

});
$(".momo20").click(function () {
    "use strict";
    if ($(".test20").hasClass("fa-hand-point-right")) {
        $(".test20").removeClass("far");
        $(".test20").removeClass("fa-hand-point-right");
        $(".test20").addClass("fas");
        $(".test20").addClass("fa-arrow-circle-right");
        $(".momo20").removeClass("cust-time2");
        $(".momo20").addClass("cust-time");
    }
    else {
        $(".test20").removeClass("fas");
        $(".test20").removeClass("fa-arrow-circle-right");
        $(".test20").addClass("far");
        $(".test20").addClass("fa-hand-point-right");
        $(".momo20").removeClass("cust-time");
        $(".momo20").addClass("cust-time2");
        $(".momo20").css('padding', '10px');
        $(".momo20").css('border-radius', '10px');
    }

});
$(".momo21").click(function () {
    "use strict";
    if ($(".test21").hasClass("fa-hand-point-right")) {
        $(".test21").removeClass("far");
        $(".test21").removeClass("fa-hand-point-right");
        $(".test21").addClass("fas");
        $(".test21").addClass("fa-arrow-circle-right");
        $(".momo21").removeClass("cust-time2");
        $(".momo21").addClass("cust-time");
    }
    else {
        $(".test21").removeClass("fas");
        $(".test21").removeClass("fa-arrow-circle-right");
        $(".test21").addClass("far");
        $(".test21").addClass("fa-hand-point-right");
        $(".momo21").removeClass("cust-time");
        $(".momo21").addClass("cust-time2");
        $(".momo21").css('padding', '10px');
        $(".momo21").css('border-radius', '10px');
    }

});
$(".momo22").click(function () {
    "use strict";
    if ($(".test22").hasClass("fa-hand-point-right")) {
        $(".test22").removeClass("far");
        $(".test22").removeClass("fa-hand-point-right");
        $(".test22").addClass("fas");
        $(".test22").addClass("fa-arrow-circle-right");
        $(".momo22").removeClass("cust-time2");
        $(".momo22").addClass("cust-time");
    }
    else {
        $(".test22").removeClass("fas");
        $(".test22").removeClass("fa-arrow-circle-right");
        $(".test22").addClass("far");
        $(".test22").addClass("fa-hand-point-right");
        $(".momo22").removeClass("cust-time");
        $(".momo22").addClass("cust-time2");
        $(".momo22").css('padding', '10px');
        $(".momo22").css('border-radius', '10px');
    }

});
$(".momo23").click(function () {
    "use strict";
    if ($(".test23").hasClass("fa-hand-point-right")) {
        $(".test23").removeClass("far");
        $(".test23").removeClass("fa-hand-point-right");
        $(".test23").addClass("fas");
        $(".test23").addClass("fa-arrow-circle-right");
        $(".momo23").removeClass("cust-time2");
        $(".momo23").addClass("cust-time");
    }
    else {
        $(".test23").removeClass("fas");
        $(".test23").removeClass("fa-arrow-circle-right");
        $(".test23").addClass("far");
        $(".test23").addClass("fa-hand-point-right");
        $(".momo23").removeClass("cust-time");
        $(".momo23").addClass("cust-time2");
        $(".momo23").css('padding', '10px');
        $(".momo23").css('border-radius', '10px');
    }

});
$(".momo24").click(function () {
    "use strict";
    if ($(".test24").hasClass("fa-hand-point-right")) {
        $(".test24").removeClass("far");
        $(".test24").removeClass("fa-hand-point-right");
        $(".test24").addClass("fas");
        $(".test24").addClass("fa-arrow-circle-right");
        $(".momo24").removeClass("cust-time2");
        $(".momo24").addClass("cust-time");
    }
    else {
        $(".test24").removeClass("fas");
        $(".test24").removeClass("fa-arrow-circle-right");
        $(".test24").addClass("far");
        $(".test24").addClass("fa-hand-point-right");
        $(".momo24").removeClass("cust-time");
        $(".momo24").addClass("cust-time2");
        $(".momo24").css('padding', '10px');
        $(".momo24").css('border-radius', '10px');
    }

});
$(".momo25").click(function () {
    "use strict";
    if ($(".test25").hasClass("fa-hand-point-right")) {
        $(".test25").removeClass("far");
        $(".test25").removeClass("fa-hand-point-right");
        $(".test25").addClass("fas");
        $(".test25").addClass("fa-arrow-circle-right");
        $(".momo25").removeClass("cust-time2");
        $(".momo25").addClass("cust-time");
    }
    else {
        $(".test25").removeClass("fas");
        $(".test25").removeClass("fa-arrow-circle-right");
        $(".test25").addClass("far");
        $(".test25").addClass("fa-hand-point-right");
        $(".momo25").removeClass("cust-time");
        $(".momo25").addClass("cust-time2");
        $(".momo25").css('padding', '10px');
        $(".momo25").css('border-radius', '10px');
    }

});
$(".momo26").click(function () {
    "use strict";
    if ($(".test26").hasClass("fa-hand-point-right")) {
        $(".test26").removeClass("far");
        $(".test26").removeClass("fa-hand-point-right");
        $(".test26").addClass("fas");
        $(".test26").addClass("fa-arrow-circle-right");
        $(".momo26").removeClass("cust-time2");
        $(".momo26").addClass("cust-time");
    }
    else {
        $(".test26").removeClass("fas");
        $(".test26").removeClass("fa-arrow-circle-right");
        $(".test26").addClass("far");
        $(".test26").addClass("fa-hand-point-right");
        $(".momo26").removeClass("cust-time");
        $(".momo26").addClass("cust-time2");
        $(".momo26").css('padding', '10px');
        $(".momo26").css('border-radius', '10px');
    }

});
$(".momo27").click(function () {
    "use strict";
    if ($(".test27").hasClass("fa-hand-point-right")) {
        $(".test27").removeClass("far");
        $(".test27").removeClass("fa-hand-point-right");
        $(".test27").addClass("fas");
        $(".test27").addClass("fa-arrow-circle-right");
        $(".momo27").removeClass("cust-time2");
        $(".momo27").addClass("cust-time");
    }
    else {
        $(".test27").removeClass("fas");
        $(".test27").removeClass("fa-arrow-circle-right");
        $(".test27").addClass("far");
        $(".test27").addClass("fa-hand-point-right");
        $(".momo27").removeClass("cust-time");
        $(".momo27").addClass("cust-time2");
        $(".momo27").css('padding', '10px');
        $(".momo27").css('border-radius', '10px');
    }

});
$(".momo28").click(function () {
    "use strict";
    if ($(".test28").hasClass("fa-hand-point-right")) {
        $(".test28").removeClass("far");
        $(".test28").removeClass("fa-hand-point-right");
        $(".test28").addClass("fas");
        $(".test28").addClass("fa-arrow-circle-right");
        $(".momo28").removeClass("cust-time2");
        $(".momo28").addClass("cust-time");
    }
    else {
        $(".test28").removeClass("fas");
        $(".test28").removeClass("fa-arrow-circle-right");
        $(".test28").addClass("far");
        $(".test28").addClass("fa-hand-point-right");
        $(".momo28").removeClass("cust-time");
        $(".momo28").addClass("cust-time2");
        $(".momo28").css('padding', '10px');
        $(".momo28").css('border-radius', '10px');
    }

});
$(".momo29").click(function () {
    "use strict";
    if ($(".test29").hasClass("fa-hand-point-right")) {
        $(".test29").removeClass("far");
        $(".test29").removeClass("fa-hand-point-right");
        $(".test29").addClass("fas");
        $(".test29").addClass("fa-arrow-circle-right");
        $(".momo29").removeClass("cust-time2");
        $(".momo29").addClass("cust-time");
    }
    else {
        $(".test29").removeClass("fas");
        $(".test29").removeClass("fa-arrow-circle-right");
        $(".test29").addClass("far");
        $(".test29").addClass("fa-hand-point-right");
        $(".momo29").removeClass("cust-time");
        $(".momo29").addClass("cust-time2");
        $(".momo29").css('padding', '10px');
        $(".momo29").css('border-radius', '10px');
    }

});
/*end*/

/*filter*/
$("#arabic").click(function () {
    "use strict";
    if ($(".sub1").css('height') === '270px') {
        $(".sub1").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub1").animate({
            height: '270px'
        }, 400);
    }
});
$("#english").click(function () {
    "use strict";
    if ($(".sub2").css('height') === '220px') {
        $(".sub2").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub2").animate({
            height: '220px'
        }, 400);
    }
});
$("#french").click(function () {
    "use strict";
    if ($(".sub3").css('height') === '130px') {
        $(".sub3").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub3").animate({
            height: '130px'
        }, 400);
    }
});
$("#deu").click(function () {
    "use strict";
    if ($(".sub4").css('height') === '100px') {
        $(".sub4").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub4").animate({
            height: '100px'
        }, 400);
    }
});
$("#italy").click(function () {
    "use strict";
    if ($(".sub5").css('height') === '130px') {
        $(".sub5").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub5").animate({
            height: '130px'
        }, 400);
    }
});
$("#math").click(function () {
    "use strict";
    if ($(".sub6").css('height') === '200px') {
        $(".sub6").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub6").animate({
            height: '200px'
        }, 400);
    }
});
$("#chem").click(function () {
    "use strict";
    if ($(".sub7").css('height') === '100px') {
        $(".sub7").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub7").animate({
            height: '100px'
        }, 400);
    }
});
$("#bio").click(function () {
    "use strict";
    if ($(".sub8").css('height') === '100px') {
        $(".sub8").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub8").animate({
            height: '100px'
        }, 400);
    }
});
$("#phy").click(function () {
    "use strict";
    if ($(".sub9").css('height') === '100px') {
        $(".sub9").animate({
            height: '0px'
        }, 400);
    }
    else {
        $(".sub9").animate({
            height: '100px'
        }, 400);
    }
});
/*END*/

/*button*/
$(".open").click(function () {
    "use strict";
    if ($(".filter").css('left') === '0px') {
        $(".filter").animate({
            left: '-100%'
        }, 200);

        $(".open").animate({
            left: '0'
        }, 240);
    }
    else {
        $(".filter").animate({
            left: '0'
        }, 200);

        $(".open").animate({
            left: '340px'
        }, 240);
    }

});
/*END*/
 
/*Start tabs*/
    $('#cust-tabs a').click(function () {
        var ul = document.getElementById("cust-ul");
        var links = ul.getElementsByTagName("a");
        for (var i = 0; i < links.length; ++i) {
            if ($(links[i]).hasClass('active')) {
                $(links[i]).removeClass('active');
                break;
            }
        }
        $(this).addClass('active');
    });
/*End tabs*/
  
/*open Question tab*/
var viewQuestion = function (id) {
    $.ajax({
        type: "POST",
        url: "/Home/Question",
        data: {id: id},
        success: function () {
            
        }
    })
}
    /*END*/
/*Ask Questions*/
/*Start Ask Question*/
function addHTML(tag) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var strong = document.createElement(tag);
    range.surroundContents(strong);
    $("#editor").focus()
}; var index;
var a = ["a", "b", "c"];
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}
function image() {
    var url = prompt("Enter the URL of the image to insert");
    document.execCommand('insertImage', false, url)
}
$(document).on('keyup', function () { $('#res').text($('#editor').html()) })
$(document).on('click', function () { $('#res').text($('#editor').html()) })
$(".panel-default .panel-heading .btn-group .btn").on('click', function () { $('#res').text($('#editor').html()) })
/*End Ask Question*/

$('#editor').popover({
    html: true,
    content: function () {
        return $('#popover_content_wrapper1').html();
    }
});
$('#example').popover({
    html: true,
    content: function () {
        return $('#popover_content_wrapper').html();
    }
});
/*End AskQuestion*
/*END*/