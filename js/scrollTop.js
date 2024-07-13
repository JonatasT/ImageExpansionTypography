// Get the button element
const scrollTopButton = document.getElementById("scrollTopButton");

// Add an event listener to the window scroll event
window.addEventListener("scroll", () => {
  // Check if the user has scrolled down
  if (window.pageYOffset > 200) {
    // Show the button
    scrollTopButton.style.display = "block";
  } else {
    // Hide the button
    scrollTopButton.style.display = "none";
  }
});

// Add an event listener to the button
scrollTopButton.addEventListener("click", () => {
  // Scroll to top using window.scrollTo()
  window.scrollTo({ top: 0, behavior: "smooth" });
});