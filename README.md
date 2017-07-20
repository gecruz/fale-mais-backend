# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm start` to start the local server
- `npm test` to test the API

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose) 
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator)
## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.