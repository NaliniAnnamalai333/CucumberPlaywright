import { chromium, firefox, webkit } from "@playwright/test"
import { Given, When, Then } from "@cucumber/cucumber"
import assert from "node:assert"
import utils from "../Utility/BaseClass.js"
import LoginPage from "../pages/Loginpage.js"
import RegistrationPage from "../pages/RegistrationPage.js"


let browser;
let context;
let page;
let login;
let register;


Given('the user should be login page', async function () {
 browser=await utils.launchBrowser("chromium",false)
 context=await utils.launchContext(browser)
 page=await utils.launchPage(context) 
 await utils.launchUrl(page,"https://www.facebook.com/")

});

When('the user has to click the create new account button', async function () {
  register=new RegistrationPage(page)
  await register.clickCreateAccount()
});

When('The user has to fill firstname,lastname and other details',async function () {
  
  await register.enterfirstname("Nalini")
  await register.enterlastname("Annamalai")
  
});

When('The user has to click the submit button',async function () {
  await register.clicksubmit()
  
})

Then('The user should be get successfullyregistered message',async function () {
  console.log("User Successfully Registered")
  await utils.pageClose(page)
  
});


When('The user has to fill username {string} and password {string}', async function (user, pass) {
  login=new LoginPage(page)
  await page.waitForTimeout(2000)
  await login.enterUsername(user)
  await login.enterPassword(pass)

});
 
    

When('The user has to click the login button', async function () {
  await login.clicklogin()
});

Then('The user should be navigated in invalid login page', async function () {
const currentURL=await utils.getPageURL(page)
assert.ok(currentURL.includes("facebook"))
console.log("user in invalid page")
await utils.pageClose(page)
});