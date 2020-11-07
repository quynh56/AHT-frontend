    
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            482:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#btn-search').click(function(){
        $('#mysearch').animate({maxWidth:'210px'});
        // $('#navbar-search').animate({border:'border:1px solid #000'});
    });
});
var search=document.getElementById('btn-search');
// var input=document.getElementById('mysearch');
var navSearch=document.getElementsById('navbar-search');
search.addEventListener('click',function(){
    // input.style.width ="210px";
    navSearch.style.display="block";
    navSearch.style.border="1px solid #000";
});