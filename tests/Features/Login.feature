@login @E2E
 Feature: To validate the login functionality of the facebook application

Background:
    Given the user should be login page



@smoke 
 Scenario: To validate the login functionality with invalid credentials

 When The user has to fill username "csenalini@gmail.com" and password "4567890987"
 And The user has to click the login button
 Then The user should be navigated in invalid login page

@sanity
Scenario: To validate the login functionality with invalid credentials

 When The user has to fill username "nishu@gmail.com" and password "45123213287"
 And The user has to click the login button
 Then The user should be navigated in invalid login page


@regreesion @retest
 Scenario:To validate the registation functionality


 When the user has to click the create new account button
 And The user has to fill firstname,lastname and other details
 And The user has to click the submit button
 Then The user should be get successfullyregistered message
 
 @retest @regression
 Scenario:To validate the registation functionality


 When the user has to click the create new account button
 And The user has to fill firstname,lastname and other details
 And The user has to click the submit button
 Then The user should be get successfullyregistered message