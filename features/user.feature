Feature: Users
  As a site operator
  I wish for users to be able to login/out of the site
  So that the site may attract users

  Scenario: Login
    Given a new user visits the landing page
    Then there should be options to login through Facebook or by entering their information
    And there should be a description of the site
    Given I enter my information and am a registered user
    Then I should be signed in and directed to the home page
    Given I sign in through Facebook
    Then I should be signed in and directed to the home page

  Scenario: Sign up
    Given I visit the site
    Then I should see a link to sign up
    And the form should include email, password, username, city, button for Facebook permissions
    Given I submit my basic information
    Then I should see a second form with interests
    And I should be able to check my selected interests
