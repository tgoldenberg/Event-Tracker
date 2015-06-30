Feature: Calendar
  As a site operator
  I wish for logged in users to have a calendar view
  In order to attract users to the site

  Scenario: Calendar View
    Given I am a signed in user
    And I click on the 'Calendar' icon
    Then I should see my calendar
    And the calendar should have all the events in the appropriate dates for the month in the month view
    And when the user hovers over a date, then the events should appear with the relevant information
    And the user should see a link to the event show page
    And the user should see a minus icon to remove the event from the calendar
    And the user should be able to browse through different months
