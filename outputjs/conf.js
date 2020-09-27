"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: "chrome",
        //binary: "C:/Program Files/Google/Chrome/Application/chrome.exe"
        chromeOptions: {
            binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            args: [],
            extensions: [],
        }
    },
    specs: [
        "./spectest/FlatMarketTest.js"
    ],
    seleniumAddress: "http://localhost:4444/wd/hub",
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
    }
};
