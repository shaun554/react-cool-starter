<img src="https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/src/assets/banner.png" alt="React Cool Starter" />

A simple but feature rich starter boilerplate for you to build an [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.mtjf14xy5) web application with the best development experience and best practices.

Built on the top of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux) and [React Router](https://github.com/reactjs/react-router). Includes all the hot stuff and modern web development tools such as [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7), [Babel](https://babeljs.io/), [Immutable.js](https://facebook.github.io/immutable-js/), [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See section [**“Features”**](#features) for more other awesome features you can expect.

I will improve this starter boilerplate continuously and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it :)

[![build status](https://travis-ci.org/WellyShen/react-cool-starter.svg?branch=master)](https://travis-ci.org/WellyShen/react-cool-starter?branch=master)
[![dependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter?type=dev)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/LICENSE)


## Features

Really cool starter boilerplate with the most popular technologies and which are well maintenance:

- [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.aug1ngj77) rendering
- [React](https://facebook.github.io/react/) as the view
- [React Router](https://github.com/reactjs/react-router) as the router
- [Express](https://expressjs.com/) server
- [Babel](https://babeljs.io/) for ES6 and ES7 transpiling
- [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7) for bundling and [**"Tree-Shaking"**](http://www.2ality.com/2015/12/webpack-tree-shaking.html) supported
- [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html) serves the files emitted from webpack over the Express server
- [Webpack Hot Middleware]() allows you to add hot reloading into the Express server
- [Redux](https://github.com/reactjs/redux) for [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
- [Redux Thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience
- [React Router Redux](https://github.com/reactjs/react-router-redux) to keep your router in sync with Redux state
- [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) tweaks React component/store in real time 

(To be continue...)


## Quick Start

Step 1. You can start by clone this repository on your local machine by running:

```bash
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
``` 

Step 2. Install all of the npm packages:

```bash
npm install
```

Step 3. Start to run it:

```bash
npm run start:production  # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Scripts

I use [Better NPM Run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of corss-platform. Listing all the scripts as following:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.|
|`start:production`|Compiles the app to `./public/dist` and run it on the production server at `localhost:8080`.|
|`start:prod`|Run your app on the production server only at `localhost:8080`.|
|`clean`|Remove the `dist` folder from `./public` to clean the compiled stuff.|
|`build`|Clean the compiled stuff and compile your app to `./public/dist`.|
|`eslint`|Lint all `.js` files.|
|`stylelint`|Lint all `.scss` files.|
|`lint`|Lint all `.js` and `.scss` files.|

Note: If you get the the following message, try to run `npm run build` to fix it.

> webpack-isomorphic-tools (waiting for the first webpack build to finish)


## Application Structure

Here is the structure of this application, which serve as generally accepted guidelines and patterns for building scalable applications.

```
.
├── public                                    # The root path of static file
│   ├── favicon.ico                           # Favicon is placed in the same path with the main HTML page
│   └── dist                                  # All the built files will be placed into it
├── src                                       # Application source code
│   ├── actions                               # Collections of actions
│   ├── assets                                # Assets required to render components
│   ├── config                                # Application configuration settings
│   │   ├── default.js                        # Default settings
│   │   ├── index.js                          # Configuration entry point
│   │   └── prod.js                           # Production settings (overrides default settings)
│   ├── containers                            # Reusable container components
│   ├── reducers                              # Collections of reducers (registry and injection)
│   ├── theme                                 # Application-wide style, vendor style, generally settings
│   ├── client.js                             # Application bootstrap and rendering (webpack entry)
│   ├── configureStore.js                     # Configure and instrument redux store
│   ├── renderHtmlPage.js                     # Main HTML page layout for application
│   ├── routes.js                             # Routes shared between client and server side
│   └── server.js                             # Express application (uses webpack middleware)                  
├── tools                                     # Project and build related configuration 
│   ├── es2015Preset.js                       # es2015 preset configuration file (for .babelrc)
│   ├── webpack.config.js                     # Webpack configuration file
│   └── webpackIsomorphicTools.config.js      # Webpack Isomorphic Tools configuration file
└── index.js                                  # Application start point
```


## Overview

### Stateless Functional Components

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a simpler way to define components called [stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions). These components are written in plain JavaScript functions. In this starter boilerplate we use it wherever possible.

(To be continue...)


## Known Issues

> Warning: [react-router] You cannot change <Router routes>; it will be ignored

You will see the error message above whenever the hot reload triggered. It's because of the React Hot Loader 3 will re-render the routes dynamically for view updating but [React Router](https://github.com/reactjs/react-router) doesn't support that yet ([react-router#2704](https://github.com/reactjs/react-router/issues/2704)). I will wait for the official fix then and not mind the error message ;)


## To Do...

There're some features I'd like to include into this starter boilerplate in the near future. If you have any great ideas or suggestion, feel free to fork this repository and share it to me.

- [ ] Unit Test
- [ ] Dynamic Routing
- [ ] Internationalization
