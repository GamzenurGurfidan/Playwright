import{test,expect} from '@playwright/test'

test.describe('Google Arama', ()=>{

    /*
        test.beforeEach test durumu eger test.describe icinde tanımlanırsa
        sadece o describe scope'u icin gecerli olur
        describe oncesinde(disinda) tanimlanirsa sayfadaki tum describelar icin gecerli
        tum describelar icindeki testlerin ilk adimi olur
    */

    test.beforeEach('Google Anasayfa', async ({page})=>{

        await page.goto('https://www.google.com/')
        await page.setViewportSize({width:1920 , height:1080})

    })

    test('Nutella arama sonucu', async({page})=>{

        
        await page.locator('#APjFqb').fill('Nutella')
        await page.locator("//*[@name='btnK']").nth(1).press('Enter');
        await page.click('#hdtb-tls');
        const result = await page.locator('#result-stats').textContent(); // java da gettext gibi
        console.log(result);
    
    })

    test('Wise Quarter arama sonucu', async({page})=>{

        
        await page.locator('#APjFqb').fill('Wise Quarter')
        await page.locator("//*[@name='btnK']").nth(1).press('Enter');
        await page.click('#hdtb-tls');
        const result = await page.locator('#result-stats').textContent(); // java da gettext gibi
        console.log(result);
    
    })

})

