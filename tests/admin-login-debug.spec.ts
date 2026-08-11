import { expect, test } from '@playwright/test'

const adminEmail = process.env.ADMIN_TEST_EMAIL
const adminPassword = process.env.ADMIN_TEST_PASSWORD

test('admin login page loads', async ({ page }) => {
  await page.goto('/admin/login')
  await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible()
})

test('invalid admin login shows error', async ({ page }) => {
  await page.goto('/admin/login')
  await page.getByLabel('Email').fill('invalid@example.com')
  await page.getByLabel('Password').fill('bad-password')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await expect(page.getByRole('alert')).toContainText('Invalid email or password. Please check your admin credentials.')
})

test('valid admin login redirects to dashboard', async ({ page }) => {
  test.skip(!adminEmail || !adminPassword, 'Requires ADMIN_TEST_EMAIL and ADMIN_TEST_PASSWORD env vars')
  await page.goto('/admin/login')
  await page.getByLabel('Email').fill(adminEmail!)
  await page.getByLabel('Password').fill(adminPassword!)
  await page.getByRole('button', { name: 'Sign in' }).click()
  await expect(page).toHaveURL(/\/admin$/)
})
