$(document).ready(function(){

    /* Creating Button appear and  disappear*/
    var topButton = $('.topBtn');
    var modalButton = $('#send-message-email');

    $(window).scroll(function(){
        if($(window).scrollTop() > 700){
            topButton.addClass('showTopButton');
        }else{
            topButton.removeClass('showTopButton');
        }
    });

    topButton.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1800);
    });

    /* Modal window for button News */
    $('#news-button-sweet').on('click', function(e){
        e.preventDefault();
        swal({
            title: "Вибачте!",
            text: "Сторінка на даний момент не доступна!",
            icon: "info",
            button: "Зрозуміло",
          });
    });

     /* Modal window for button change language*/
     $('#navbarDropdownMenuLink').on('click', function(e){
        e.preventDefault();
        swal({
            title: "Вибачте!",
            text: "Зміна мови буде доступна в повній версії!",
            icon: "info",
            button: "ok",
          });
    });
    
    /* Modal window for message*/
    modalButton.on('click', function(e){
        e.preventDefault();
        $('#modalContactForm').modal("toggle")
    });
    
    /* Header */
    // SideNav button Initialization
    $(".button-cpllapse").sideNav();
    //SideNav scrollbar Initialization
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    Ps.initialize(sideNavScrollbar);

    /* ProgressBar */
    function animateElements(){
        $('.progressbar').each(function(){
            let elementPos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            let percent = $(this).find('.circle').attr('data-percent');
            let percentage = parseInt(percent, 10) / parseInt(100, 10);
            let animate = $(this).data('animate');

            if(elementPos < topOfWindow + $(window).height() - 30 && !animate){
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percentage,
                    thickness: 12,
                    size: 150,
                    animation: {
                        duration: 8000
                    },
                    fill: {
                        gradient: ["silver", "#44474b"]
                    }
                    
                }).on('circle-animation-progress', function(event, progress, stepValue){
                    $(this).find('div').text(String(stepValue.toFixed(2)).substr(2) + '%');
                }).stop();
            }
        });
    }
    //Show animated elements
    animateElements();
    $(window).scroll(animateElements);


    /* Decrease in Width */
    checkWidth(true);
    $(window).resize(function(){
        checkWidth(false);
    });
});

function checkWidth(){
    if($(window).width() >= 984){
        $('.serParallax').addClass('parallax-progress');
    }else{
        $('.serParallax').removeClass('parallax-progress'); 
    }
}

/* Google map */
$(function(){
    function regular_map(){
        var location = new google.maps.LatLng(49.8382600,24.0232400);

        var mapOptions = {
            center: location,
            zoom: 10
        };

        var map = new google.maps.Map(document.getElementById('map-our-location'), mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Lviv'
        });
    }

    /* Initialize maps */
    google.maps.event.addDomListener(window, 'load', regular_map);

});