Feature: Google

  Scenario Outline: Google search results
    Given I navigate to Google website
    When I type "<search>" in the searchbar
    And I press enter
    Then I can see the first result contains the word "<search>"
    Examples:
      | search |
      | piesek |
      | kotek  |
      | alpaka |