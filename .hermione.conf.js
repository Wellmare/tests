module.exports = {
    // gridUrl: 'http://localhost:8080',
    baseUrl: 'http://localhost:8080',
    sets: {
        desktop: {
            files: 'tests'
        }
    },

    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        // edge: {
        //     automationProtocol: 'devtools',
        //     desiredCapabilities: {
        //         browserName: 'edge'
        //     }
        // }
    }
};