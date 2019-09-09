const { Then, Given } = require('cucumber');
const { checkAccessibility } = require('../support/axe');

Given('I disable the accessibility rule(s) {string}', function(rule) {
  this.axeDisableRules = rule.split(',');
});

Given('I use the accessibility standard(s) {string}', function(tag) {
  this.axeUseTags = tag.split(',');
});

Then('the page should be accessible', async function() {
  await checkAccessibility(this);
});

Then('the page excluding {string} should be accessible', async function(
  excludeSelector
) {
  await checkAccessibility(this, null, excludeSelector);
});

Then('the section {string} should be accessible', async function(
  includeSelector
) {
  await checkAccessibility(this, includeSelector);
});

Then(
  'the section {string} excluding {string} should be accessible',
  async function(includeSelector, excludeSelector) {
    await checkAccessibility(this, includeSelector, excludeSelector);
  }
);
