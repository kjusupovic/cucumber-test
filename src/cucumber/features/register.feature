Feature: Register

  Scenario: Register form
    Given I navigate to form website
    When I fill first name "gdfgdfg"
    And I fill last name "ryba"
    And I choose gender
    And I fill date of birth "02/16/1988"
    And I fill address "xzy street 22"
    And I type email "info@email.com"
    And I type password "blabla"
    And I type company "MyCompanyName"
    And I choose role
    And I choose job expectation
    And I choose ways of development
    And I type comment "This is my first comment"
    And I press submit
    Then I can see success message