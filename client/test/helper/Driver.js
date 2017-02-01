const webdriver = require('selenium-webdriver');
const SauceInfo = require('./SauceInfo');
const capabilities = (info, options) => {
    return Object.assign(options, info.used ? {
        username: info.username,
        accessKey: info.accessKey
    } : {});
};
const serverUrl = (info) => {
    return `http://localhost:${info.used ? '4445' : '4444'}/wd/hub`;
};

module.exports = (options) => {
    const info = SauceInfo();
    return new webdriver.Builder()
        .withCapabilities(capabilities(info, options))
        .usingServer(serverUrl(info))
        .build();
};