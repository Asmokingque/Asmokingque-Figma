import { expect, test } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('menu page loads', async ({ page }) => {
  await page.goto('/menu')
  await expect(page.getByRole('heading', { name: 'MenuPage' })).toBeVisible()
})
