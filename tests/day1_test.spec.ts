//whenever you create a new test case file use (spec.ts)

import {test, expect} from '@playwright/test'

// this is my first playwright typescript test
test("Verify page title", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/")  //launch / go to URL

    let title:string=await page.title()  // varify the url of page
    console.log("Title:",title)

   await expect(page).toHaveTitle("nopCommerce demo store. Home page title")

})

/*
 selenium Grid
 --------------------
 .Grid is a major component in selenium, through which we can also execute test 
  cases in the remote machines.

 .Remote machines means, suppose currently you are working on windows, and your test 
  cases and everything is present inside your windows. & if you want to execute
  your test cases on different operating system on different browsers, then we can 
  simuate that environment using Grig concept.

 .But why we need to execute test cases on multiple platform, because 
  we want to make sure that our test are working perfectly fine or our test cases 
  are passed in multiple OS or multiple browsers./ 

  we want to check our test cases are passed in multiple OS or multiple browsers,
  because the customers or cients can be used any type of browsers or any type of 
  operating systems. so if your application is supporting a diffeent OS / browsers
  then we have to perform testing on multiple OS and at the same time multiple
  browsers. so that is possible only through Grid compnent.
  
 .in the grid mainly there are two coponents:
  1) is Hub
  2) is Nodes
  Grid wil work based on the Hub Nodes concept.
  
*/





























