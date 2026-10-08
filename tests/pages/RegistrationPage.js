import utils from "../Utility/BaseClass.js"

class RegistrationPage{
    constructor(page)
    {
        this.page=page

        this.btnCreate = "//a[@aria-label='Create new account']"       
        this.txtfirst="//input[@inputmode='text']"
        this.txtlast="(//input[@type='text'])[2]"        
        this.btnsubmit="(//div[@role='button'])[4]"
    
    }

    async clickCreateAccount(){
        await utils.click(this.page,this.btnCreate)

    }
    
    async enterfirstname(fname)
    {
        await utils.fill(this.page,this.txtfirst,fname)

    }

    async enterlastname(lname)
     {
        await utils.fill(this.page,this.txtlast,lname)

    }
    
    async clicksubmit()
    {
        await utils.click(this.page,this.btnsubmit)

    }
    }

export default RegistrationPage