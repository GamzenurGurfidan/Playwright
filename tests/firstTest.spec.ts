import {test, expect} from '@playwright/test';

test('First Test On Playwrgiht', async ({page}) => {
    await page.goto('https://www.testotomasyonu.com')
    await expect(page).toHaveTitle(/Test/)
    await expect(page).toHaveURL('https://www.testotomasyonu.com')    
    
});