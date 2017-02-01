const runPageSpec = require('./PageSpec');
const Driver = require('../helper/Driver');
const info = require('../helper/SauceInfo')();
const localOption = [
    {
        browserName: 'chrome'
    },
    {
        browserName: 'chrome'
    }
];
const cloudOption = [
    {
        browserName: 'safari',
        platform: 'OS X 10.10'
    },
    {
        browserName: 'chrome',
        platform: 'Linux'
    },
    {
        browserName: 'internet explorer',
        platform: 'Windows 7'
    }
];
(info.used ? cloudOption : localOption).map((o)=>{
    runPageSpec(Driver(o));
});