AOS.init({
  duration: 800, // thời gian animation
  offset: 100, // khoảng cách trước khi trigger
  // disable: 'mobile',
});

window.addEventListener('resize', () => {
  AOS.refresh();
});
(function () {
  const slides = Array.from(document.querySelectorAll('.ts-slide'));
  const prevBtn = document.getElementById('ts-prev');
  const nextBtn = document.getElementById('ts-next');
  const pageEl = document.getElementById('ts-page');

  let i = 0; // current index
  const n = slides.length;

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function show(idx) {
    // hide current
    slides[i].classList.add('opacity-0');
    slides[i].classList.add('hidden');

    // show new
    i = (idx + n) % n;
    slides[i].classList.remove('hidden');
    requestAnimationFrame(() => slides[i].classList.remove('opacity-0'));

    // update pagination
    if (pageEl) pageEl.textContent = `${pad(i + 1)}/${pad(n)}`;
  }

  // init
  slides.forEach((el, k) => {
    if (k !== 0) el.classList.add('hidden', 'opacity-0');
  });
  if (pageEl) pageEl.textContent = `${pad(1)}/${pad(n)}`;

  // events
  nextBtn?.addEventListener('click', () => show(i + 1));
  prevBtn?.addEventListener('click', () => show(i - 1));

  // keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(i + 1);
    if (e.key === 'ArrowLeft') show(i - 1);
  });

  // swipe (basic)
  let startX = null;
  const root = document.getElementById('ts-wrapper');
  root.addEventListener(
    'touchstart',
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );
  root.addEventListener(
    'touchend',
    (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) dx < 0 ? show(i + 1) : show(i - 1);
      startX = null;
    },
    { passive: true }
  );
})();

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500, // thời gian giữa các slide (ms)
    disableOnInteraction: false, // vẫn chạy khi user chạm vào
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');

  if (isOpen) {
    // Đóng menu
    mobileMenu.classList.add('-translate-x-full');
    setTimeout(() => mobileMenu.classList.add('hidden'), 500);
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    // Mở menu
    mobileMenu.classList.remove('hidden');
    setTimeout(() => mobileMenu.classList.remove('-translate-x-full'), 10);
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
});
