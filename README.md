# hugo-tailwind-boilerplate

A very simple boilerplate for Hugo sites based on TailwindCSS.

[gulp](https://gulpjs.com/) handles Tailwind CSS builds via `postcss` with 2 tasks called `dev-css` and `build-css`.

There's 2 npm scripts defined that make use of these tasks:

1. **start**
2. **deploy**

`start` is meant for local development (and the whole power of Tailwind CSS + autocomplete classes), `deploy` will build the site into `./public` (using `hugo --minify`), ready for deployment.

This boilerplate also includes [purgecss](https://purgecss.com/) to remove unused styles from the final stylesheet that gets written to `static/css` for deployment.

For testing/troubleshooting etc., purged CSS can be built using `gulp build-css`.

The Hugo setup is basic at best; should be enough to build upon though. See `layouts/_default/baseof.html` to get an idea what the default template looks like.

PS: some folders are filled with placeholder `txt` files; provides a better directory structure when downloading/forking this repository.