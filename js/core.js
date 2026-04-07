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
});