# Weather app using Openweathermap API

## 1. Create app:
npx create-react-app weather-tdd

## 2. Weather component
Add Weather.js file, which includes Openweathermap API call, hide key in .env folder.  

## 3. Testing
Write test in Weather.test.js. Mock the JSON output of the weather API, add it to ./__mocks__/openweathermap-response.json file.  
Test retreives 'I AM A TEST RESPONSE' from this folder to avoid breaching the API call limit with tests.  

## 4. Styling
Download Material UI for styling (yarn add @material-ui/core)
For structure, add grid to App.js, and cards to Weather.js.  
Add styling to new Weather.css file.


To run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Tests run with inbuilt react-scripts-test and Jest:
### `yarn test`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

===========
Solutions to bugs along the way:

Solution to this error (first Weather.test.js test failed to pass):
TypeError: Cannot read property 'then' of undefined

       8 |
       9 |   componentDidMount() {
    > 10 |     fetch("https://api.openweathermap.org/data/2.5/weather?q=Doha &appid=${process.env.REACT_APP_API_KEY}")
         |     ^
      11 |       .then(response => response.json())
      12 |       .then(data => {
      13 |           this.setState({items: data["weather"]})

      at Weather.componentDidMount (src/Weather.js:10:5)

https://stackoverflow.com/questions/62405645/how-to-mock-fetch-when-testing-a-react-app


This project was bootstrapped with [Create React App]  
(https://github.com/facebook/create-react-app).
