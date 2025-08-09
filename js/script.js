document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded');

  // Smooth scroll for anchor links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight current page in nav
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Fade-in elements on scroll
  const fadeIns = document.querySelectorAll('.fade-in');
  const slideUps = document.querySelectorAll('.slide-up');
  const options = { threshold: 0.1 };

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, options);

  fadeIns.forEach(el => observer.observe(el));
  slideUps.forEach(el => observer.observe(el));

  // Form validation
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
      } else {
        alert("Message submitted successfully!");
        contactForm.reset();
      }
    });
  }
});