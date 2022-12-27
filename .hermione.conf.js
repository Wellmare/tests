module.exports = {
    baseUrl: "http://localhost:3000",

    browsers: {
        chrome: {
            automationProtocol: "devtools",

            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    },

    plugins : {
        "html-reporter/hermione": {
            path: "html-report"
        }
    }
}
