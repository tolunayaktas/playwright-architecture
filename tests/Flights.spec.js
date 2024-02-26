const {test,expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');

const departure = "izmir";
const arrival = "antalya";

//First Passenger
const name1 = "Tolunay";
const surname1 = "Aktaş";
const birthday1 = "22/02/1999"
const id1 = ""; //It requires a valid ID to pass.

//Second Passenger
const name2 = "Jane";
const surname2 = "Doe";
const birthday2 = "30/04/1988"
const id2 = "";//It requires a valid ID to pass.

//The Contact
const contactEmail = "tolunay@example.com";
const contactPhone = "5420001234";


test.only('SunExpress Tests E2E', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  const flightsPage = poManager.getFlightsPage();
  const detailsPage = poManager.getDetailsPage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
  await homePage.SelectNumberOfPassengersAndSearchForFlights();
  await flightsPage.CompareThePricesAndClickTheCheapestOne();
  await detailsPage.FirstPassengerInformation(name1,surname1,birthday1,id1);
  await detailsPage.SecondPassengersInformation(name2,surname2,birthday2,id2);
  await detailsPage.ContactsInformation(contactEmail,contactPhone);
  await detailsPage.ExtrasThenAccessToThePaymentPage();

});

test('Go to SunExpress Site', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.GoToSite();
});

test('Round-Trip Route Selection ', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
});

test('Select Departure and Return Dates', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
});

test('Select Number Of Passengers And Search For Flights', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
  await homePage.SelectNumberOfPassengersAndSearchForFlights();
});

test('Select the Cheapest Round Trip and Return Tickets', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  const flightsPage = poManager.getFlightsPage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
  await homePage.SelectNumberOfPassengersAndSearchForFlights();
  await flightsPage.CompareThePricesAndClickTheCheapestOne();
});

test('Enter Contact and Passengers Information', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  const flightsPage = poManager.getFlightsPage();
  const detailsPage = poManager.getDetailsPage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
  await homePage.SelectNumberOfPassengersAndSearchForFlights();
  await flightsPage.CompareThePricesAndClickTheCheapestOne();
  await detailsPage.FirstPassengerInformation(name1,surname1,birthday1,id1);
  await detailsPage.SecondPassengersInformation(name2,surname2,birthday2,id2);
  await detailsPage.ContactsInformation(contactEmail,contactPhone);
});

test('Select Extras and Reach the Payment Page', async({page})=>
{
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  const flightsPage = poManager.getFlightsPage();
  const detailsPage = poManager.getDetailsPage();
  await homePage.GoToSite();
  await homePage.SelectLocations(departure,arrival);
  await homePage.SelectDates();
  await homePage.SelectNumberOfPassengersAndSearchForFlights();
  await flightsPage.CompareThePricesAndClickTheCheapestOne();
  await detailsPage.FirstPassengerInformation(name1,surname1,birthday1,id1);
  await detailsPage.SecondPassengersInformation(name2,surname2,birthday2,id2);
  await detailsPage.ContactsInformation(contactEmail,contactPhone);
  await detailsPage.ExtrasThenAccessToThePaymentPage();
});


