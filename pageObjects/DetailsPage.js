const { expect, keyboard } = require("@playwright/test");

class DetailsPage {

constructor(page)
{
    this.page = page;
    this.Proceed = page.locator("#proceed");
    this.firstTitleInput = page.locator("#passengerAdult-0-suffix");
    this.firstPassengerName = page.locator("#passengerAdult-0-firstname");
    this.firstPassengerSurname = page.locator("#passengerAdult-0-surname");
    this.firstPassengerBirthday = page.locator("#passenger-0-birthday");
    this.firstPassengerCitizenship = page.locator("(//label[@class='control checkbox'])[1]");
    this.firstPassengerID = page.locator("#passengerAdult-0-id");

    this.secondTitleInput = page.locator("#passengerAdult-1-suffix");
    this.secondPassengerName = page.locator("#passengerAdult-1-firstname");
    this.secondPassengerSurname = page.locator("#passengerAdult-1-surname");
    this.secondPassengerBirthday = page.locator("#passenger-1-birthday");
    this.secondPassengerCitizenship = page.locator("(//label[@class='control checkbox'])[3]");
    this.secondPassengerID = page.locator("#passengerAdult-1-id");

    this.adminName = page.locator("#contact-firstname");
    this.adminSurname = page.locator("#contact-surname");
    this.adminTitle = page.locator("#contact-suffix");
    this.adminPhone = page.locator("#contact-phone-number");
    this.adminEmail = page.locator("#contact-email");

    this.extraLuggage = page.locator("div[id='luggage'] div[class='description select-wrapper']");
    this.extraKG = page.locator("(//label[@class='control radio'])[4]");

    this.paymentPage = page.locator(".section-header.hidewalletimg");
}

async FirstPassengerInformation(name,surname,birthday,id)
{
    await this.Proceed.click();
    await this.page.waitForTimeout(2000);
    await this.firstTitleInput.click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.firstPassengerName.type(name);
    await this.firstPassengerSurname.type(surname);
    await this.firstPassengerBirthday.type(birthday);
    await this.firstPassengerCitizenship.click();
    await this.firstPassengerID.type(id);
    console.log("First passenger's information entered.");
}
async SecondPassengersInformation(name,surname,birthday,id)
{
    await this.secondTitleInput.click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.secondPassengerName.type(name);
    await this.secondPassengerSurname.type(surname);
    await this.secondPassengerBirthday.type(birthday);
    await this.secondPassengerCitizenship.click();
    await this.secondPassengerID.type(id);
    console.log("Second passenger's information entered.");

}

async ContactsInformation(email,phone)
{
    await this.adminEmail.type(email);
    await this.adminPhone.type(phone);
    await this.Proceed.click();
    console.log("The contact's information entered.");
}


async ExtrasThenAccessToThePaymentPage()
{

    await this.extraLuggage.click();
    await this.extraKG.click();
    await this.Proceed.click();
    console.log("You have arrived at the Payment page!");
}
}
module.exports = {DetailsPage};