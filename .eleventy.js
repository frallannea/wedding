const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // syntax highlights in markdown files
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  // hierarchical navigation using "eleventyNavigation" in markdown files
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Date:
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Tag functionality:
  eleventyConfig.setDataDeepMerge(true); // enables to merge "tags"
  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  // CSS:
  eleventyConfig.addPassthroughCopy("css");

  // JS dependencies and JS scripts for posts:
  eleventyConfig.addPassthroughCopy("scripts/*.js");
  eleventyConfig.addPassthroughCopy("pages/**/*.js");
  eleventyConfig.addPassthroughCopy({
    "node_modules/chart.js/dist/Chart.min.css" : "assets/Chart.min.css",
    "node_modules/chart.js/dist/Chart.min.js" : "assets/Chart.min.js"
  });

  // Images
  eleventyConfig.addPassthroughCopy("images/*.png");

  // Special game page
  eleventyConfig.addPassthroughCopy("pages/game/**/*.png");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.wav");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.ogg");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.mp3");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.json");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.map");
  eleventyConfig.addPassthroughCopy("pages/game/**/*.html");

};