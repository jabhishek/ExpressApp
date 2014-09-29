exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities : {
        browserName : 'chrome',
        'chromeOptions': {
            args: ['--test-type']
        }
    },
    specs: ['tests/e2e/**/*e2e.spec.js']
};