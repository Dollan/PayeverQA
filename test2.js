
const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click, Validate } = require("./function");
const { Login } = require("./login2");


async function test2(){
  
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://commerceos.staging.devpayever.com/registration/santander");

  //login
  await Login(driver, "logintest2_test6@gmail.com");

  //validate app field
  let names = await Validate(driver);

  //validate Transactions field
  if(names.includes("Transactions") == true){
    console.log("The Transactions field are present on the dashboard")
  }else{
    console.log("The Transactions field are not present on the dashboard")
  }

  //validate Checkout field
  if(names.includes("Checkout") == true){
    console.log("The Checkout field are present on the dashboard")
  }else{
    console.log("The Checkout field are not present on the dashboard")
  }

  //validate Connect field
  if(names.includes("Connect") == true){
    console.log("The Connect field are present on the dashboard")
  }else{
    console.log("The Connect field are not present on the dashboard")
  }

  //validate Point of Sale field
  if(names.includes("Point of Sale") == true){
    console.log("The Point of Sale field are present on the dashboard")
  }else{
    console.log("The Point of Sale field are not present on the dashboard")
  }

  //validate Settings field
  if(names.includes("Settings") == true){
    console.log("The Settings field are present on the dashboard")
  }else{
    console.log("The Settings field are not present on the dashboard")
  }

  setInterval(function(){
    driver.quit();
  }, 1000);
}

test2();
