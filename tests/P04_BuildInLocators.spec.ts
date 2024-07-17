import {test, expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('OpenHRM Panel Giris', async ({page})=>{
    await expect(page.getByAltText('company-branding')).toBeVisible()
    await expect(page.getByText('Forgot your password? ')).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name: ' Login '}).click();
    await expect(page.getByText('Dashboard').nth(1)).toBeVisible() 

    const dashboardLocate = page.getByText('Dashboard').nth(0)
    await expect(dashboardLocate).toBeVisible();

    // birden fazla oge ayni text(vb. ) ile yer aliyorsa nth(n) ile istenilene ulasilir. 
    // n index numarasini alir 1. eleman 0. indextedir



})