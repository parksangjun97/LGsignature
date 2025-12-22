$(document).ready(function(){
    headerEvent();
    slider();
    $(".videoheader").fitVids();
});
function headerEvent(){
    var currentPos = 0;
    $(window).scroll(function(){
        $("header").addClass("active");
        currentPos = $(this).scrollTop();
        if(currentPos <= 0){
            $("header").removeClass("active");
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuToggle").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});

function slider(){
      $('.slider').bxSlider({
        mode:'horizontal',
        pause: 2000,
        auto:false,
        slideWidth: 280,
        slideMargin: 50,
        pager: false,
        controls: true,
        minSlides: 1,
        maxSlides: 4,
        moveSlides:1,
        captions: true,
        infiniteLoop: true
        
      });
}
