
const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click, Validate} = require("./function");
const { Login } = require("./login1");


async function test1(){
  
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://commerceos.staging.devpayever.com/registration/fashion");

  //login
  await Login(driver, "logintest1_test2@gmail.com");

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

  //validate Products field
  if(names.includes("Products") == true){
    console.log("The Products field are present on the dashboard")
  }else{
    console.log("The Products field are not present on the dashboard")
  }

  //validate Shop field
  if(names.includes("Shop") == true){
    console.log("The Shop field are present on the dashboard")
  }else{
    console.log("The Shop field are not present on the dashboard")
  }

  //validate Message field
  if(names.includes("Message") == true){
    console.log("The Message field are present on the dashboard")
  }else{
    console.log("The Message field are not present on the dashboard")
  }

  //validate settings field
  if(names.includes("Settings") == true){
    console.log("The Settings field are present on the dashboard")
  }else{
    console.log("The Settings field are not present on the dashboard")
  }

  setInterval(function(){
    driver.quit();
  }, 1000);
}

test1();
