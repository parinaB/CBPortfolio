// carousel.js — works on ALL carousels on the page
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = track.children;
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;

  const updateCarousel = () => {
    const itemWidth = items[0].offsetWidth + 20; // 20px gap
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  };

  nextBtn.addEventListener('click', () => {
    if (index < items.length - 3) {
      index++;
    } else {
      index = 0; // loop back
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 3;
    }
    updateCarousel();
  });

  // Auto-adjust on resize
  window.addEventListener('resize', updateCarousel);
});