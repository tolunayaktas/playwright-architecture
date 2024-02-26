// @ts-check
const {  devices } = require('@playwright/test');


const config = {
  testDir: './tests',
  timeout: 60 * 1000,
  expect:{
    timeout:5000
  },
  reporter: 'html',
  use: {
    browserName : 'chromium',
    headless : false,
    args: ['--start-fullscreen'],
    screenshot : 'on',
    trace : 'on'
  },



};

module.exports = config;
