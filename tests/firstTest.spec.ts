import {test, expect} from '@playwright/test';

test('First Test On Playwrgiht', async ({page}) => {
    await page.goto('https://www.testotomasyonu.com')
    await expect(page).toHaveTitle(/Test/)
    // toHaveTitle komutunda titlenin bir kisminin icerip icermedigine bakiliyorsa (/test/) seklinde yazilir
    // eger birebir aynisi mi diye bakilacaksa ('Test Otomasyonu - Test Otomasyonu') seklinde yazilmalidir
    await expect(page).toHaveURL('https://www.testotomasyonu.com')    
});