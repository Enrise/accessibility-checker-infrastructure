const { format } = require('util');
const colors = require('colors');
const { AxePuppeteer } = require('axe-puppeteer');
const { expect } = require('chai');

const error = colors.red;
const link = colors.underline.blue;
const selector = colors.yellow;
const html = colors.gray;

const selectorToString = (selectors, separator) => {
  separator = separator || ' ';
  return selectors
    .reduce((prev, curr) => prev.concat(curr), [])
    .join(separator);
};

const countViolations = ({ violations }) => {
  return violations.reduce((count, violation) => {
    return count + violation.nodes.length;
  }, 0);
};

const axeResultsToText = ({ violations }) => {
  return violations.reduce((message, violation) => {
    return (message +=
      format(
        '\n' +
          error('  Violation of %j with %d occurrences!\n') +
          '    %s. Invalid elements at:\n' +
          violation.nodes
            .map(
              node =>
                '     - ' +
                selector(selectorToString(node.target)) +
                ` ${html(node.html)} \n`
            )
            .join('') +
          '    Select all elements with: ' +
          selector(
            violation.nodes
              .map(node => selectorToString(node.target))
              .join(', ')
          ) +
          '\n' +
          '    For details, see: %s',
        violation.id,
        violation.nodes.length,
        violation.description,
        link(violation.helpUrl.split('?')[0])
      ) + '\n');
  }, '');
};

getAxePuppeteer = world => {
  const axe = new AxePuppeteer(world.page);
  if (world.axeDisableRules != undefined) {
    axe.disableRules(world.axeDisableRules);
  }
  return axe;
};

const checkAccessibility = async (world, include, exclude) => {
  const axe = new AxePuppeteer(world.page);
  if (world.axeDisableRules != undefined) {
    axe.disableRules(world.axeDisableRules);
  }
  if (world.axeUseTags != undefined) {
    axe.withTags(world.axeUseTags);
  }
  if (include) {
    axe.include(include);
  }
  if (exclude) {
    axe.exclude(exclude);
  }
  const results = await axe.analyze();
  const count = countViolations(results);
  world.attach(axeResultsToText(results));
  expect(count, `We found ${count} accessibility violations`).to.equal(0);
};

module.exports = {
  countViolations,
  axeResultsToText,
  checkAccessibility
};
