module.exports={
        
    default:{
        
    paths:[
            "tests/Features/*.feature"

        ],
        require:[
            "tests/Stepdefinition/*.js"
        ],
        dryrun:false,

        format: [
    "progress",
    "json:Reports/cucumber_report.json",
    "junit:Reports/cucumber_report.xml",
    "html:Reports/cucumber_report.html"
]
        
    }
}
