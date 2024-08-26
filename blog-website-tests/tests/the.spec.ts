import { test, expect } from '@playwright/test';

test('page should have title and a root navigation link', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  const title = await page.title();
  expect(title).toContain('johnnyreilly');

  const navTitle = page.getByRole('link', {
    name: 'Profile picture of John Reilly John Reilly ❤️🌻',
  });
  await expect(navTitle).toBeVisible();
});

test('can navigate to about page', async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  await page.getByRole('link', { name: 'About', exact: true }).click();

  const navTitle = page.getByRole('heading', {
    name: "Hi! I'm John Reilly - welcome! ❤️🌻",
  });
  await expect(navTitle).toBeVisible();
});
