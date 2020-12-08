# hugo-tailwind-boilerplate

A very simple boilerplate for Hugo sites based on Tailwind CSS.

[gulp](https://gulpjs.com/) handles Tailwind CSS builds via `postcss` with 2 tasks called `dev-css` and `build-css`.

There's 2 npm scripts defined that make use of these tasks:

1. **start**
2. **deploy**

`start` is meant for local development (and the whole power of Tailwind CSS + autocomplete classes), `deploy` will build the site into `./public` (using `hugo --minify`), ready for deployment.

This boilerplate provides the default Tailwind CSS configuration file `tailwind.config.js`. This file is set up to automatically purge unused styles based on the folders `./content` and `./layouts` if `NODE_ENV=production`.

Check the [Tailwind CSS docs](https://v1.tailwindcss.com/docs/controlling-file-size) for details on Tailwind's purge functionality.

The [Hugo](https://gohugo.io) setup is basic at best; should be enough to build upon though. See `layouts/_default/baseof.html` to get an idea what the default template looks like.

PS: some folders are filled with placeholder `txt` files; provides a better directory structure when downloading/forking this repository.

## Usage

In order to work with this repository, only 2 things are required:

- Hugo
- node/npm

If that's set up, then all you need is to get the repository, run `npm install` and then `npm run start`. Go to `localhost:1313` and you should see a one-page demo site you can start working with in your browser.