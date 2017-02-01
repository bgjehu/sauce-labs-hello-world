module.exports = () => {
    const webdriver = require('selenium-webdriver');
    const username = process.env.SAUCE_USERNAME;
    const accessKey = process.env.SAUCE_ACCESS_KEY;
    const usingSauceLabs = username && accessKey;
    const capabilities = () => {
        return Object.assign({
            'browserName': 'chrome'
        }, usingSauceLabs ? {
                username, accessKey
            } : {});
    };
    const serverUrl = () => {
        return `http://${usingSauceLabs ? `${username}:${accessKey}@ondemand.saucelabs.com:80` : 'localhost:4444'}/wd/hub`;
    };
    const cap = capabilities();
    const url = serverUrl();
    const driver = new webdriver.Builder()
        .withCapabilities(capabilities())
        .usingServer(serverUrl())
        .build();
    return driver;
};