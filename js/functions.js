//Fonctions pour le carousel

$(document).ready(function() {
      var carousel = $("#carousel").featureCarousel({
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
      });

      $("#but_prev").click(function () {
        carousel.prev();
      })

      $("#but_next").click(function () {
        carousel.next();
      })

      /*fonction stylé :)*/
      $(".slideDown").click(function () {
        $(".tarif").slideDown();
        $('html, body').animate({  
        scrollTop:$(".tarif").offset().top
    }, 'slow');  
      })
      $(".slideUp").click(function () {
        $(".tarif").slideUp();
      })

      $('.carousel-feature a').lightBox();
      
});

//Fonctions pour afficher toute les images du carousel
      function carouselimage() {

      for(i=1;i<32;i++) // on va boucler sur nombre d'images moins un
          {
          document.write("<div class='carousel-feature'><a href='coiffure/coiff ("+i+").jpg'><img class='carousel-image' name='pic' src='coiffure/coiff ("+i+").jpg'></a></div>");  
          }
      }


