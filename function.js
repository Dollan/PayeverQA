const {By} = require("selenium-webdriver");



async function waitForElementRender(driver, cssSelector, interval = 500, tries = 100){
    let triesLeft = tries;
    // While we haven't reached the max number of tries
    while(triesLeft > 0)
        try {
            // try to find and return element
            return await driver.findElement(By.css(cssSelector));
        } catch (e) {
            // if we reached an error subtract this try
            triesLeft--;
            // log error for debu purposes
            console.log(`Element not found yet. Tries remaining: ${tries-triesLeft}. Awaiting ${interval}ms...`);
            // wait interval ms with promise hack
            await (new Promise((resolve) => {
                // save timeout to clean it after promise is resolved
                const timeout = setTimeout(() => {
                    // resolve promise after interval milliseconds
                    resolve();
                    // clean timeout
                    clearTimeout(timeout);
                }, interval);
            }));
            
        }
    return null;   
}

async function SendKey(driver, element, text){
   return await driver.actions()
        .move({ origin: element })
        .pause(1000)
        .press()
        .pause(1000)
        .sendKeys(text)
        .perform();
}

async function Click(driver, element){
    return await driver.actions()
        .move({ origin: element})
        .pause(1000)
        .click()
        .perform();
}


async function Validate(driver, interval = 500, tries = 50){
    let triesLeft = tries;
    let valid = 0;
    let appsnames = [];
    while(triesLeft > 0){
        try {
            let apps = await driver.findElements(By.className('icons__title'));
            for(let a of apps){
                appsnames.push(await a.getText());
            }
            break
        } catch (e) {
            console.log(e)
            triesLeft--;
            await (new Promise((resolve) => {
                const timeout = setTimeout(() => {
                    resolve();
                    clearTimeout(timeout);
                }, interval);
            }));
            
        }    
    }
    return appsnames;
}

exports.Validate = Validate
exports.Click = Click;
exports.SendKey = SendKey;
exports.waitForElementRender = waitForElementRender;