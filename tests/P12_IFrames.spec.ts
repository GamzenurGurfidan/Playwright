import {test, expect} from '@playwright/test'

test.describe('IFrames Tests', () => {

    test.beforeEach('BeforeEach', async({page}) =>{

        await page.goto('https://demoqa.com/frames')
        await page.setViewportSize({width:1920, height: 1080})
    })

    test('iFrame Gecis', async ({page}) => {

        const frame1 = page.frameLocator('#frame1') // hangi frame icinde islem yapacagimizi  belirledi

        expect (await frame1.getByText('This is a sample page').textContent()).toBe('This is a sample page')

    })

    test('iFrame Gecis 2', async ({page}) => {

        const frame1 = page.frame({url:'https://demoqa.com/sample'})
        const textframe = await frame1?.getByText('This is a sample page').textContent();
        // frame1?. 'daki soru isareti(chaining operator) bu frame'in tanimli oldugunu kabul etmesini sagliyor
        expect(textframe).toBe('This is a sample page');

    })
})

test.describe('TestAutomation iFrame', () =>{

    test.beforeEach('BeforeEach', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.setViewportSize({width:1920, height: 1080})
        await page.evaluate(()=>{window.scrollBy(0,700)})

    })

    test('iFrame Name', async({page}) =>{
        const frame3 = page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'});
        const name:string='Murat';
        await frame3?.locator('#RESULT_TextField-0').fill(name);
        expect(await frame3?.locator('#RESULT_TextField-0').inputValue()).toBe(name);

        const femaleRadio =  frame3?.getByText('Female').nth(0);
        await femaleRadio?.check();
        expect(await femaleRadio?.isChecked()).toBeTruthy()

    })

    test('iframe Gender',async({page}) => {
        const frame3 = page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'});

        const femaleRadio =  frame3?.getByText('Female').nth(0);
        await femaleRadio?.check();
        expect(await femaleRadio?.isChecked()).toBeTruthy()

    })

    test('iframe Date',async({page}) => {
        const frame3 = page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'});

        let date:string = '05/19/2024'
        const dateInput = frame3?.locator('#RESULT_TextField-2')
        await dateInput?.fill(date);

        expect(await dateInput?.inputValue()).toBe(date)

    })

    test('iframe Job',async({page}) => {
        const frame3 = page.frame({url:'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'});

        const dropdown = frame3?.locator('#RESULT_RadioButton-3')
        const selectedValue = 'Radio-0'

        await dropdown?.selectOption({value:selectedValue})
        expect(await dropdown?.inputValue()).toBe(selectedValue)

    })
})