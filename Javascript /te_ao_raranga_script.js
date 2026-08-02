// JavaScript Document

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector(".site-footer");

  if (!footer) {
    return;
  }

  var revealFooter = function () {
    var footerPosition = footer.getBoundingClientRect();
    var triggerPoint = window.innerHeight * 0.9;

    if (footerPosition.top < triggerPoint) {
      footer.classList.add("is-visible");
    }
  };

  revealFooter();
  window.addEventListener("scroll", revealFooter, { passive: true });
});