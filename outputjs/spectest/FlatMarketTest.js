"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlatMarket_1 = require("../specs/FlatMarket");
describe("flat market suite", function () {
    var fm;
    beforeAll(function () {
        fm = new FlatMarket_1.flatMarket();
    });
    it("launch url", function () {
        fm.launchUrl("https://christophercliff.com/flatmarket/");
    });
    it("print fruits", function () {
        var count = fm.getFruitsNameStartWithP();
        count.then(function (cnt) {
            console.log("fruits count that starts with P : " + cnt);
            expect(4).toEqual(cnt);
        });
    });
});
