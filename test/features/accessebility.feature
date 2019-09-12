Feature: Pages

    As a consumer
    I want the whole website to be accessible
    Therefore I test all the pages and the stepper

    Scenario Outline: Check all pages for accessibility issues
        Given I use the accessibility standards "wcag2a,wcag2aa"
        When I open the url "<URL>"
        Then the page should be accessible

        Scenarios:
            | URL     |
            | /        |
            | /docker/ |
            | /local/  |

    Scenario: Check the second step of the stepper for accessibility issues
        Given I open the url "/"
        When I click the button ".--active .--next" and wait for the element '[step-id="1"]'
        Then the section "#homepage-stepper" excluding '.suggestion img' should be accessible

    Scenario: Check the third and last step of the stepper for accessibility issues
        Given I open the url "/"
        And I disable the accessibility rule "color-contrast"
        When I click the button ".--active .--next" and wait for the element '[step-id="1"]'
        And I click the button ".--active .--next" and wait for the element '[step-id="2"]'
        Then the section "#homepage-stepper" should be accessible
