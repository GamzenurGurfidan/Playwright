import{test, expect} from '@playwright/test';
import exp from 'constants';

test('Generic Assertion', async({page})=>{

    let sayi1 = 15;
    let sayi2 = 27;
    
    expect(sayi1).not.toBe(sayi2);
    
    // Primitive data turlerinde esitlik icin toBe() methodu kullanılır
    // Kompleks data turleri icin toBe() methodu bazen sorun cikarabilir
    // onlarla toEqual() methodu kullanılır

    let str1 = "string";
    let str2 = "string";

    expect(str1).toBe(str2);

    let sayi3 = 0.1;
    let sayi4 = 0.2;

    //expect(sayi3 + sayi4).toBe(0.3); 
    // float binary donusumundeki sorunlardan kaynaklaniyor
    expect(sayi3 + sayi4).toBeCloseTo(0.3);
    // bu nedenle odaklı sayilarin esitlik dogrulamsinda toBeCloseTo() methodu kullanilir

    const obje1 = {
        maas : 20000,
        yas : 27
    }

    const obje2 = {
        maas : 20000,
        yas : 28
    }

    expect(obje1).not.toEqual(obje2);
    expect(obje1.maas).toBe(obje2.maas);

    let str3 = "Selenium vs. Playwright"

    expect(str3).toContain('ium');

    const arr = [1, 2, 6, 78, 125, 369, 981];
    expect(arr).toContain(125);

    const arr2 = [{no:100},{no:101},{no:102},{no:103}]
    expect(arr2).toContainEqual({no:100})

})

test('Nutella arama sonucu', async({page})=>{

    await page.goto('https://www.google.com/')
    await page.locator('#APjFqb').fill('Nutella')
    await page.locator("//*[@name='btnK']").nth(1).press('Enter');


})
