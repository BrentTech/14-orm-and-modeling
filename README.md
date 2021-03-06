![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API Server

### Author: Brent Woodward

### Links and Resources
[![Build Status](https://www.travis-ci.com/BrentTech/14-orm-and-modeling.svg?branch=master)](https://www.travis-ci.com/BrentTech/14-orm-and-modeling)
* [repo](https://github.com/BrentTech/14-orm-and-modeling)
* [travis](https://www.travis-ci.com/BrentTech/14-orm-and-modeling)
* [back-end](https://lab14apiserver.herokuapp.com/) (when applicable)


#### Documentation
* [jsdocs](https://lab14apiserver.herokuapp.com/docs)

### Modules
#### `modulename.js`
##### Exported Values and Methods


### Setup
#### `.env` requirements
* `PORT` - Provided by hosting service.
* `MONGODB_URI` - Provided by hosting service.

#### Running the app
* `npm start`
* Endpoint: `/api/v1/team`
  * Returns a JSON object with teams and their players in it.
* Endpoint: `/api/v1/players`
  * Returns a JSON object with all players in it.
* Endpoint: `/api/v1/team/id`
  * Returns a JSON object with a single team in it.
* Endpoint: `/api/v1/players/id`
  * Returns a JSON object with a single player in it.
  
#### Tests
* How do you run tests?
npm test <filepath>, however they are not working currently. The manipulations that I made for part of the lab are throwing different errors.
* What assertions were made?
* What assertions need to be / should be made?
I think there are more assertions that can be made about how the team is formatted with the virtual setup between the two collections
