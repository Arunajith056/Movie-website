var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("primary-navigation").style.top = "0";
  } else {
    document.getElementById("primary-navigation").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/*menu bar */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}