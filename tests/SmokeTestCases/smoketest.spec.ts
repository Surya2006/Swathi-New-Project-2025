

/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content. non interactive elements
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import{test,expect,Locator} from "@playwright/test"

test("Verify Playwright Locators",async({page}) =>{
await page.goto("https://demo.nopcommerce.com/");
//1.page.getByRole() to locate by explicit and implicit accessibility attributes.
//use this locator when your element supports alt text such as img and area elements.
//1.Identifing the element
//const logo:Locator= page.getByAltText = ("nopCommerce demo store")
const logo: Locator = page.getByAltText("nopCommerce demo store");
//2.action on the element
await expect(logo).toBeVisible();

//2.page.getByText() to locate by text content. You cna match by a substring, exact string,
//use this locator to find non interactive elements like div, span, paragarh etc.
//for interactive elemnts like button, input, etc. use rold locatros
await expect(page.getByText("welcome to ur store")).toBeVisible //full string //fulltext
//await expect(page.getByText("welcome to ")).toBeVisible //substring //partial text
//await expect(page.getByText("/Welcome\s+to\s+our\s+store/i")).toBeVisible //regular expression for case sensitive

//page.getByRole() to locate by explicit and implicit accessibility attributes.
//Role locators include buttons, check boxes, headings , links, lists tables.
//prefer for interactive elemtns like buttons, checkboxes, links, lists, headings, tables etc.

await page.getByRole("link", {name:'Register'}).click();
await expect (page.getByRole("heading",{name:'Register'})).toBeVisible(); //we can also use get by text()


//await page.getByRole("link", {name:'Log in'}).click();
//await expect (page.getByRole("heading",{name:'Welcome, Please Sign In!'})).toBeVisible();

//4.page.getByLabel() to locate a form control by associated label's text.

await page.getByLabel('First name:').fill("John");
await page.getByLabel('Last name:').fill("Kennedy");
await page.getByLabel('Email:').fill("abc@gamil.com");

//5.page.getByPlaceholder() to locate an input by placeholder.
//Best for inputs without a label but having a place holder
page.getByPlaceholder("Search store").fill('HTC One Mini Blue')

//6.getByTitle and 7.getByTestId will not work inthis file because, those tests worked on tutor computer and in his local

//6.page.getByTitle() to locate an element by its title attribute.
//when to use: When your element has a meningful title attribute
await page.goto("file:///c:/users/pavan/onedrive/Deslktop/playwrightlocators.html")
//const link:Locator= page.getByTitle("Home Page link")
//expect(link).toHaveText("Home")
await expect(page.getByTitle("Home Page link")).toHaveText("Home")
await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML")

//7.page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
//when to use: when text or role-based locators are unstable or not suitable
await expect(page.getByTestId("profile-email")).toHaveText("abc@gamil.com");
await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

})