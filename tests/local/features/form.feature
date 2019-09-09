Feature: Form

   All steps in the form should be accessible

Scenario: Walk through the stepper
    Given I open the url "http://localhost:1000/"
    And I disable the accessibility rule "color-contrast"
    Then the section "#homepage-stepper" should be accessible
    When I click the button ".--active .--next" and wait for the element '[step-id="1"]'
    Then the section "#homepage-stepper" excluding '.suggestion img' should be accessible
    And I click the button ".--active .--next" and wait for the element '[step-id="2"]'
    Then the section "#homepage-stepper" should be accessible
