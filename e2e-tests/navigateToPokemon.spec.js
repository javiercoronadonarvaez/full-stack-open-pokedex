const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('Can navigate to a particular Pokemon', async ({ page }) => {
    await page.goto('/')

    const ivysaurLink = page.getByRole('link', { name: /ivysaur/ })
    await expect(ivysaurLink).toBeVisible()

    await ivysaurLink.click()

    await expect(page).toHaveURL('/pokemon/ivysaur')

    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
