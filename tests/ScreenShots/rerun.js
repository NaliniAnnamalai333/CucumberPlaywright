module.exports={
        
    default:{
        

        require:[
            "tests/Stepdefinition/*.js"
        ],

        tags:"E2E",

        dryrun:false,

        format: [
    "progress",
    "json:Reports/cucumber_report.json",
    "junit:Reports/cucumber_report.xml",
    "html:Reports/cucumber_report.html",
    "allure-cucumberjs/reporter"

],

formatOptions:{
    resultsDir:"allure-results"
}
        
    }
}
