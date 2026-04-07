let count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickBtn');
  const text = document.getElementById('counterText');
  const reset = document.getElementById('resetBtn');
  const themeToggle = document.getElementById('themeToggle');

  if (button && text && reset) {
    button.addEventListener('click', () => {
      count++;
      text.textContent = `You clicked ${count} times`;
    });

    reset.addEventListener('click', () => {
      count = 0;
      text.textContent = `You clicked 0 times`;
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }

  // 🧾 FORM
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill all fields';
        return;
      }

      if (!email.includes('@')) {
        status.textContent = 'Invalid email';
        return;
      }

      status.textContent = 'Message sent!';
      form.reset();
    });
  }
});