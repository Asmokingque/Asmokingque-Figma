import { expect, test } from '@playwright/test'

test('super admin-only routes block regular admins', async ({ page }) => {
  await page.goto('/admin/payment-connectors')
  await expect(page).toHaveURL(/\/admin\/login$/)
})
