$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight:true,
        slidesToShow:3,
        speed:700,
        initialSlide:1,
        //waitForAnimate:false,
        centerMode:true,
        centerPadding: '0px',
        responsive:[
            {
                breakpoint:1090,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.slider-third').slick({
        adaptiveHeight:true,
        speed:800,
        initialSlide:1,
        centerMode:true,
        centerPadding: '0px',
    });
});

document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "mailto:Kirilleroma@gmail.com";
});
  

function removeElement() {
    var screenWidth = window.innerWidth;
    
    if (screenWidth < 435) {
      var element = document.querySelector('#br-title');
      element.parentNode.removeChild(element);
      
    }
  }
  window.addEventListener('load', removeElement);
  window.addEventListener('resize', removeElement);
  

  window.addEventListener('orientationchange', function() {
    location.reload();
  });