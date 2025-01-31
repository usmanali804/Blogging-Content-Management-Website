document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  const slider = document.querySelector('.slider');
  const autoSlideInterval = 5000; // 5 seconds
  let autoSlide;

  // Update Slide
  function updateSlide(index) {
      slides[currentSlide].classList.remove('active');
      indicators[currentSlide].classList.remove('active');

      currentSlide = index;

      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');

      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Change Slide
  function changeSlide(direction) {
      const nextSlide = (currentSlide + direction + slides.length) % slides.length;
      updateSlide(nextSlide);
  }

  // Go to Slide
  function goToSlide(index) {
      updateSlide(index);
  }

  // Auto Slide
  function startAutoSlide() {
      autoSlide = setInterval(() => changeSlide(1), autoSlideInterval);
  }

  function stopAutoSlide() {
      clearInterval(autoSlide);
  }

  // Event Listeners
  document.querySelector('.prev').addEventListener('click', () => {
      stopAutoSlide();
      changeSlide(-1);
      startAutoSlide();
  });

  document.querySelector('.next').addEventListener('click', () => {
      stopAutoSlide();
      changeSlide(1);
      startAutoSlide();
  });

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          stopAutoSlide();
          goToSlide(index);
          startAutoSlide();
      });
  });

  // Initialize
  updateSlide(0);
  startAutoSlide();
});
