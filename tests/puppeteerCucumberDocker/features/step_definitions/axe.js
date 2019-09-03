const { Then } = require("cucumber");
const { expect } = require("chai");
const { AxePuppeteer } = require("axe-puppeteer");

Then("the page should be accessible", async function() {
  const results = await new AxePuppeteer(this.page).analyze();
  expect(results).to.not.have.violations;
});
