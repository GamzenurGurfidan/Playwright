import {test,expect} from'@playwright/test'

test.describe('Hard Assertions', async()=>{

    test.skip('Demoblaze Assertions', async({page}) =>{ // .skip bu suitte devredisi birakmayi ifade eder
        await page.goto('https://www.demoblaze.com/cart.html')
        await expect(page).toHaveTitle('STORE')
        await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
        await expect(page.getByText('Place Order').nth(1)).toBeAttached()
    })

    test('Test Automation Practice', async({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator('#female').check() 
        await expect(page.locator('#female')).toBeChecked()
        // Locate edilen checkBox oge tiklanmis halde mi?

        await expect(page.locator('#name')).toBeEnabled()
        // Locate edilen ogenin enable olup olmadiğini kontrol eder

        await expect(page.locator('#name')).not.toBeDisabled()
        // Locate edilen ogenin disable olup olmadiğini kontrol eder

        await expect(page.locator('#name')).toBeEmpty()
        // Locate edilen ogenin bos olup olmadiğini kontrol eder

        await page.locator('#name').fill('Murat')
        // await expect(page.locator('#name')).toBeEmpty()

        await expect(page.locator('#name')).toHaveValue('Murat')
        // Locate edilen ogenin icindeki degerin verilenle ayni olp olmadigini kontrol eder
    })

    test('DemoQA.com', async({page})=>{
        await page.goto('https://demoqa.com/')
        await expect(page.getByText('Book Store Application')).not.toBeInViewport()
        await expect(page.getByAltText('Selenium Online Training')).toBeInViewport()
        // Acilan ekran penceresindeki alanda gorunup gorunmedigine bakar

        await expect(page.getByText('Book Store Application')).toContainText('Store')
        await expect(page.getByText('Book Store Application')).toContainText('ion')
        await expect(page.getByText('Book Store Application')).toContainText('Book Store Application')
        // Locate edilen yazinin icinde verilen metin parcasinin var olup olmadigina bakar

        await expect(page.getByText('Book Store Application')).toHaveText('Book Store Application')
        await expect(page.getByText('Book Store Application')).toHaveText('Book Store Application ')
        await expect(page.getByText('Book Store Application')).toHaveText(' Book Store Application')
        // await expect(page.getByText('Book Store Application')).toHaveText('book Store Application')
        // Locate edilen yazilan verilenle birebir ayni olup olmadigina bakar
    })

})




