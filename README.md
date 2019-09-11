[![Build Status](https://travis-ci.com/Enrise/accessibility-checker-infrastructure.svg?branch=master)](https://travis-ci.com/Enrise/accessibility-checker-infrastructure)

# accessibility-checker-infrastructure

An example project setup with accessibility checking in place.

## How to view the examples locally

You can run the following commands to start / stop / update the example project.
- `make init` - Update/install the node packages
- `make start` - Start the example containers
- `make stop` - Stop the example containers
- `make dev` - Run the assets watcher
- `make build` - Build the assets
- `make test` - Run the accessibility tests (with docker and locally)

## Accessibility tests

In this project the accessibility testing is setup in two ways:
- With docker
- Locally (not in a docker container)

Both test setups use [cucumber](https://cucumber.io/docs/guides/overview/) as a test runner, [puppeteer](https://pptr.dev/) (chromium) is used to render the webpage and [axe](https://www.deque.com/axe/axe-for-web/documentation/api-documentation/#section-1-introduction) does the actual accessibility testing.

### Choosing the testing setup

For your own project you can choose what fits best. If you're using docker to run your app then it is most recommended to use the docker approach. It uses a pre-build image with all tools included ([more info](https://github.com/Enrise/puppeteer-cucumber)).

When using docker you don't need to install the devDependency `cucumber-puppeteer-axe`. That is only needed when you want to test it using NPM locally

## Deployment and testing

We are deploying and testing in the pipeline using Travis-CI. You can see results of the pipeline tests [here](https://travis-ci.com/Enrise/accessibility-checker-infrastructure).

Deployment of the example website is done to [GitHub Pages](https://enrise.github.io/accessibility-checker-infrastructure/)

## License

The MIT License (MIT). Please view the [License File](LICENSE) for more information.
