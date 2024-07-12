import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.testotomasyonu.com')
})

test.describe('Test Otomasyonu Uye Kaydi', ()=>{

    test('Site Giris', async({page}) => {
        await expect(page).toHaveTitle('Test Otomasyonu - Test Otomasyonu')
    })

    test('Uye Kayit Islemi', async ({page}) => {
        //await page.click("//*[text()='Sign Up Now']") // Xpath
        await page.locator("//*[text()='Sign Up Now']").click();
        await page.fill('#firstName','Gamze'); //CSS
        await page.fill("[id='lastName']",'Guclu')
        // await page.locator("[id='lastName']").fill('Guclu');

        await page.fill('#signupemail','y@u.net')
        await page.fill('#signuppassword','Gg8521+')
        await page.fill('#comfirmPassword','Gg8521+')
        await page.click('#btn-submit-form')
    })

})


