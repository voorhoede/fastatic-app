# Fastatic GUI

A GUI for `fastatic`

This project builds on a version of [`fastatic`](https://github.com/voorhoede/fastatic) which is currently in development.
As such, the `fastatic` module is not in the `package.js`. 

Once the `fastatic` module is released with the features this projects needs, 
the `package.json` is updated, and you don't have to jump through hoops any more.

For now, clone the [`fastatic`](https://github.com/voorhoede/fastatic) project 
and get it to work. Then, inside the project root execute `$ npm link`. This will 
'install' `fastatic` in your global `.npm` directory. Next go to the root of this
project (`fastatic-app`) and execute `$ npm link fastatic`.
