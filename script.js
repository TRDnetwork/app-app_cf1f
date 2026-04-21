document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const submitBtn = document.getElementById('submit-btn');
  const message = document.getElementById('message');
  const sections = document.querySelectorAll('section');
  const yearSpan = document.getElementById('year');

  // Set current year
  yearSpan.textContent = new Date().getFullYear();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form submission
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate success
    message.classList.add('success');
    emailInput.value = '';
    setTimeout(() => {
      message.classList.remove('success');
    }, 3000);
  });

  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});