$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Google",
  "description": "",
  "id": "google",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Google search results",
  "description": "",
  "id": "google;google-search-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to Google website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \"\u003csearch\u003e\" in the searchbar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see the first result contains the word \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "google;google-search-results;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 9,
      "id": "google;google-search-results;;1"
    },
    {
      "cells": [
        "piesek"
      ],
      "line": 10,
      "id": "google;google-search-results;;2"
    },
    {
      "cells": [
        "kotek"
      ],
      "line": 11,
      "id": "google;google-search-results;;3"
    },
    {
      "cells": [
        "alpaka"
      ],
      "line": 12,
      "id": "google;google-search-results;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2982946500,
  "status": "passed"
});
formatter.before({
  "duration": 2335844200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Google search results",
  "description": "",
  "id": "google;google-search-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to Google website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \"piesek\" in the searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see the first result contains the word \"piesek\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGoogleWebsite()"
});
formatter.result({
  "duration": 679683900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "piesek",
      "offset": 8
    }
  ],
  "location": "GoogleSteps.iTypeInTheSearchbar(String)"
});
formatter.result({
  "duration": 137028200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iPressEnter()"
});
formatter.result({
  "duration": 1048988300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "piesek",
      "offset": 46
    }
  ],
  "location": "GoogleSteps.iCanSeeTheFirstResultContainsTheWord(String)"
});
formatter.result({
  "duration": 61921900,
  "status": "passed"
});
formatter.after({
  "duration": 742022300,
  "status": "passed"
});
formatter.before({
  "duration": 2216166200,
  "status": "passed"
});
formatter.before({
  "duration": 2213449800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Google search results",
  "description": "",
  "id": "google;google-search-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to Google website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \"kotek\" in the searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see the first result contains the word \"kotek\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGoogleWebsite()"
});
formatter.result({
  "duration": 538708400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kotek",
      "offset": 8
    }
  ],
  "location": "GoogleSteps.iTypeInTheSearchbar(String)"
});
formatter.result({
  "duration": 116484300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iPressEnter()"
});
formatter.result({
  "duration": 1348703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kotek",
      "offset": 46
    }
  ],
  "location": "GoogleSteps.iCanSeeTheFirstResultContainsTheWord(String)"
});
formatter.result({
  "duration": 57534200,
  "status": "passed"
});
formatter.after({
  "duration": 707288400,
  "status": "passed"
});
formatter.before({
  "duration": 2185538000,
  "status": "passed"
});
formatter.before({
  "duration": 2366825600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Google search results",
  "description": "",
  "id": "google;google-search-results;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to Google website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \"alpaka\" in the searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see the first result contains the word \"alpaka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGoogleWebsite()"
});
formatter.result({
  "duration": 559281700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpaka",
      "offset": 8
    }
  ],
  "location": "GoogleSteps.iTypeInTheSearchbar(String)"
});
formatter.result({
  "duration": 128469700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iPressEnter()"
});
formatter.result({
  "duration": 1302806000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpaka",
      "offset": 46
    }
  ],
  "location": "GoogleSteps.iCanSeeTheFirstResultContainsTheWord(String)"
});
formatter.result({
  "duration": 72556500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat GoogleSteps.iCanSeeTheFirstResultContainsTheWord(GoogleSteps.java:63)\r\n\tat ✽.Then I can see the first result contains the word \"alpaka\"(google.feature:7)\r\n",
  "status": "failed"
});
