const reporter=require("cucumber-html-reporter")

const options={
    theme:"bootstrap",
    jsonFile:"reports/cucumber_report.json",
    output:"reports/custom_report.html",
    reportSuitesAsScenarios:true,
    launchReport:true,
    reportTitle:"Custom Report",
    metdata:{
        Environment:"QA",
        Browser:"Chrome",
        platform:"Windows 11",
        Testedby:"Nalini"
    }
}

reporter.generate(options)