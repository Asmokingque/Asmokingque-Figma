import { expect, test } from '@playwright/test'

test('admin login page renders and links to password reset', async ({ page }) => {
  const response = await page.goto('/admin/login')
  expect(response?.ok()).toBeTruthy()

  await expect(page.getByRole('heading', { name: 'Admin Portal' })).toBeVisible()
  await expect(page.getByLabel('Email')).toBeVisible()
  await expect(page.getByLabel('Password')).toBeVisible()

  await page.getByRole('link', { name: 'Forgot password?' }).click()
  await expect(page).toHaveURL(/\/admin\/forgot-password$/)
  await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible()
})
