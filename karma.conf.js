module.exports = function (config) {
    config.set({
        // inform karma that we use jasmine as a test framework
        frameworks: ['jasmine'],
        // import all the needed files to run the tests
        files: [
            // import angular
            './node_modules/angular/angular.js',
            // import angular helpers for tests
            './node_modules/angular-mocks/angular-mocks.js',
            // import our application code
            './app.js',
            // import our test file
            './app.spec.js'
        ]
    })
}

