const reporter=require("cucumber-html-reporter")

const options={
    theme:"bootstrap",
    jsonFile:"reports/cucmber_report.json",
    output:"reports/Custom/_report.html",
    reportSuiteAsScenarios:true,
    reportTitle:"Custom Report",
    metadata:{
        Environment:"QA",
        Browser:"Chrome",
        platform:"Windows 11",
        TestedBy:"Nalini"

    }
}

reporter.generate(options)