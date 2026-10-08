import utils from "../Utility/BaseClass.js"

class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.textusername = "//input[@name='email']"
        this.textpassword = "//input[@name='pass']"
        this.loginbutton="//div[@aria-label='Log in']"
    }
async enterUsername(email)
{
    await utils.fill(this.page,this.textusername,email)
}
async enterPassword(pass)
{
    await utils.fill(this.page,this.textpassword,pass)
}
async clicklogin()
{
    await utils.click(this.page,this.loginbutton)
}
}
export default LoginPage