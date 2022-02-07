// Parte de js para fazer o menu hamburger

(function () {
  var navButton = document.querySelector('#nav-menu-button');
  var navUl = document.querySelector('.nav-ul');

  function toggleMobileMenu() {
    navUl.classList.toggle('hide-ul');
  }

  navButton.onclick = toggleMobileMenu;
})();
