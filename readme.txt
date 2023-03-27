html-webpack-plugin - is for bundling html files from src to dist directory

html-loader - is for auto refreshing the page after changes in index.html

mini-css-extract-plugin - is for bundling of css styles in the file index.[contenthash].css
                          and not in the style tag of index.html

normalize.css - Normalizing css tries to even out the differences between browsers when rendering            html-elements. Many browser have "pre-settings": p and h-elements have vertical margins, lists have some margin and padding too. em and strong tags have bold font-weight.
All this pre-settings are reset, so that you have a consistent working-base in all the browsers.

module.exports = {
  devServer: {      -this way we change the port and enable auto opening of a browser using npm run start
    port: 3000,     -if we change css styles in our files, changes are instantly visible on the page
    open: true,
    hot: true,
  },
}


image-webpack-loader - minimizes the image size