$(document).ready(function(){
    
    $(".change").on("click", function() {
        if ($("body").hasClass("dark")) {
            $("nav").removeClass("darknav");
            $("body").removeClass("dark");
            $("section").removeClass("dark");
            $(".change").text("OFF");
        } else {
            $("body").addClass("dark");
            $("section").removeClass("dark");
            $("nav").addClass("darknav");
            $(".change").text("ON");
        }
    });
   
/**********Modal Ends************ */
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});