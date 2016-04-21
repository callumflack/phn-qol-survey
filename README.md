#PHN Quality of Life Survey
The PHN Quality of Life Survey is an **Express-based web application** developed for Pharmacy Health Networks Queensland, allowing patients to submit a specialised version of the World Health Organization Quality of Life (WHOQOL) survey online.

It has been **developed for ease-of-use and availability**, with support for various device types using **responsive HTML/CSS** technologies. This application is designed to be **hosted in a [Node.js](https://nodejs.org/en/) environment**, with a **publically-accessible** URL.

## Architecture
This application is built using **[Express.js](http://expressjs.com/) for data storage** and retrieval, along with **[React](https://facebook.github.io/react/) for view management** on the client-side.

## Sitemap
This is a work-in-progress and so is likely to change often.

![Sitemap v1.2.0](https://www.dropbox.com/s/zoee5kxly7u9pcx/sitemap-v1.2.0.png?dl=1)

## Sample React Webpack
A sample Webpack configuration based on [Christian Alfoni's early implementation](http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html). It offers a simple build with React, SASS and deployment in place. This will eventually be replaced with Express.js.

### Installation

NPM to the rescue. Although there are **some requirements**: [Node.js](https://nodejs.org/en/) and [**bower**](http://bower.io/).
```
npm install
```

### Development
Webpack has been configured to offer hot-loading of modules, and should work for SCSS, and JS alike (including JSX, for which we're just using the `.js` file extension rather than `.jsx`). JavaScript language **ES2015** is enabled thanks to Babel.
To get started, simply run the script:
```
npm run dev
```
A version of the site will be running on [http://localhost:8080](http://localhost:8080) if everything goes smoothly.

### Deployment
This example also features some early work on deployment preperation. The following script will run the deployment process, placing the relevant files in `./dist/`.
```
npm run deploy
```
This will perform a full compilation by Webpack into sensible bundles, ready for delivery via HTTP. The file `./dist/index.html` (**currently static**) should will load the app in your browser, but you'll **need to use a web server**. If you have [**python**](https://www.python.org/) installed, you may [fire up a light web server](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) within the `./dist` directory and start interacting with the app.

## License
Copyright (c) Patternworks, All rights reserved
Unauthorised copying of this file, via any medium is strictly prohibited.
Proprietary and confidential.
Written by Kashi Samaraweera &lt;kashi@kashis.com.au&gt;, 2016.