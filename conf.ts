import {Config,browser} from "protractor";

export let config:Config={
    framework: "jasmine",
    capabilities:{
        browserName: "chrome",
        //binary: "C:/Program Files/Google/Chrome/Application/chrome.exe"

        chromeOptions: {
            binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            args: [],
            extensions: [],
        }
    },
    specs:[
        "./spectest/FlatMarketTest.js"
    ],
    seleniumAddress:"http://localhost:4444/wd/hub",
    onPrepare:()=>{
        browser.waitForAngularEnabled(false);
    }
}