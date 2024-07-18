import{test,expect} from '@playwright/test'

test('file Upload Test', async({page}) => {
    await page.goto('https://demoqa.com/upload-download')
    await page.setViewportSize({width:1920, height:950});

    const uploadButton = page.locator('#uploadFile');
    await uploadButton.setInputFiles('C:\\Users\\Gamzenur\\Desktop\\newAlumniPlaywright\\uploadFiles\\japonev10.jpg')

    expect(await page.locator('#uploadedFilePath').textContent()).toContain('japonev10.jpg');

    await page.close();

})