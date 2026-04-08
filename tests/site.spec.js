import { test, expect } from '@playwright/test';

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

// ✅ ВИПРАВЛЕНИЙ ТЕСТ
test('form validation works', async ({ page }) => {
  await page.goto('https://nickhateyou.github.io/McHeadWorkSpace/');

  const form = page.locator('#contactForm');
  const status = page.locator('#formStatus');

  await form.waitFor();

  await page.click('button[type=submit]');

  // 🔥 головний фікс
  await expect(status).toContainText('Please fill all fields', {
    timeout: 10000
  });
});