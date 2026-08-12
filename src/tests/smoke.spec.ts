import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', text: "Anderson's Smoking Que" },
  { path: '/menu', text: 'Our Menu' },
  { path: '/specials', text: 'Current Specials' },
  { path: '/catering', text: 'Catering Inquiry' },
  { path: '/reviews', text: 'Customer Reviews' },
  { path: '/contact', text: 'Contact Us' },
  { path: '/order-status', text: 'Track Your Order' },
]

test.describe('customer route smoke tests', () => {
  for (const route of routes) {
    test(`renders ${route.path}`, async ({ page }) => {
      const response = await page.goto(route.path)
      expect(response?.ok()).toBeTruthy()
      await expect(page.getByText(route.text)).toBeVisible()
    })
  }
})
