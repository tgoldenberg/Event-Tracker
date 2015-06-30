Feature: Calendar
  As a site operator
  I wish for logged in users to have a map view
  In order to attract users to the site

  Scenario: Map View
   Given I am a signed in user
   And I click on the 'Map View' icon
   Then I should my MyTracks events mapped to a Google Maps map
   Given I change the search parameters by category, location, or date
   Then the map should reflect the new search parameters
   Given the user hovers over a marker
   Then the marker should display a popup with information about the event, and a plus icon, similar to the list view
