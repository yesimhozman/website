# Translating Datenanfragen.de

## Adding a new language

* Introduce Hugo to the new language in `config/_default/languages.toml`.
* Add a base URL in `config/production/languages.toml` and copy one of the existing blocks in `config/development/languages.toml` for the new language.
* In `src/Utility/common.ts`, add a fallback country to `fallback_countries`.
* In the translation file for the new language, set the values for the `macros` context.
* In all translation files, under `i18n-widget`, add the new language if necessary.
* In the deploy script `deploy.sh`, make sure to also copy the companies and SVAs for the new language.
* Add the new language to the `languageFiles` for `preact-i18n` in `.eslintrc.js`.
* In `webpack.common.js`, extend the array for the `translations-dummy` entrypoint with the new language code. Also link the new domain in the banner.
* In `content/` create a `*.[new lang].md` file for all pages that should be available in the new language. At least create the following files: `generator.md`, `id-data-controls.md`, `my-requests.md`, `privacy-controls.md`, `suggest.md`
* Update the privacy policies to include the new site under "Scope".
* Make sure there is at least one blog post or update `cypress/integration/use-cases/production.spec.js` accordingly.
* Change the CSS link selector for external links in `assets/styles/variables.scss`.
* Add the domain to `content/*/verein/_index.md`.
* Add the domain to the `sites` array in `cypress/integration/use-cases/production.spec.js`.
* Extend `languages` with the new domain and its translations in `components-package/src/index.ts`.
* Mention the new domain in the `README`.
* Add the domain in dattel (see `infrastructure` on how to do that) and set the appropriate DNS records.
* In `deploy-dattel.js`, add the new language to the `languages` array and trigger a deploy using `CONTEXT=production ./deploy.sh && yarn deploy-dattel`.
