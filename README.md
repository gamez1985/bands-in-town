# Bands In Town
A [simple React application](https://peaceful-anchorage-31825.herokuapp.com/) that connects to the [BandsInTown API] (https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0).<br>
- Where users can
  - Search an *artist* from their API
  - See Upcoming evests of that particular artist using their API
 
## Why?
I created this project, so where I can show a sample React application of mine.

## Screenshots
![Screenshot](https://freeadscenter.com/bands-in-town/Screenshot_1.jpg)
![Screenshot](https://freeadscenter.com/bands-in-town/Screenshot_2.jpg)

## Libraries/Frameworks Used
- React
- Context API
- Moment
- Axios
- React Router Dom
- Bootstrap 4
- Font Awesome

## Tools
- [react-scripts](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started)
  - Encapsulates (with ability to eject and take full control):
    - Webpack, Babel, ESlint, ...
  - We can smoothly build/deploy our React applications with [zero configurations](https://github.com/facebook/create-react-app#philosophy)
  - We're not locked in, and we can [eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) at any point of time to have full control over webpack/babel plugins/eslint/... and all other tools.

## UI
- I've used [Bootstrap](https://getbootstrap.com/) which's an awesome implementation of the Design for React
- Layouts/Components are based on [Bootstrap Grid System](https://getbootstrap.com/docs/4.1/layout/grid/), the application is completely **responsive**.

## Deployment
- I deployed the application on [Heroku](https://www.heroku.com/)
- https://peaceful-anchorage-31825.herokuapp.com/

## Extra features
- I have used Broswer localstorage to Persist the last entered artist and events across browser reloads/refreshes.
- I have used necessary links (Facebook, Event Page) to open in new tab
- I have used validation on search artist form
- I am showing error message if no result is found from an API
- I have added 404 Page

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
