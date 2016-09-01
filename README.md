<img src="https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/src/assets/banner.png" alt="React Cool Starter" />

A simple but feature rich starter boilerplate for you to build an [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.mtjf14xy5) web app with the best development experience and a focus on performance and best practices.

Built on the top of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux) and [React Router](https://github.com/reactjs/react-router). Includes all the hot stuff and modern web development tools such as [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7), [Babel](https://babeljs.io/), [PostCSS](https://github.com/postcss/postcss-loader), [Immutable.js](https://facebook.github.io/immutable-js/), [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See section [**“Features”**](#features) for more other awesome features you can expect.

I will improve this starter boilerplate continuously and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it :)

[![build status](https://travis-ci.org/WellyShen/react-cool-starter.svg?branch=master)](https://travis-ci.org/WellyShen/react-cool-starter?branch=master)
[![dependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter?type=dev)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/LICENSE)


## Features

Really cool starter boilerplate with the most popular technologies and which are well maintenance:

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.aug1ngj77) rendering.
* [React](https://facebook.github.io/react/) as the view.
* [React Router](https://github.com/reactjs/react-router) as the router.
* [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, link, script and base tags on both server and client.
* [Express](https://expressjs.com/) server.
* [Babel](https://babeljs.io/) for ES6 and ES7 transpiling.
* [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
* [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7) for bundling and [**"Tree-Shaking"**](http://www.2ality.com/2015/12/webpack-tree-shaking.html) support.
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html) serves the files emitted from webpack over the Express server.
* [Webpack Hot Middleware]() allows you to add hot reloading into the Express server.
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server.
* [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
* [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action.
* [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
* [react-router-redux](https://github.com/reactjs/react-router-redux) to keep your router in sync with Redux state.
* [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) tweaks React component/store in real time.
* [nodemon](http://nodemon.io/) to reload non-boundled files (e.g. `./src/server.js`, `./tools/*.js`).
* [Immutable.js](https://facebook.github.io/immutable-js/) provides persistent data collections which increase efficiency and simplicity.
* [react-addons-shallow-compare](https://facebook.github.io/react/docs/shallow-compare.html) for a performance boost, it works perfectly with immutable data structure.
* [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
* [ESLint](http://eslint.org/) to maintain a consistent javascript code style (Airbnb's code style).
* [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style.
* CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer). CSS modules enabled.
* Image (with [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) for optimizing) and Font support.
* Split vendors libraries from client bundle.
* No other view engines, just javascript based HTML rendering template.
* Shared app config between development and production.
* 404 error page and redirect handling.


## Quick Start

**1. You can start by clone this repository on your local machine by running:**

```bash
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
``` 

**2. Install all of the npm packages:**

```bash
npm install
```

**3. Start to run it:**

```bash
npm run start:production  # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of corss-platform. Listing all the scripts as following:

`npm run <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Compiles the app to `./public/dist` and run it on the production server at `localhost:8080`.
`start:prod`|Run your app on the production server only at `localhost:8080`.
`clean`|Remove the `dist` folder from `./public` to clean the compiled stuff.
`build`|Clean the compiled stuff and compile your app to `./public/dist`.
`eslint`|Lint all `.js` files.
`stylelint`|Lint all `.scss` files.
`lint`|Lint all `.js` and `.scss` files.

Note: If you get the the following message, try to run `npm run build` to fix it.

> webpack-isomorphic-tools (waiting for the first webpack build to finish)


## App Structure

Here is the structure of this app, which serve as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                                    # The root path of static file
│   ├── favicon.ico                           # Favicon is placed in the same path with the main HTML page
│   └── dist                                  # All the built files will be placed into it
├── src                                       # App source code
│   ├── actions                               # Collections of actions
│   ├── assets                                # Assets required to render components
│   ├── config                                # App configuration settings
│   │   ├── default.js                        # Default settings
│   │   ├── index.js                          # Configuration entry point
│   │   └── prod.js                           # Production settings (overrides default settings)
│   ├── containers                            # Reusable container components
│   ├── reducers                              # Collections of reducers (registry and injection)
│   ├── theme                                 # App-wide style, vendor style, generally settings
│   ├── client.js                             # App bootstrap and rendering (webpack entry)
│   ├── configureStore.js                     # Configure and instrument redux store
│   ├── renderHtmlPage.js                     # Main HTML page layout for app
│   ├── routes.js                             # Routes shared between client and server side
│   └── server.js                             # Express app (uses webpack middleware)                  
├── tools                                     # Project and build related configuration 
│   ├── es2015Preset.js                       # es2015 preset configuration file (for .babelrc)
│   ├── webpack.config.js                     # Webpack configuration file
│   └── webpackIsomorphicTools.config.js      # Webpack Isomorphic Tools configuration file
└── index.js                                  # App start point
```


## Overview

### Using Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow the installation guide to use it:

**For Chrome**

* from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`
* or run it in dev mode with npm i && npm start and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.

**For Firefox**

* from [AMO](https://github.com/zalmoxisus/redux-devtools-extension)
* or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).

**For Electron**

* just specify REDUX_DEVTOOLS in [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

**For other browsers and non-browser environment**

* use [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools).

### Stateless Functional Components

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a simpler way to define components called [stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions). These components are written in plain JavaScript functions. In this starter boilerplate we use it wherever possible.

### Adding Routes

Add your routes in `./src/routes.js`. For example:

```javascript
<Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="NewRoute" component={NewRoute} />  // Adding a new route
  <Route path="*" component={NotFound} />
</Route>
```

### Managing Title, Meta, Link, Script and Base

The parent `App.js` defines the base title and meta in a `<Helmet {...config.app} />` component. Any sub-component can override/add properties (supports base, meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) documents for more info.

### App config

You can store app settings under `./src/config`. The file `prod.js` will be loaded in production, and it inherits the info of `default.js`. You can access the correct config with:

```javascript
import config from './config';
```

### Using Styles

This starter boilerplate supports CSS and SASS. We use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

**With CSS modules:**

```javascript
import styles from './Home.scss';
...
render() {
  return (
    <div className={styles.Home}> // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.displayUserList()}
    </div>
  );
}
```

**Without CSS modules (you need to turn off CSS modules from `./tools/webpack.config.js`):**

```javascript
import './Home.scss';
...
render() {
  return (
    <div className="Home"> // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.displayUserList()}
    </div>
  );
}
```

(To be continue...)


## Known Issues

> Warning: [react-router] You cannot change <Router routes>; it will be ignored

You will see the error message above whenever the hot reload triggered. It's because of the React Hot Loader 3 will re-render the routes dynamically for view updating but [React Router](https://github.com/reactjs/react-router) doesn't support that yet (see this issue [react-router#2704](https://github.com/reactjs/react-router/issues/2704)). I will wait for the official fix then and not mind the error message ;)


## To Do...

There're some features I'd like to include into this starter boilerplate in the near future. If you have any great ideas or suggestion, feel free to fork this repository and share it to me.

- [ ] Unit Test
- [ ] Dynamic Routing
- [ ] Internationalization
