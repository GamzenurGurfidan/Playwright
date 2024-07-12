import {test,expect} from'@playwright/test'

test.describe('Hard Assertions', async()=>{

    test ('Demoblaze Assertions', async({page}) =>{
        await page.goto('https://www.demoblaze.com/cart.html')
        await expect(page).toHaveTitle('STORE')
        await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
        await expect(page.getByText('Place Order').nth(1)).toBeAttached()
    })
})

//2:16:49 mayis 13

