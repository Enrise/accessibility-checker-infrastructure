Feature: Homepage

    I can visit the Homepage

    Scenario: Visit the homepage
        When I open the url "http://localhost:1001/"
        Then the page should be accessible
