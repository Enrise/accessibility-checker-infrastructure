Feature: Pages

    All listed pages are accessible

    Scenario Outline: Check the pages
        Given I use the accessibility standards "wcag2a,wcag2aa"
        When I open the url "http://localhost:1000<page>"
        Then the page should be accessible

        Scenarios:
            | page |
            | / |
            | /docker/ |
            | /local/ |
