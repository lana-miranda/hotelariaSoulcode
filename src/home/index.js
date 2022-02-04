// Parte de js para fazer o menu hamburger

(function () {
  var navButton = document.querySelector('#nav-menu-button');
  var navUl = document.querySelector('.nav-ul');

  function toggleMobileMenu() {
    navUl.classList.toggle('hide-ul');
  }

  navButton.onclick = toggleMobileMenu;
})();


// Aqui é a parte que configura os slides

var slideIndex = 1;
showSlides(slideIndex); 

// controle para ir para frente e para trás nas imagens
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// para controlar as imagens menores
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// aqui é a função que controla os slides

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
