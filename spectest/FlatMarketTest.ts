import {flatMarket} from "../specs/FlatMarket";

describe("flat market suite",()=>{
    let fm:flatMarket;
    
    beforeAll(()=>{
        fm = new flatMarket();
    })

    it("launch url",()=>{
        fm.launchUrl("https://christophercliff.com/flatmarket/");
    })

    it("print fruits",()=>{
        let count = fm.getFruitsNameStartWithP();
        count.then((cnt)=>{
            console.log("fruits count that starts with P : " +cnt);
            expect(4).toEqual(cnt);
        })
    })
})