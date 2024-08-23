const headings = document.querySelectorAll(".header h2");
const outline = document.getElementById("outline");
const indicators = Array.from(outline.querySelectorAll("li"));

window.addEventListener("scroll", () => {
  let currentHeading = -1;

  headings.forEach((heading, index) => {
    const rect = heading.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 4) {
      currentHeading = index;
    }
  });

  indicators.forEach((indicator) => indicator.classList.remove("active"));

  if (currentHeading >= 0 && currentHeading < indicators.length) {
    indicators[currentHeading - 1].classList.add("active");
  }
});
