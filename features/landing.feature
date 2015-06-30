Feature: Landing Page
  As a site operator
  I wish for the landing page to display the proper information
  So that the site attracts users

  Scenario: Landing
    Given a new user visits the landing page
    Then the user should see events happening within 10 miles of their location
    And the events should be organized by category, location, and date
    And the user should be able to open an individual event
    And the user should be able to search the events by category, location, and date
    And the user should be able to search events by a specific keyword(s)
