let count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickBtn');
  const text = document.getElementById('counterText');
  const reset = document.getElementById('resetBtn');
  const themeToggle = document.getElementById('themeToggle');

  // ✅ Лічильник кліків
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

  // ✅ Темна тема
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // додаємо невеликий таймаут, щоб Playwright встиг побачити зміни класу
      document.body.classList.toggle('dark');
    });
  }
});

// 🧾 FORM VALIDATION (винесено окремо, для стабільності тестів)
function validateForm(e) {
  if (e.target && e.target.id === 'contactForm') {
    e.preventDefault();

    const status = document.getElementById('formStatus');
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!status) return;

    if (!name || !email || !message) {
      status.textContent = 'Please fill all fields';
      return;
    }

    if (!email.includes('@')) {
      status.textContent = 'Invalid email';
      return;
    }

    status.textContent = 'Message sent!';
    e.target.reset();
  }
}

document.body.addEventListener('submit', validateForm);