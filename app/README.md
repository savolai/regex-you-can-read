# Getting Started

As a JavaScript project, the app runs on `npm`, which comes with [NodeJS](https://nodejs.org/en/download/). Once it's installed you can run the following in the `app` directory:

    npm install
    
This will install all the required dependencies for the project. To start it up you can run:

    npm start
    
I'll replace this process with a `Makefile` at some point, as they give the opportunity to explain what's happening in the build process from within the terminal as well as allow for a well-formatted list of `help` commands that a user can make use of (I just mustn't forget).

# Stuff the Project Uses

The project uses [webpack](http://webpack.github.io/docs/what-is-webpack.html) to bundle and preprocess files. This means it takes care of the [ES2015](https://babeljs.io/docs/learn-es2015#introduction) (the newest version of JavaScript) and [PostCSS](http://postcss.org/) (a configurable CSS preprocessing system).

The projects also uses [ReactJS](https://facebook.github.io/react#examples) for HTML components, [Redux](http://redux.js.org/index.html) for logic and state control and management, and [CSS Modules](http://glenmaddern.com/articles/css-modules) to namespace and closure CSS files for their respective components.
