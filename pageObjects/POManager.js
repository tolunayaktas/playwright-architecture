const {HomePage} = require('./HomePage');
const {FlightsPage} = require('./FlightsPage');
const {DetailsPage} = require('./DetailsPage');


class POManager
{
constructor(page)
{
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.flightsPage = new FlightsPage(this.page);
    this.detailsPage = new DetailsPage(this.page);
}

getHomePage()
{
    return this.homePage;
}
getFlightsPage()
{
    return this.flightsPage;
}
getDetailsPage(){
    return this.detailsPage;
}
}
module.exports = {POManager};