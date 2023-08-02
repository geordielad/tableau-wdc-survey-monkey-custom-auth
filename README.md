# Tableau WDC V3 Survey Monkey Connector
This project contains the source code for using the [Web Data Connector (3.0)](https://help.tableau.com/current/api/webdataconnector/en-us/index.html) framework to authenticate to Survey Monkey's [API](https://api.surveymonkey.com/v3/docs#SurveyMonkey-Api) using a Bearer token approach.  

## Create a Survey Monkey Private App

Create an app in the [Survey Monkey Developer Site](https://developer.surveymonkey.com/apps)

The application should be a private app as this will create the Access Token that will be used by the WDC.

![Survey Monkey App](/documentation.images/Survey-Monkey-App-Settings.png)

## WDC Setup

### Dependencies

In order to build this web data connector, you will need to install the dependencies required by Tableau.  

* Taco Toolkit - You will also need to install the Taco Toolkit, following the instructions [here](https://help.tableau.com/current/api/webdataconnector/en-us/index.html).  This provides the tooling to build & package your connector.  You can verify this is working by typing ```taco --version``` into your command window.  It should print the current version of the Taco Toolkit.

### Build & Package the WDC
Clone this repository and open a command window at the root of the project.  Enter the following commands, one at a time
```
# This will clean out your workspace (just in case there was some extra stuff in there)
taco clean

# Build the connector (installs dependencies, compiles code)
taco build

# Packages the connector in a format Tableau will recognize
taco pack

# Test the connector using Tableau Desktop
taco run Desktop
```
The last command should open up Tableau Desktop, with the connector installed.  Now it's time to test it out.

## Using the connector

Open Tableau Desktop and select the **Survey Monkey Custom Auth** connector from the list of possible data sources.  You will be prompted for an Access Token from your Survey Monkey account.  

You will need to create a private app in Survey Monkey to define an access Token and the callback to Tableau Desktop:

Once you've input your Access Token, click the **Get Data** button to execute the query.  You should get taken to the Data Sources page, which will show a table of surveys in your Survey Monkey account.

You will need to customize the app to fetch other data supprted by the API. This example only provides the Custom Authentication script(s).


