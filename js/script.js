// ===== PRELOADER =====
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
  
  // Initialize AOS after page load
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});

// ===== STICKY NAVBAR & ACTIVE LINK =====
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNavbar() {
  // Sticky navbar background
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Active menu highlight
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);

// ===== TYPING ANIMATION =====
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

if (typedTextSpan) {
  const words = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Lead', 'API Specialist'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 50;
  let newWordDelay = 1500;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, newWordDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(type, isDeleting ? erasingDelay : typingDelay);
    }
  }
  
  // Start typing animation
  setTimeout(type, newWordDelay);
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
let counted = false;

function startCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const current = parseInt(counter.innerText);
      const increment = Math.ceil(target / 50);
      
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCount();
  });
}

// Trigger counters when about section is visible
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        startCounters();
        counted = true;
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(aboutSection);
}

// ===== BOOTSTRAP FORM VALIDATION =====
(function() {
  'use strict';
  
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Prevent actual submit for demo
        alert('Message sent successfully! (Demo)');
        form.reset();
        form.classList.remove('was-validated');
      }
      
      form.classList.add('was-validated');
    }, false);
  });
})();

// ===== BACK TO TOP BUTTON =====
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// ===== NAVBAR CLOSE ON MOBILE AFTER CLICK =====
const navLinksMobile = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navLinksMobile && navbarCollapse) {
  navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
const animateElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .experience-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== PROGRESS BAR ANIMATION ON SCROLL =====
const progressBars = document.querySelectorAll('.progress-bar');

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
  progressObserver.observe(bar);
});

// ===== DYNAMIC COPYRIGHT YEAR =====
const yearElement = document.querySelector('.copyright');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
}

// ===== FIX FOR MOBILE MENU CLICK OUTSIDE =====
document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');
  
  if (navbar && navbar.classList.contains('show') && 
      !navbar.contains(event.target) && 
      !toggler.contains(event.target)) {
    navbar.classList.remove('show');
  }
});
