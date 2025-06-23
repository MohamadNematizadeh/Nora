var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();


// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const langTextMobile = document.getElementById('lang-text-mobile');
const htmlRoot = document.getElementById('html-root');
let isPersian = true;

function toggleLanguage() {
isPersian = !isPersian;
const lang = isPersian ? 'fa' : 'en';
const dir = isPersian ? 'rtl' : 'ltr';
const flag = isPersian ? '🇮🇷' : '🇬🇧';
const toggleText = isPersian ? 'English' : 'فارسی';

htmlRoot.setAttribute('lang', isPersian ? 'fa' : 'en');
htmlRoot.setAttribute('dir', dir);
langText.textContent = toggleText;
document.querySelector('.flag').textContent = flag;
if (langTextMobile) langTextMobile.textContent = toggleText;
if (langToggleMobile) document.querySelector('#lang-toggle-mobile .flag').textContent = flag;

document.querySelectorAll('[data-fa][data-en]').forEach(element => {
element.textContent = element.getAttribute(`data-${lang}`);
});

document.title = isPersian ? 'نورا - راه‌حل‌های دیجیتال خلاقانه' : 'Noura - Creative Digital Solutions';

gsap.to('body', {
opacity: 0,
duration: 0.3,
onComplete: () => {
  gsap.to('body', { opacity: 1, duration: 0.3 });
}
});
}

langToggle.addEventListener('click', toggleLanguage);
if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  if (!mobileMenu.classList.contains('hidden')) {
    gsap.from('#mobile-menu a', {
      x: isPersian ? 50 : -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    });
  }
});

// GSAP Animations
gsap.from('.gsap-hero-title', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: 'power4.out',
  delay: 0.5
});
gsap.from('.gsap-hero-text', {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: 'power4.out',
  delay: 1
});
gsap.from('.gsap-hero-button', {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: 'elastic.out(1, 0.5)',
  delay: 1.5
});
gsap.from('.gsap-hero-image', {
  x: isPersian ? 200 : -200,
  opacity: 0,
  rotation: 360,
  duration: 2,
  ease: 'elastic.out(1, 0.5)',
  delay: 1.8
});
gsap.from('.gsap-logo', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'bounce.out',
  delay: 0.3
});

// Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 120;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1.2 - 0.6;
    this.speedY = Math.random() * 1.2 - 0.6;
    this.color = `hsl(${Math.random() * 60 + 180}, 40%, 85%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.008;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.2) {
      particlesArray.splice(i, 1);
      i--;
      particlesArray.push(new Particle());
    }
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Scroll-triggered Animations
gsap.utils.toArray('.gsap-section-title').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

gsap.utils.toArray('.gsap-service-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    delay: index * 0.3
  });
});

gsap.utils.toArray('.gsap-portfolio-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    scale: 0.8,
    rotation: index % 2 === 0 ? -10 : 10,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    delay: index * 0.3
  });
});

gsap.utils.toArray('.gsap-testimonial-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    delay: index * 0.3
  });
});

gsap.utils.toArray('.gsap-blog-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    delay: index * 0.3
  });
});

gsap.utils.toArray('.gsap-footer-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: index * 0.3
  });
});

// Portfolio Filter with Animation
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-[#22d3ee]', 'text-white'));
    btn.classList.add('bg-[#22d3ee]', 'text-white');
    const cards = document.querySelectorAll('.gsap-portfolio-card');
    gsap.to(cards, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        cards.forEach(card => {
          card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
        });
        gsap.to(cards, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.1
        });
      }
    });
  });
});

// Glass Card Hover Effects
document.querySelectorAll('.glass').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gsap.to(card, {
      rotationY: (x - rect.width / 2) / 20,
      rotationX: -(y - rect.height / 2) / 20,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

// Form Submission Handler (Placeholder)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(isPersian ? 'فرم با موفقیت ارسال شد!' : 'Form submitted successfully!');
  // Add actual form submission logic here (e.g., send data to a server)
});

document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(isPersian ? 'با موفقیت در خبرنامه ثبت‌نام کردید!' : 'Successfully subscribed to the newsletter!');
  // Add actual newsletter subscription logic here
});