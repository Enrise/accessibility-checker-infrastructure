const { Then } = require("cucumber");
const { expect } = require("chai");
const { AxePuppeteer } = require("axe-puppeteer");
const { countViolations, axeResultsToText } = require("../support/axe");

Then("the page should be accessible", async function() {
  const results = await new AxePuppeteer(this.page).analyze();
  const count = countViolations(results);
  const message = axeResultsToText(results);
  console.log(message);
  expect(count, `We found ${count} accessibility violations`).to.equal(0);
});
