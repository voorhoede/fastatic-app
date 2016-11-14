# Fastatic App

**Warning:** This app is still in Beta. As such, we currently only have a build 
for macOS.

## Introduction
Fastatic App shrinks your static site footprint. Making it even faster. Use it 
as a standalone app, or plug it directly in your build process via its engine
[`fastatic`](https://github.com/voorhoede/fastatic).

![Fastatic App](screenshot-start.png)

## Speed up your static site

A speedy website is important. Having a static site is a very good first step.
Using static site generators are very important. However, often times they do 
not optimise your site right out of the box. Fastatic App solves that by being a 
one stop solution. Drag your static site in Fastatic and it optimises it for 
you.

![Fastatic App output](screenshot-end.png)

## What does it do?

Minification. Your HTML, CSS and JS files will be minified. Image files are 
optimised. More features are on their way, but for now everything is minified.

## Contribute

This project builds on a version of 
[`fastatic`](https://github.com/voorhoede/fastatic) which is currently in 
development. As such, the `fastatic` module is not in the `package.js`. 

Once the `fastatic` module is released with the features this projects needs, 
the `package.json` is updated, and you don't have to jump through hoops any 
more.

For now, clone the [`fastatic`](https://github.com/voorhoede/fastatic) project 
and get it to work. Then, inside the project root execute `$ npm link`. This 
will 'install' `fastatic` in your global `.npm` directory. Next go to the root 
of this project (`fastatic-app`) and execute `$ npm link fastatic`.

## License

[MIT licensed](LICENSE) © [De Voorhoede](https://www.voorhoede.nl/)
