Feature: Events
  As a site operator
  I wish for logged in users to have events
  In order to attract users to the site

  Scenario: Creating an Event
   Given I am a signed in user
   And I click the 'Create event' button at the top of the screen
   Then I should see a form to create an event
   And the form should have fields for date, time, location, title, description, category, and hashtags
   And their should be a checkbox for 'private'
   And their should be a button to post my event with Facebook
   Given 'private' is selected
   Then I should receive an encrypted url to send via email to my friends
   Given I create an event
   Then the event should be listed in my profile page, unless it is private

  Scenario: Search Users and Organizations
    Given I visit the site
    Then I should see a search bar in the top navigation bar for users
    Given I search for a user
    Then the page should show a listing of users with the search parameters

  Scenario: Organizations Tab
   Given I am a signed in user
   And I click on an organization's click
   Then I should see the user/organization's avatar, name, and information
   And I should see a list of the user's promoted events
   And I should see a button to follow that user/organization
   Given I follow the user
   Then the user's events should be posted to my MyTracks folder

  Scenario: Discover Tab
   Given I am a signed in user
   And I click the 'Discover' icon in the sidebar
   Then MyTracks should show all events in the user's location not dependant on the user's selected interests

  Scenario: HashTags
    Given I visit the site
    Then I should be able to search events by hashtag
    Given I visit a hashtag page
    Then I will see the hashtag's name at the top of the screen
    And I will see the hashtag related events in list view
    And I will see the event creator's profile along with the event
