console.log("Hi, I'm Inga! Welcome to My Portfolio Site ");

// toggles the menu, when hamburger icon is clicked
function menuToggle () {
  var x = document.getElementById('myNavtoggle');

  if (x.className === 'navtoggle') { // if the menu is not opened
    x.className += ' responsive'; // it will be class="navtoggle responsive", which will make the menu open
    $('#menu-item-contact').attr('onclick', 'menuToggle()'); // "Contact" menu item needs this function separately, otherwise after clicking it, menu wouldn't close
  } else {
    x.className = 'navtoggle'; // if the menu is open (class="navtoggle responsive"), then make it hide
    $('#menu-item-contact').attr('onclick', ''); // we have to remove this function from "contact" menu item, because if it's used without hamburger menu, then the wrong styling is applied
  }

  // toggles class for animated hamburger icon either to open (X), or default (3 bars)
  $('.animated-ham-icon').toggleClass('open');
}

// ****
//
// Animates hamburger menu icon and toggles the nav menu
//
// ****
function toggleNav () {
  var hamIcon = document.getElementById('ham-icon');

  // animate from 3 bars to X or vice versa
  $('.animated-ham-icon').toggleClass('open');

  // if the hamburger icon has the class open then open the menu as well, otherwise close the menu
  if (hamIcon.className === 'animated-ham-icon open') {
    document.getElementById('overlay').style.height = '50%';
  } else {
    document.getElementById('overlay').style.height = '0%';
  }
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = "0";
  } else {
    document.getElementById('header').style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
// $(document).ready(function () {
//
//   $('.first-button').on('click', function () {
//
//
//   });
//
// });
