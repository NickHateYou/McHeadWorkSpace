import { test, expect } from '@playwright/test';

// інші тести залишаємо без змін
test('homepage loads', async ({ page }) => {
  await page.goto('https://nickhateyou.github.io/McHeadWorkSpace/');
  await expect(page).toHaveTitle(/Phantom/);
});

test('click counter works', async ({ page }) => {
  await page.goto('https://nickhateyou.github.io/McHeadWorkSpace/');
  const button = page.locator('#clickBtn');
  const text = page.locator('#counterText');
  await button.click();
  await expect(text).toContainText('1');
});

test('theme toggle works', async ({ page }) => {
  await page.goto('https://nickhateyou.github.io/McHeadWorkSpace/');
  const toggle = page.locator('#themeToggle');
  await toggle.click();
  await expect(page.locator('body')).toHaveClass(/dark/);
});

// === ОНОВЛЕНИЙ ТЕСТ ФОРМИ ===
test('form validation works', async ({ page }) => {
  await page.goto('https://nickhateyou.github.io/McHeadWorkSpace/');
  const form = page.locator('#contactForm');
  const status = page.locator('#formStatus');

  await form.waitFor(); // чекаємо, поки форма готова
  await page.click('button[type=submit]');
  await expect(status).toHaveText(/Please fill all fields/);
});