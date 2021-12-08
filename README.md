# TweetJS

### Requests

`GET /`
Home page view

`GET /tweets`
Tweets list view

`GET /tweets/new`
Create new tweet view

`GET /tweets/:id`
Show tweet details view

`POST /tweets`
Create new tweet from JSON

JSON example :
  {
    "id": "uniqueId",
    "title": "Default title",
    "user": "User",
    "content": "Content"
  }
