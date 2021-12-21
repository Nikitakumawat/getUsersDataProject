# GET USERS DATA THROUGH API

# DESCRIPTION

This project fetches data of users through an API and displays users information like images, id , firstname , lastname and email of users in a grid format.
Technologies used are HTML , CSS , Bootstrap and ReactJS . I used HTML tags for rendering elements , CSS and Bootstrap for styling , ReactJS for fetching data and rendering cards grid of employees .

# Install and run the project
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Approach towards problem solving

* This project is built in ReactJS so , firstly I created a folder named getusersapp using npx create-react-app getusersapp.
* In App.js file create useState and fetched data from API using async and await in axios .
* Used try and catch block to catch the error if occurs any .
* Initialised data with res.data.data because in API there is a key named data and we want to access the array of objects for getting data of users.
* Call setPost with data to get the data from API and set it to initial value.
* Now, getPost gets array of objects stored in API .
* Created a navbar with company name and a button named Get Users for click and get data from API.
* Used onClick event on Get Users button using function getData.
* Through map method(applicable on arrays) renders all the keys of objects in return.
* Using map method helps in rendering all the array indexes . It behaves like one to one function of Discrete mathematics.
* For , Loading while fetching data from API .Create useState for loading and set it initially false. Created a component and with the help of React bootstrap imported spinner from react-bootstrap (installed react bootstrap using npm install react-bootstrap bootstrap@5.1.3).
* Rendered spinner and imported Loading component to App.js
* Now, with the help of if set setLoading true only when button is clicked and fetching is done and false when button is not clicked and error has occured.
* Now, the data fetched from api rendered with the help of map method is rendered in Card component of react-bootstrap .
* margin and other grid styling is done with the help of CSS and Bootstrap classes.
* All the files are imported in index.js file for rendering .
* Used Google fonts for styling.
