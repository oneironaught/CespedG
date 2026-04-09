document.addEventListener("DOMContentLoaded", () => {
  console.log("Website is ready!");

  // Fade-In Effect
  function fadeIn(element, duration) {
    let opacity = 0; // Start opacity
    const interval = 50; // Time between updates in milliseconds
    const increment = interval / duration; // Increment opacity by this amount per interval

    // Ensure element starts hidden
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;

    const fade = setInterval(() => {
      opacity += increment; // Increment opacity
      element.style.opacity = opacity; // Apply opacity to the element

      if (opacity >= 1) {
        // When opacity reaches 1, stop the interval
        clearInterval(fade);
        element.style.opacity = 1; // Ensure final opacity is exactly 1
      }
    }, interval);
  }

  // Smooth scrolling for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple fade-in animation when scrolling
const fadeElements = document.querySelectorAll('.service-card, .testimonial');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transition = 'opacity 0.6s';
  observer.observe(el);
});

  // Apply Fade-In to Target Elements
  const elements = document.querySelectorAll("header, section, footer");
  elements.forEach((el, index) => {
    // Stagger fade-in by adding a delay based on index
    setTimeout(() => {
      fadeIn(el, 1500); // 1500ms duration for each element
    }, index * 200); // Stagger by 200ms between elements
  });

  // Smooth Scrolling for Navbar Links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const target = document.querySelector(this.getAttribute("href")); // Get target section
      const offset = 200; // Adjust this value to match your navbar height
      const topPosition = target.offsetTop - offset; // Calculate scroll position

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    });
  });
});