const { expect } = require("@playwright/test");

class HomePage {


constructor(page)
{
    this.page = page;
    this.cookiesHdr = page.locator("#onetrust-policy-title");
    this.cookiesAccept = page.locator("#onetrust-accept-btn-handler");
    this.fromInput = page.locator("label[for='search-mask-field-from']");
    this.izmir = page.locator("//span[normalize-space()='ADB']");
    this.toInput = page.locator("#search-mask-field-to");
    this.antalya = page.locator("//span[normalize-space()='AYT']");
    this.departureDate = page.locator("#search-mask-field-departure-date");
    this.day1 = page.locator("//td[@class='calendar__day' and @data-date='2024-03-01']");
    this.returnDate = page.locator("#search-mask-field-return-date");
    this.day2 = page.locator("td[data-date='2024-03-09']");
    this.passengers = page.locator("#search-mask-field-passengers");
    this.plusAdult = page.locator("//div[@class='search-mask__pax-overlay']//div[1]//span[1]//span[3]//*[name()='svg']");
    this.searchFlight = page.locator(".search-mask__submit");
    this.chooseYourFlight = page.locator("//div[@id='flights-outbound']//h2[1]//span[1]");
    this.success = this.chooseYourFlight !== null;
    this.numberOfPassengers = page.locator("div[class='from-to'] h3 span");
}

async GoToSite()
{   
    await this.page.goto("https://www.sunexpress.com/tr/");
    if (await this.cookiesHdr.isVisible()) {
        console.log("Cookies pop-up appeared.");
        await this.cookiesAccept.click();
        console.log("Cookies policy accepted.");

    } else {
        console.error("Cookies pop-up did not appear.");
    }
}

async SelectLocations(department,arrival)
{
    await this.fromInput.click();
    await this.fromInput.type(department);
    await this.izmir.click();
    await this.toInput.type(arrival);
    await this.antalya.click();
    
    await expect(this.departureDate).toBeEnabled();
    console.log("You have selected locations.");
}

async SelectDates()
{
    await this.departureDate.click();
    await this.day1.click();
    await this.returnDate.click();
    await this.day2.click();
    await this.page.waitForTimeout(1000);

    const attributeValue = await this.searchFlight.getAttribute('data-validated');
    expect(attributeValue).toBe('true');
    console.log("You have chosen departure and return dates.");

}

async SelectNumberOfPassengersAndSearchForFlights()
{
    await this.passengers.click();
    await this.plusAdult.click();
    await this.page.waitForTimeout(1500);
    await this.searchFlight.click();
    
    await expect(this.chooseYourFlight).toBeEnabled();
    console.log("You have arrived at the flight list page!");

    await expect(this.numberOfPassengers).toContainText("2 Yetişkin");
    console.log("You have chosen 2 passengers.");

}
}
module.exports = {HomePage};