Feature: Pages

    As a consumer
    I want the website to be accessible


    Scenario Outline: Check the pages
        Given I use the accessibility standards "wcag2a,wcag2aa"
        When I open the url "http://localhost:1000<PAGE>"
        Then the page should be accessible

        Scenarios:
            | PAGE |
            | / |
            | /docker/ |
            | /local/ |


    Scenario: Walk through the stepper on the homepage
        Given I open the url "http://localhost:1000/"
        And I disable the accessibility rule "color-contrast"
        Then the section "#homepage-stepper" should be accessible
        When I click the button ".--active .--next" and wait for the element '[step-id="1"]'
        Then the section "#homepage-stepper" excluding '.suggestion img' should be accessible
        And I click the button ".--active .--next" and wait for the element '[step-id="2"]'
        Then the section "#homepage-stepper" should be accessible
