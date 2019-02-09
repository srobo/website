function addNavigationListener() {
  var navigationToggle = document.getElementById("navigation_toggle");
  var navbar = document.getElementById("navigation");
  navigationToggle.onclick = function() {
    navbar.classList.toggle('mobile-collapsed');
  };
}
window.addEventListener('load', addNavigationListener);
