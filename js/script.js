console.log("Hi, I'm Inga! Welcome to My Portfolio Site ");

// toggles the menu, when hamburger icon is clicked
function menuToggle() {

  var x = document.getElementById('myNavtoggle');

  if (x.className === 'navtoggle') { // if the menu is not opened
    x.className += ' responsive'; // it will be class="navtoggle responsive", which will make the menu open
    $('#menu-item-contact').attr('onclick', 'menuToggle()'); // "Contact" menu item needs this function separately, otherwise after clicking it, menu wouldn't close
  } else {
    x.className = 'navtoggle'; // if the menu is open (class="navtoggle responsive"), then make it hide
    $('#menu-item-contact').attr('onclick', ''); // we have to remove this function from "contact" menu item, because if it's used without hamburger menu, then the wrong styling is applied
  }
}
