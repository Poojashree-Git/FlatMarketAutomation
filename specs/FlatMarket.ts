import { countReset } from "console";
import {browser, by, element, ElementFinder} from "protractor";

export class flatMarket{

    async launchUrl(url:string){
        await browser.manage().window().maximize();
        await browser.get(url);
    }

    async getFruitsName():Promise<string[]>{
        let fruitsList:string[]=[];

        await element.all(by.xpath("//div[@class='name']")).then((elements)=> {
            elements.forEach(async (ele)=>{
                await browser.actions().mouseMove(ele).perform().then(()=>{
                   ele.getText().then(async(text:string)=>{
                        fruitsList.push(text);
                    })
                });
            })    
        });
        return fruitsList;
    }

    async getFruitsNameStartWithP():Promise<number>
    {
        let fruits = await this.getFruitsName();
        console.log(fruits.length);
        console.log("total number of fruits is "+ fruits.length + " and fruits name : " +fruits);

        const fruit = fruits.filter((fruit)=>fruit.startsWith("P"));
        const count=fruit.length;
        console.log(fruit);
        return count;
   }
}