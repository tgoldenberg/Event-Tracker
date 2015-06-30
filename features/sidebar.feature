Feature: Sidebar
  As a site operator
  I wish for logged in users to see a properly displayed side bar
  So the site attracts more users

  Scenario: Sidebar
    Given the user is signed in
    Then the user should see a sidebar on the left side of the page
    And the sidebar should have a link to home
    And it should have a link to the 'attending' folder
    And the folder should have a list of attending events, and render them to the MyTracks section
    And the sidebar should have a link to 'MyTracks'
    And the sidebar should have a link to 'Suggested Events'

  Scenario: Attending Folder
    Given the attending folder tab is clicked
    Then I should see a calendar icon next to each attending event
    And I should see a minus icon next to each attending event
    Given the user clicks the plus icon
    Then the user should see a popup with a button to add the event to their calendar
    And the popup should include an option to keep the event private
    And the popup should include an option to promote the event
    Given the user clicks 'promote'
    Then an input field should appear to add a comment as well
    And when the minus sign in clicked, the event should be removed from the attending folder and the calendar

  Scenario: Suggested Events
    Given I am a signed up user
    Then the site should have access to my Facebook friend public profiles
    And the site should determine which friends are registered on the site
    And the site should display the events that they are attending as the suggested events
    And a private event will not display to the suggested events
    And a promoted event will display with the promoter's avatar and comment
