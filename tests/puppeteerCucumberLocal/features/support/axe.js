const { Assertion } = require("chai");
const { format } = require("util");
const colors = require("colors");
const { Cli } = require("cucumber");

const error = colors.red;
const link = colors.underline.blue;
const selector = colors.yellow;
const html = colors.gray;

Assertion.addProperty("violations", function() {
  const issueCount = logResults(this._obj);
  this.assert(
    issueCount > 0,
    "Expected to have violations",
    `We found ${issueCount} violations`
  );
});

const selectorToString = (selectors, separator) => {
  separator = separator || " ";
  return selectors
    .reduce((prev, curr) => prev.concat(curr), [])
    .join(separator);
};

const logResults = results => {
  const { violations } = results;
  const violationMessages = [];

  const issueCount = violations.reduce((count, violation) => {
    violationMessages.push(
      format(
        "\n" +
          error("  Violation of %j with %d occurrences!\n") +
          "    %s. Correct invalid elements at:\n" +
          violation.nodes
            .map(
              node =>
                "     - " +
                selector(selectorToString(node.target)) +
                ` ${html(node.html)} \n`
            )
            .join("") +
          "    Select all elements with: " +
          selector(
            violation.nodes
              .map(node => selectorToString(node.target))
              .join(", ")
          ) +
          "\n" +
          "    For details, see: %s",
        violation.id,
        violation.nodes.length,
        violation.description,
        link(violation.helpUrl.split("?")[0])
      )
    );
    return count + violation.nodes.length;
  }, 0);
  if (issueCount) {
    console.log(violationMessages.join("\n"));
  }
  return issueCount;
};
