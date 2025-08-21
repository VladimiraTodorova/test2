
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


}
main();
// Get the button
let mybuttonTheme = document.getElementById("btn-theme");



main();
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    const themes = [
      {
        image: "/img/IMG_6164.jpg",
        text: "Инвестирането в имоти винаги е било едно от най-популярните и сигурни начини за увеличаване на капитала."
      },
      {
        image: "/img/IMG_6164.jpg",
        text:"Инвестирането в имоти винаги е било едно от най-популярните и сигурни начини за увеличаване на капитала."
      },
      {
        image: "/img/IMG_6164.jpg",
        text: "Инвестирането в имоти винаги е било едно от най-популярните и сигурни начини за увеличаване на капитала."
      }
    ];

    let currentIndex = 0;

    function showTheme(index) {
      const theme = themes[index];
      document.getElementById("themeImage").src = theme.image;
      document.getElementById("themeText").textContent = theme.text;
    }

    function nextTheme() {
      currentIndex = (currentIndex + 1) % themes.length;
      showTheme(currentIndex);
    }

    function prevTheme() {
      currentIndex = (currentIndex - 1 + themes.length) % themes.length;
      showTheme(currentIndex);
    }