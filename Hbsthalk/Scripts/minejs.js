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