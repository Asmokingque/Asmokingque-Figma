import { expect, test } from '@playwright/test'

test('menu manager route is protected', async ({ page }) => {
  await page.goto('/admin/menu')
  await expect(page).toHaveURL(/\/admin\/login$/)
})
