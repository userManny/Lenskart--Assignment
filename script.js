let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);