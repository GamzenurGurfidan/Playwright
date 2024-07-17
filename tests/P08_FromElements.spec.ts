import {test, expect} from "@playwright/test";

test('testbox and radioButton', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const nameLocator = page.locator('#name');
    const mLocator = page.locator('#male');
    const fLocator = page.locator('#female');

    await nameLocator.fill('Murat');
    await fLocator.check();

    await expect.soft(nameLocator).toHaveValue('Murat');
    await expect.soft(fLocator).toBeChecked();

    const checkArr = [page.locator('#sunday'),page.locator('#monday'),page.locator('#tuesday'),
                      page.locator('#wednesday'),page.locator('#thursday'),page.locator('#friday'),page.locator('#saturday')];

    for (const each of checkArr){
        await each.check();
        await expect(each).toBeChecked();
    }                 

})