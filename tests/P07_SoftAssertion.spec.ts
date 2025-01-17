import {test,expect} from '@playwright/test';

test.describe('Soft Assertion', ()=>{

    test('DemoQA Soft Assertion', async ({page}) => {

        await page.goto('https://demoqa.com/')
        await expect.soft(page.getByText('Book Store Application')).toBeInViewport()
        await expect.soft(page.getByAltText('Selenium Online Training')).toBeInViewport()

        await expect.soft(page.getByText('Book Store Application')).toContainText('Store')
        await expect.soft(page.getByText('Book Store Application')).toContainText('ion')
        await expect.soft(page.getByText('Book Store Application')).toContainText('Book Store Application')

        await expect.soft(page.getByText('Book Store Application')).toHaveText('Book Store Application')
        await expect.soft(page.getByText('Book Store Application')).toHaveText('Book Store Application ')
        await expect.soft(page.getByText('Book Store Application')).toHaveText(' Book Store Application')
        await expect.soft(page.getByText('Book Store Application')).toHaveText('book Store Application')

    })


})