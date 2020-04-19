# hugo-tailwind-boilerplate

A very simple boilerplate for Hugo sites based on TailwindCSS.

[gulp](https://gulpjs.com/) handles Tailwind CSS builds via `postcss` with 2 tasks called `dev-css` and `build-css`.

There's 2 npm scripts defined that make use of these tasks:

1. **start**
2. **deploy**

`start` is meant for local development (and the whole power of Tailwind CSS + autocomplete classes), `deploy` will build the site into `./public` (using `hugo --minify`), ready for deployment.

This boilerplate also includes [purgecss](https://purgecss.com/) to remove unused styles from the final stylesheet that gets written to `static/css` for deployment.

For testing/troubleshooting etc., un-purged CSS can be built using `gulp dev-css` whereas purged CSS comes out of `gulp build-css`.

The Hugo setup is basic at best; should be enough to build upon though. See `layouts/_default/baseof.html` to get an idea what the default template looks like.

PS: some folders are filled with placeholder `txt` files; provides a better directory structure when downloading/forking this repository.

## Usage

In order to work with this repository, only 2 things are required:

- Hugo
- node/npm

If that's set up, then all you need is to get the repository, run `npm install` and then `npm run start`. Go to `localhost:1313` and you should see a one-page demo site you can start working with in your browser.

PS: the CSS in `./static/css` has been purged, so you may want to run `gulp dev-css` in order to make all of Tailwind available for your project and/or customize it through `tailwind.config.js` (see [their docs](https://tailwindcss.com/docs/configuration) for details).
