module.exports = function(eleventyConfig) {
  // Minimal, safe Eleventy config (CommonJS)
  // Adjust paths below if your project uses different directories.

  // Copy static assets directly to the output
  eleventyConfig.addPassthroughCopy({"src/site/styles": "styles"});
  eleventyConfig.addPassthroughCopy({"src/site/assets": "assets"});

  // Disable ghostMode in BrowserSync to avoid sync-related issues in CI
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  // Return basic directory structure compatible with many Eleventy projects
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src/site",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    templateFormats: ["njk", "md", "11ty.js", "html"]
  };
};
