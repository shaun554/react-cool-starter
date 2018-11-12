/* eslint-disable lodash/prefer-lodash-method */

import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

export default (
  head: Object,
  bundles: string[],
  htmlContent: string,
  initialState: Object
): string => {
  // Use pre-defined assets in development. "main" is the default webpack generated name.

  const styles = bundles.filter(file => file.endsWith('.css'));
  const scripts = bundles.filter(file => file.endsWith('.js'));

  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico">

        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <!-- Insert bundled styles into <link> tag -->
        ${styles
          .map(
            file =>
              `<link href="${file}" media="screen, projection" rel="stylesheet" type="text/css">`
          )
          .join('')}
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>

        <!-- Insert loadableModulestate's script tag into page (loadable-components setup) -->

        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>

        <!-- Insert bundled scripts into <script> tag -->
        ${scripts.map(file => `<script src="${file}"></script>`).join('')}

        ${head.script.toString()}
      </body>
    </html>
  `;

  // html-minifier configuration, refer to "https://github.com/kangax/html-minifier" for more configuration
  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  // Minify html in production
  return __DEV__ ? html : minify(html, minifyConfig);
};
