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
    });
});

// $(document).ready(function() {
//     $('.nav-link').mouseenter(function() {
//       var originalText = $(this).text();
//       $(this).text('New Text'); /* Замените 'New Text' на желаемый текст для смены */
//       $(this).mouseleave(function() {
//         $(this).text(originalText);
//       });
//     });
//   });