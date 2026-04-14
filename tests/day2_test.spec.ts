import {test, expect}  from '@playwright/test'

// this is my second playwright typescript test

test("Verify page URL", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/")  //launch / go to URL

    // varify the url of page
    let url:string=await page.url()
    console.log("Title:",url)

    await expect(page).toHaveURL("https://demo.nopcommerce.com/")
})   


































































