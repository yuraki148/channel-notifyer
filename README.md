# About
This is newChannelBot,it can make notification of new Slack Channel at Appropriate channel.

# Platform

* Slack
* Heroku

# How to use

* Clone this repository at Github.
* deploy your repository to Heroku.
* Create SlackApp on your Environment.

# Scope
-  [`chat:write`](https://api.slack.com/scopes/chat:write)
-  [`channels:read`](https://api.slack.com/scopes/channels:read)

# Requirements

* A Bot User must be added to your App
* Your App must be subscribed to [Events API](https://api.slack.com/events-api).
* Your app needs to be subscribed to the events mentioned in the *Events* section.
* Your app needs to be subscribed [`channel_created`](https://api.slack.com/events/channel_created).
* If you use free version of Heroku,you will have to solve cold start problem.
* this problem can be solved with using [Advanced Scheduler](https://elements.heroku.com/addons/advanced-scheduler).
