AOS.init({
  duration: 800, // thời gian animation
  offset: 100, // khoảng cách trước khi trigger
});

window.addEventListener('resize', () => {
  AOS.refresh();
});

// Header scroll transparent to dark effect
const header = document.getElementById('main-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.remove('bg-black/20', 'border-transparent');
      header.classList.add('bg-black/95', 'backdrop-blur-md', 'border-b', 'border-white/10');
    } else {
      header.classList.remove('bg-black/95', 'backdrop-blur-md', 'border-b', 'border-white/10');
      header.classList.add('bg-black/20', 'border-transparent');
    }
  });
}

// Initialize Swiper for Certificates (Marquee Continuous Infinite Scroll)
var swiperCertificates = new Swiper('.mySwiperCertificates', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  speed: 8000, // speed of continuous scroll in ms (higher = slower)
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
  },
});

// Initialize Swiper for Testimonials
var swiperTestimonials = new Swiper('.mySwiperTestimonials', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.mySwiperTestimonials .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 4, spaceBetween: 30 },
  },
});

// Initialize Swiper for Benefits (Vertical Scroll, Autoplay, max 3 slides)
var swiperBenefits = new Swiper('.mySwiperBenefits', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 16,
  observer: true,
  observeParents: true,
  touchReleaseOnEdges: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  }
});

// Initialize Swiper for Videos (Mobile only slider, Desktop 3-column behavior)
var swiperVideos = new Swiper('.mySwiperVideos', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.mySwiperVideos .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false, // Tắt kéo trượt trên desktop
    }
  }
});

// Mobile menu toggle logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Đóng menu
      menuBtn.classList.remove('menu-open');
      mobileMenu.classList.add('-translate-x-full');
      setTimeout(() => mobileMenu.classList.add('hidden'), 500);
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      // Mở menu
      menuBtn.classList.add('menu-open');
      mobileMenu.classList.remove('hidden');
      setTimeout(() => mobileMenu.classList.remove('-translate-x-full'), 10);
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });
}

// Submenu toggle for mobile
window.toggleSubmenu = function (id) {
  const submenu = document.getElementById(id);
  if (submenu) {
    submenu.classList.toggle('hidden');
    const btn = event.currentTarget;
    if (btn) {
      const arrow = btn.querySelector('svg');
      if (arrow) {
        arrow.classList.toggle('rotate-180');
      }
    }
  }
};
