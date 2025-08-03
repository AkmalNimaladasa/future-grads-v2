// Simple scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section");
  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    });
    observer.observe(el);
  });
});
