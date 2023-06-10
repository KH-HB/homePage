function startSlideshow() {
  const slides = document.querySelectorAll("#slideshow .slide");
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  setInterval(nextSlide, 3000);
}
startSlideshow();
// active part
