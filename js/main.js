/* ==========================================
   STRANGER THINGS PLATFORM - MAIN JS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Floating Particle System ---
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = 0;
  let mouseY = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = Math.random() * -0.5 - 0.2;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      this.isRed = Math.random() > 0.7;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity += this.fadeDirection * 0.003;

      if (this.opacity <= 0.05 || this.opacity >= 0.6) {
        this.fadeDirection *= -1;
      }

      // Slight mouse influence
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        this.x -= dx * 0.005;
        this.y -= dy * 0.005;
      }

      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      if (this.isRed) {
        ctx.fillStyle = `rgba(229, 9, 20, ${this.opacity})`;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
      }
      ctx.fill();

      if (this.isRed && this.size > 1) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }
  }

  function initParticles() {
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // --- Help Modal ---
  const helpBtn = document.getElementById('helpBtn');
  const helpModal = document.getElementById('helpModal');
  const helpClose = document.getElementById('helpClose');

  helpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    helpModal.classList.add('active');
  });

  helpClose.addEventListener('click', () => {
    helpModal.classList.remove('active');
  });

  helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) {
      helpModal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      helpModal.classList.remove('active');
    }
  });

  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // --- Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.pageYOffset + 100;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // --- Scroll Animations (AOS replacement) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  // --- Power Bar Animation ---
  const powerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.power-fill').forEach(bar => {
          setTimeout(() => bar.classList.add('animate'), 300);
        });
        powerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.character-card').forEach(card => {
    powerObserver.observe(card);
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.btn');
      const originalText = btn.querySelector('span').textContent;

      btn.querySelector('span').textContent = 'Señal Enviada ✓';
      btn.style.background = '#00c853';
      btn.style.boxShadow = '0 0 20px rgba(0, 200, 83, 0.4)';

      setTimeout(() => {
        btn.querySelector('span').textContent = originalText;
        btn.style.background = '';
        btn.style.boxShadow = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Alphabet Lights Random Glow (Joyce's Wall) ---
  const alphaLights = document.querySelectorAll('.alpha-light');
  
  function randomAlphaGlow() {
    const randomIndex = Math.floor(Math.random() * alphaLights.length);
    const light = alphaLights[randomIndex];
    light.style.color = '#ff1744';
    light.style.textShadow = '0 0 10px #ff1744, 0 0 20px #ff1744, 0 0 40px #ff1744';

    setTimeout(() => {
      light.style.color = '';
      light.style.textShadow = '';
    }, 600);
  }

  setInterval(randomAlphaGlow, 400);

  // --- Gallery Hover Sound Simulation (visual flash) ---
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.filter = 'brightness(1.3)';
      setTimeout(() => {
        item.style.filter = '';
      }, 150);
    });
  });

  // --- Parallax effect on hero ---
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
      }
    }
  });

  // --- Random Flicker for hero title ---
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    setInterval(() => {
      if (Math.random() > 0.92) {
        heroTitle.style.opacity = '0.7';
        setTimeout(() => {
          heroTitle.style.opacity = '1';
        }, 50 + Math.random() * 100);
      }
    }, 200);
  }

  // --- Christmas lights wire simulation ---
  const lights = document.querySelectorAll('.light');
  setInterval(() => {
    const randomLight = lights[Math.floor(Math.random() * lights.length)];
    if (randomLight) {
      randomLight.style.opacity = '0.2';
      setTimeout(() => {
        randomLight.style.opacity = '';
      }, 200);
    }
  }, 1500);

});
