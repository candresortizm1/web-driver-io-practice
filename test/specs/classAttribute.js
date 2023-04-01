import classAttr from "../pageobjects/classAttribute.page.js"

describe('Test The ClassAttribute Page', ()=>{

    before('optional description', async () => {
        await classAttr.open();
        await browser.pause(2000);
    });

    it('Only primaryButton Open Alert', async()=>{
        // the elements array must be called with async to use a foreach
        //https://webdriver.io/docs/async-migration/#foreach-loops
        
        const buttons = await classAttr.buttonsArray;

        for (const button of buttons) {
            await button.click();
            let alertOpen = await browser.isAlertOpen();
            let clases = await button.getAttribute('class');
            console.log("IS OPEN->"+alertOpen+" | CLASSES-> "+clases);
            if(alertOpen){ 
                await expect(button).toHaveElementClassContaining('btn-primary');
            }
        }

    })

    it('Primary Button open alert', async()=>{
        await expect(browser).toHaveTitleContaining('Class Attribute');
        await classAttr.primaryButton.click();
        expectChai(await browser.isAlertOpen()).to.be.true;
        expectChai(await browser.getAlertText()).to.equal('Primary button pressed');
        console.log("ButtonElement Class-> "+await classAttr.primaryButton.getAttribute('class'));
    })
})
