function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".mobile-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Show the button when user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTop").onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
