const { Builder, By, Key } = require('selenium-webdriver');
const gecko = require('geckodriver');
const url = 'http://localhost:3000';
//const url = 'http://szit.hu';

async function testCalc() {
    let driver = await new Builder()
        .forBrowser('firefox').build();
    await driver.get(url);
    await driver.findElement(By.id('radius'))
        .sendKeys('35');
        await driver.findElement(By.id('height'))
        .sendKeys('35');
        await driver.findElement(By.id('calcButton'))
        .click();
       var surface = await driver.findElement(By.id('surface'))
        .getAttribute('value');
        console.log('Felszín:', surface);
        driver.close();
}
testCalc();