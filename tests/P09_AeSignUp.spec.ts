import{test,expect} from '@playwright/test'


test ('AE SignUp Test', async ({page})=>{

    await page.goto('https://automationexercise.com/')
    await expect.soft(page.getByAltText('Website for automation practice')).toBeVisible();
    await page.getByText(' Signup / Login').click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('WiseQ');
    await page.getByPlaceholder('Email Address').nth(1).fill('w2@quarter.com');
    await page.locator("//*[text()='Signup']").press('Enter')

    await page.locator('#id_gender2').check();
    await page.locator('#password').fill('Mugla')
    await page.locator('#days').selectOption("1")
    await page.locator('#months').selectOption("May")
    await page.locator('#years').selectOption("1997")
    await page.locator('#newsletter').click();
    await page.locator('#first_name').fill('wise');
    await page.locator('#last_name').fill('quarter');
    await page.locator('#address1').fill('uskudar')
    await page.locator('#country').selectOption({index:2});
    await page.locator('#state').fill('Non USA')
    await page.locator('#city').fill('Mugla')
    await page.locator('#zipcode').fill('Mugla')
    await page.locator('#mobile_number').fill('Mugla')
    await page.locator("//*[text()='Create Account']").press('Enter')

    await expect.soft(page.getByText('Account Created!')).toBeVisible();
    
})