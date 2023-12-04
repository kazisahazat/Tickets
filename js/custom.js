

//SIDE BAR JS
$(function(){
$('.sidebar-btn').click(function() {
            $(this).toggleClass("click");
            $('.sidebar').toggleClass("show");
        });


        $('.sidebar ul li a').click(function() {
            var id = $(this).attr('id');
            $('nav ul li ul.item-show-' + id).toggleClass("show");
            $('nav ul li #' + id + ' span').toggleClass("rotate");

        });

        $('nav ul li').click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        });
    
});


var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var qty = document.querySelector(".qty");

plus.addEventListener('click',function(){
var increment=parseInt(qty.innerHTML);
if(increment<9){ increment=increment+1; qty.innerHTML=increment; } }); minus.addEventListener('click',function(){ var decrement=parseInt(qty.innerHTML); if(decrement>1){
    decrement=decrement-1;
    qty.innerHTML=decrement;
    }
    });
