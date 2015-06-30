Given(/^I am a signed in user$/) do
  visit '/'
end

Given(/^I click on the 'Calendar' icon$/) do
  return false
end

Then(/^I should see my calendar$/) do
  return false
end

Then(/^the calendar should have all the events in the appropriate dates for the month in the month view$/) do
  return false
end

Then(/^when the user hovers over a date, then the events should appear with the relevant information$/) do
  return false
end

Then(/^the user should see a link to the event show page$/) do
  return false
end

Then(/^the user should see a minus icon to remove the event from the calendar$/) do
  return false
end

Then(/^the user should be able to browse through different months$/) do
  return false
end

Given(/^I click the 'Create event' button at the top of the screen$/) do
  return false
end

Then(/^I should see a form to create an event$/) do
  return false
end

Then(/^the form should have fields for date, time, location, title, description, category, and hashtags$/) do
  return false
end

Then(/^their should be a checkbox for 'private'$/) do
  return false
end

Then(/^their should be a button to post my event with Facebook$/) do
  return false
end

Given(/^'private' is selected$/) do
  return false
end

Then(/^I should receive an encrypted url to send via email to my friends$/) do
  return false
end

Given(/^I create an event$/) do
  return false
end

Then(/^the event should be listed in my profile page, unless it is private$/) do
  return false
end

Given(/^I visit the site$/) do
  visit '/'
end

Then(/^I should see a search bar in the top navigation bar for users$/) do
  return false
end

Given(/^I search for a user$/) do
  return false
end

Then(/^the page should show a listing of users with the search parameters$/) do
  return false
end

Given(/^I click on an organization's click$/) do
  return false
end

Then(/^I should see the user\/organization's avatar, name, and information$/) do
  return false
end

Then(/^I should see a list of the user's promoted events$/) do
  return false
end

Then(/^I should see a button to follow that user\/organization$/) do
  return false
end

Given(/^I follow the user$/) do
  return false
end

Then(/^the user's events should be posted to my MyTracks folder$/) do
  return false
end

Given(/^I click the 'Discover' icon in the sidebar$/) do
  return false
end

Then(/^MyTracks should show all events in the user's location not dependant on the user's selected interests$/) do
end

Then(/^I should be able to search events by hashtag$/) do
  return false
end

Given(/^I visit a hashtag page$/) do
  return false
end

Then(/^I will see the hashtag's name at the top of the screen$/) do
  return false
end

Then(/^I will see the hashtag related events in list view$/) do
  return false
end

Then(/^I will see the event creator's profile along with the event$/) do
  return false
end

Given(/^I am a logged in user and visit the home page$/) do
end

Then(/^I should see MyTracks \- a list view of suggested events based on my selected interests$/) do
end

Then(/^each event should have a clickable title and short description$/) do
end

Then(/^each event should be grouped by date$/) do
end

Then(/^each event should have a link to its organization$/) do
  return false
end

Then(/^each event should have a list of associated hashtags$/) do
  return false
end

Then(/^each event should have an icon to add the event to the user's attending folder and calendar$/) do
end

Then(/^each event should have, if applicable, a small avatar image of the organization on the left side$/) do
  return false
end

Then(/^the user should see a sidebar with different options$/) do
end

Then(/^the user should see a link to their profile at the top right corner of the page$/) do
end

Given(/^a new user visits the landing page$/) do
end

Then(/^the user should see events happening within (\d+) miles of their location$/) do |arg1|
end

Then(/^the events should be organized by category, location, and date$/) do
end

Then(/^the user should be able to open an individual event$/) do
  return false
end

Then(/^the user should be able to search the events by category, location, and date$/) do
  return false
end

Then(/^the user should be able to search events by a specific keyword\(s\)$/) do
  return false
end

Given(/^I click on the 'Map View' icon$/) do
end

Then(/^I should my MyTracks events mapped to a Google Maps map$/) do
end

Given(/^I change the search parameters by category, location, or date$/) do
  return false
end

Then(/^the map should reflect the new search parameters$/) do
  return false
end

Given(/^the user hovers over a marker$/) do
  return false
end

Then(/^the marker should display a popup with information about the event, and a plus icon, similar to the list view$/) do
  return false
end

Given(/^the user is signed in$/) do
end

Then(/^the user should see a sidebar on the left side of the page$/) do
  return false
end

Then(/^the sidebar should have a link to home$/) do
end

Then(/^it should have a link to the 'attending' folder$/) do
  return false
end

Then(/^the folder should have a list of attending events, and render them to the MyTracks section$/) do
  return false
end

Then(/^the sidebar should have a link to 'MyTracks'$/) do
  return false
end

Then(/^the sidebar should have a link to 'Suggested Events'$/) do
  return false
end

Given(/^the attending folder tab is clicked$/) do
  return false
end

Then(/^I should see a calendar icon next to each attending event$/) do
  return false
end

Then(/^I should see a minus icon next to each attending event$/) do
  return false
end

Given(/^the user clicks the plus icon$/) do
end

Then(/^the user should see a popup with a button to add the event to their calendar$/) do
  return false
end

Then(/^the popup should include an option to keep the event private$/) do
  return false
end

Then(/^the popup should include an option to promote the event$/) do
  return false
end

Given(/^the user clicks 'promote'$/) do
  return false
end

Then(/^an input field should appear to add a comment as well$/) do
  return false
end

Then(/^when the minus sign in clicked, the event should be removed from the attending folder and the calendar$/) do
  return false
end

Given(/^I am a signed up user$/) do
end

Then(/^the site should have access to my Facebook friend public profiles$/) do
  return false
end

Then(/^the site should determine which friends are registered on the site$/) do
  return false
end

Then(/^the site should display the events that they are attending as the suggested events$/) do
  return false
end

Then(/^a private event will not display to the suggested events$/) do
  return false
end

Then(/^a promoted event will display with the promoter's avatar and comment$/) do
  return false
end

Then(/^there should be options to login through Facebook or by entering their information$/) do
  return false
end

Then(/^there should be a description of the site$/) do
end

Given(/^I enter my information and am a registered user$/) do
end

Then(/^I should be signed in and directed to the home page$/) do
  return false
end

Given(/^I sign in through Facebook$/) do
  return false
end

Then(/^I should see a link to sign up$/) do
end

Then(/^the form should include email, password, username, city, button for Facebook permissions$/) do
end

Given(/^I submit my basic information$/) do
end

Then(/^I should see a second form with interests$/) do
  return false
end

Then(/^I should be able to check my selected interests$/) do
  return false
end
