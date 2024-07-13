// Get the button element
const scrollTopButton = document.getElementById("scrollTopButton");

// Add an event listener to the button
scrollTopButton.addEventListener("click", () => {
  // Scroll to top using window.scrollTo()
  window.scrollTo({ top: 0, behavior: "smooth" });
});