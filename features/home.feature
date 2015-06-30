Feature: Home Page
  As a site operator
  I wish for logged in users to a properly displayed home page
  In order to attract users to the site

  Scenario: Home Page
    Given I am a logged in user and visit the home page
    Then I should see MyTracks - a list view of suggested events based on my selected interests
    And each event should have a clickable title and short description
    And each event should be grouped by date
    And each event should have a link to its organization
    And each event should have a list of associated hashtags
    And each event should have an icon to add the event to the user's attending folder and calendar
    And each event should have, if applicable, a small avatar image of the organization on the left side
    And the user should see a sidebar with different options
    And the user should see a link to their profile at the top right corner of the page
