const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click } = require("./function");


async function Login(driver, testemail){
  // fill first name
  try{
    const FirstnameInput = await waitForElementRender(driver, "input.ng-tns-c170-1")

    await SendKey(driver, FirstnameInput, "Andre")
  }
  catch(erro){
    console.log(erro);
  }
  //fill last name
  const LastnameInput = await driver.findElement(By.css("input.ng-tns-c170-2"));

  await SendKey(driver, LastnameInput, "Macuco")


  //fill email
  const Email = await driver.findElement(By.css("input.ng-tns-c170-3:nth-child(1)"));

  await SendKey(driver, Email, testemail)

  //fill password
  const Password = await driver.findElement(By.css("input.ng-tns-c170-4:nth-child(1)"));

  await SendKey(driver, Password, "Andrepmacsenhaforte123@gmail.com")

  //confirm password
  const ConfirmPassword = await driver.findElement(By.css("input.ng-tns-c170-5:nth-child(1)"));

  await SendKey(driver, ConfirmPassword, "Andrepmacsenhaforte123@gmail.com")

  //sing up button
  const ConfirmButton = await driver.findElement(By.css("button.signup-button:nth-child(4)"));

  await Click(driver, ConfirmButton);

  //  business information

  //fill company name
  try{
    const CompanyName = await waitForElementRender(driver,  "span.ng-tns-c170-8");

    await SendKey(driver, CompanyName, "testcompany")
  }
  catch(erro){
    console.log(erro);
  }

  //fill phone number
  const phone = await driver.findElement(By.css("input.ng-tns-c170-12"));

  await SendKey(driver, phone, "993208182");

  //sing up button
  const GetStarted = await driver.findElement(By.css(".signup-button"));
  
  await Click(driver, GetStarted);
  

  //welcome button
  try{
    const Welcome = await waitForElementRender(driver, ".welcome-screen-content-button > pe-progress-button-content:nth-child(1) > div:nth-child(1)")

    await Click(driver, Welcome)
  }
  catch(erro){
    console.log(erro)
  }
}

exports.Login = Login;
