const { expect, keyboard } = require("@playwright/test");

class FlightsPage {

constructor(page)
{
    this.page = page;
    this.Proceed = page.locator("#proceed");
}


async CompareThePricesAndClickTheCheapestOne() {
    
    await this.page.waitForTimeout(5000);
    await this.clickCheapestPrice('#flights-outbound .flightAmount');
    console.log("Cheapest departure ticket selected.")
    await this.page.waitForTimeout(5000);
    await this.clickCheapestPrice('#flights-inbound .flightAmount');
    console.log("Cheapest return ticket selected.")

}

//This function helps to above function.
async clickCheapestPrice(direction) {
    // The following code lists and compares prices for the given round trip or return value and clicks on the desired minimum value.
    const prices = await this.page.$$eval(direction, elements => elements.map(el => el.textContent.trim()));
    const numericPrices = prices.map(price => parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')));
    const minPrice = Math.min(...numericPrices);
    const minPriceIndex = numericPrices.indexOf(minPrice);
    const minPriceElement = (await this.page.$$(direction))[minPriceIndex];
    await minPriceElement.click();
}
}
module.exports = {FlightsPage};
