document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Makes elements visible when they are in view
      }
    });
  }, {
    threshold: 0.1 // When 10% of the element is in view
  });

  elements.forEach(el => observer.observe(el)); // Observing all elements with class 'fade-in'
});
