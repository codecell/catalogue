## Catalogue
A basic catalogue app to play around with the [financialmodelingprep](https://financialmodelingprep.com/developer) API, built with react hooks and redux.

## Preview
|                |                |
|----------------|----------------|
|<img src='./assets/pic.png' />|<img src='./assets/pic2.png' />|

## Live version
[catalogue](https://incomecatalogue.herokuapp.com/)

## Technologies
  - React
  - Javascript
  - HTML
  - CSS

## Installation
Follow the steps below to test the project locally. First ensure you have a version of [Node.js](http://nodejs.org/) equal or greater than v6.10.0 installed.

1. Clone the repository from a terminal `https://github.com/codecell/catalogue.git`.
2. Navigate to the project directory `cd catalogue`.
3. Install project dependencies `npm install` OR `yarn install`.
4. To get your unique API secret, you need to register for a free account at the [financialmodelingprep](https://financialmodelingprep.com/developer) webpage.
5. At initial run of this project you'll get a list of real data from the API representing income statements for AAPL(Apple inc) company for various dates, to be able to dynamically cycle(filter data by comapny), you need to replace the last word `demo` in the url link found in src/actions/index with your unique API key, this API is strictly metred and limited for the number of calls you can make when on the `Free plan`.
6. Run `npm start` OR `yarn start` to compile  and serve a development build live on `http://localhost:3000` 
or any other port randomly available to React.

## Unit testing
To run the unit tests, 
1. Ensure you've installed the project dependencies.
2. Run `npm run test` OR `yarn run test` to run the unit tests, if it's only one of the test suites that is ran, hit on key a on your keyboard to run all test suites.

👤 **Ezaka Alfred**

- Github: [@Codecell](https://github.com/codecell)
- Twitter: [@Codecell](https://twitter.com/the_codecell)
- LinkedIn: [@Codecell](https://www.linkedin.com/in/alfrednoble/)

## Show your support

Give a ⭐️ if you like this project!