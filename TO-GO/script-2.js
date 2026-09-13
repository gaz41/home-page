const scrollUp = document.getElementById("upIcon");
const accordion1 = document.querySelector(".accordion1");
const accordion2 = document.querySelector(".accordion2");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const copyright = document.getElementById("copy");

// Function to handle scroll event
window.onscroll = function () {
  // Check if the page is scrolled down
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollUp.style.display = "block"; // Show the up arrow icon
  } else {
    scrollUp.style.display = "none"; // Hide the up arrow icon
  }
};

accordion1.addEventListener("click", () => {
  // Toggle the 'accordionActive' class on the first accordion header
  const isActive = accordion1.classList.toggle("accordionActive");
  // Show or hide the first content panel based on the active state
  panel1.style.display = isActive ? "block" : "none";
});

accordion2.addEventListener("click", () => {
  // Toggle the 'accordionActive' class on the second accordion header
  const isActive = accordion2.classList.toggle("accordionActive");
  // Show or hide the second content panel based on the active state
  panel2.style.display = isActive ? "block" : "none";
});

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` gaz41.com. <span class="copy2">All Rights Reserved</span>`;
